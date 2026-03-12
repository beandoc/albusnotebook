import React, { useState, useRef } from 'react';

// Components
import TopNavBar from './components/TopNavBar';
import ToolPalette from './components/ToolPalette';
import NodeCard from './components/NodeCard';
import SuggestionPanel from './components/SuggestionPanel';
import SourcesSidebar from './components/SourcesSidebar';
import TopicChooser from './components/TopicChooser';
import Minimap from './components/Minimap';

// Hooks
import { useCanvas } from './hooks/useCanvas';
import { useGemini } from './hooks/useGemini';
import { useSources } from './hooks/useSources';
import { useBoardPersistence } from './hooks/useBoardPersistence';

const AIBoard = () => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [query, setQuery] = useState('');
  const [showInitial, setShowInitial] = useState(true);
  const [activeSuggestionsNode, setActiveSuggestionsNode] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const fileInputRef = useRef(null);

  // Custom Hooks
  const { sources, setSources, showSources, setShowSources, handleFileUpload, removeSource } = useSources();
  const { generateResponse, getSuggestions, suggestions, isLoading, isSuggesting } = useGemini(sources);
  const { svgRef, containerRef, transform, navigateTo } = useCanvas(nodes, links);
  const { clearPersistence } = useBoardPersistence(nodes, links, setNodes, setLinks, setShowInitial, sources, setSources);

  const saveToHistory = () => {
    setHistory(prev => [...prev.slice(-19), { nodes: [...nodes], links: [...links] }]);
  };

  const onUndo = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setNodes(last.nodes);
    setLinks(last.links);
    setHistory(prev => prev.slice(0, -1));
  };

  const onExport = () => {
    const data = JSON.stringify({ nodes, links, sources }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `notebook-board-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleGenerate = async (customQuery = null, parentNode = null, presetData = null) => {
    const activeText = customQuery || query;
    if (!activeText.trim()) return;
    
    saveToHistory();
    setQuery('');
    setShowInitial(false);
    const queryId = 'q-' + Math.random().toString(36).substr(2, 9);
    const responseId = 'r-' + Math.random().toString(36).substr(2, 9);
    
    // 1. Create Query Node
    const queryNode = {
      id: queryId,
      type: 'query',
      name: activeText,
      x: parentNode ? parentNode.x + 400 : window.innerWidth / 2 - 200,
      y: parentNode ? parentNode.y : window.innerHeight / 2,
    };

    // 2. Create Response Node (Thinking state or Preset)
    let initialContent = "Thinking...";
    let initialLoading = true;
    let initialSuggestions = null;

    if (presetData) {
      // Logic: Search for content match in the presetData array
      const match = (presetData.presetData || []).find(p => p.query === activeText);
      if (match) {
        initialContent = match.content;
        initialLoading = false;
        initialSuggestions = match.suggestions;
      } else if (presetData.content) {
        // Direct support for legacy preset objects
        initialContent = presetData.content;
        initialLoading = false;
        initialSuggestions = presetData.suggestions;
      } else if (presetData.suggestions) {
        // Carry forward suggestions even if no content match found
        initialSuggestions = presetData.suggestions;
      }
    }

    const responseNode = {
      id: responseId,
      type: 'response',
      name: activeText,
      x: queryNode.x + 400, // Reduced nudge to prevent overlap
      y: queryNode.y,
      color: parentNode ? 'yellow' : 'teal',
      content: initialContent,
      isLoading: initialLoading,
      presetSuggestions: initialSuggestions,
      presetData: presetData?.presetData || parentNode?.presetData || null
    };

    setNodes(prev => [...prev, queryNode, responseNode]);
    
    const newLinks = [{ source: queryId, target: responseId }];
    if (parentNode) {
      newLinks.push({ source: parentNode.id, target: queryId });
    }
    setLinks(prev => [...prev, ...newLinks]);

    setQuery('');
    setActiveSuggestionsNode(null);

    // Skip API call if we found preset Tier 1 content
    if (!initialLoading) return;

    try {
      const parentContent = parentNode ? parentNode.content : "";
      const text = await generateResponse(activeText, parentContent);
      setNodes(prev => prev.map(n => n.id === responseId ? { ...n, content: text, isLoading: false } : n));
    } catch (error) {
      setNodes(prev => prev.map(n => n.id === responseId ? { ...n, content: "⚠️ AI Error: " + (error.message || "Unknown error"), isLoading: false } : n));
    }
  };

  const onShowSuggestions = async (node) => {
    setActiveSuggestionsNode(node);
    // getSuggestions will now check if node.presetSuggestions exists
    await getSuggestions(node);
  };

  const onUpdateContent = (id, newContent) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, content: newContent } : n));
  };

  const onClearBoard = () => {
    if (window.confirm("Are you sure you want to clear the entire board?")) {
      setNodes([]);
      setLinks([]);
      setShowInitial(true);
      clearPersistence();
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0f1115]' : 'bg-[#fdfbf7]'}`}>
      <TopNavBar 
        sources={sources}
        showSources={showSources}
        setShowSources={setShowSources}
        showInitial={showInitial}
        onHome={() => setShowInitial(true)}
        query={query}
        setQuery={setQuery}
        onGenerate={handleGenerate}
        isLoading={isLoading}
        onClearBoard={onClearBoard}
        zoomPercent={Math.round(transform.k * 100)}
        isApiKeyMissing={!import.meta.env.VITE_GEMINI_API_KEY}
        onUndo={onUndo}
        onExport={onExport}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing bg-transparent">
        <g ref={containerRef}>
          {links.map((link, i) => (
            <path 
              key={i} 
              className="link-path"
              fill="none" 
              stroke={isDarkMode ? "rgba(255,255,255,0.15)" : "#1a1a1a"} 
              strokeWidth="1.5" 
              markerEnd={`url(#arrowhead-${isDarkMode ? 'dark' : 'light'})`} 
            />
          ))}

          <defs>
            <marker id="arrowhead-light" viewBox="0 -5 10 10" refX="28" refY="0" orient="auto" markerWidth="6" markerHeight="6">
              <path d="M 0,-5 L 10,0 L 0,5" fill="#1a1a1a" />
            </marker>
            <marker id="arrowhead-dark" viewBox="0 -5 10 10" refX="28" refY="0" orient="auto" markerWidth="6" markerHeight="6">
              <path d="M 0,-5 L 10,0 L 0,5" fill="rgba(255,255,255,0.4)" />
            </marker>
          </defs>

          {nodes.map(node => (
            <foreignObject 
              key={node.id} 
              className="node-group"
              width="400" 
              height="600"
              style={{ pointerEvents: 'none', overflow: 'visible' }}
            >
              <div className="relative pointer-events-auto flex flex-col items-center w-full h-full">
                <NodeCard 
                  node={node} 
                  isDarkMode={isDarkMode}
                  onRemove={() => {
                    saveToHistory();
                    setNodes(prev => prev.filter(n => n.id !== node.id));
                    setLinks(prev => prev.filter(l => (l.source.id || l.source) !== node.id && (l.target.id || l.target) !== node.id));
                  }}
                  onShowSuggestions={() => onShowSuggestions(node)}
                  onSubmitQuestion={(q) => {
                    // Check if this question is one of the preset suggestions
                    const preset = node.presetData?.find(p => p.query === q);
                    handleGenerate(q, node, preset);
                  }}
                  onRefresh={() => {
                    const parentLink = links.find(l => (l.target.id || l.target) === node.id);
                    const pNode = parentLink ? nodes.find(n => n.id === (parentLink.source.id || parentLink.source)) : null;
                    handleGenerate(node.name, pNode);
                  }}
                  onUpdateContent={onUpdateContent}
                  isActive={activeSuggestionsNode?.id === node.id}
                />
                
                {/* Embed SuggestionPanel INSIDE the tracked D3 group! */}
                {activeSuggestionsNode?.id === node.id && (
                  <div className="absolute left-[566px] top-[15px] z-[200] animate-fade-in pointer-events-auto origin-top-left">
                    <SuggestionPanel 
                      node={activeSuggestionsNode} 
                      onClose={() => setActiveSuggestionsNode(null)} 
                      onSelect={(s) => {
                         // Check if the suggestion has preset data
                         const preset = activeSuggestionsNode.presetData?.find(p => p.query === s);
                         handleGenerate(s, activeSuggestionsNode, preset);
                      }} 
                      suggestions={suggestions} 
                      isLoading={isSuggesting} 
                    />
                  </div>
                )}
              </div>
            </foreignObject>
          ))}
        </g>
      </svg>

      {showSources && sources.length > 0 && (
        <SourcesSidebar 
          sources={sources} 
          onClose={() => setShowSources(false)} 
          onRemove={removeSource} 
          onAddMore={() => fileInputRef.current?.click()} 
        />
      )}

      {showInitial && (
        <TopicChooser 
          query={query}
          setQuery={setQuery}
          onGenerate={handleGenerate}
          onSelectTopic={(topic) => {
            setSources(prev => [...prev, ...topic.sources]);
            // Pass the initial query as a preset if it exists, or just pass the suggestions
            handleGenerate(topic.initialQuery, null, {
                suggestions: topic.suggestedQueries,
                presetData: topic.presetData // Link the deeper data
            });
          }}
          onFileUpload={() => fileInputRef.current?.click()}
          isLoading={isLoading}
          recentBoards={nodes.length > 0 ? [{ id: 'current', title: nodes[0].name || "Untitled Board" }] : []}
          recentConversations={nodes.filter(n => n.type === 'query').map(n => ({ title: n.name }))}
        />
      )}


      <ToolPalette 
        fileInputRef={fileInputRef} 
        handleFileUpload={(e) => handleFileUpload(e.target.files[0])}
        onResetZoom={() => navigateTo(window.innerWidth / 2, window.innerHeight / 2, 1)}
        onMagicGenerate={() => handleGenerate("Explore a random interesting fact about kidney health")}
      />

      <Minimap nodes={nodes} transform={transform} onNavigate={navigateTo} />
    </div>
  );
};

export default AIBoard;
