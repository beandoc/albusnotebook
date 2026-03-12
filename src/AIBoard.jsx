import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  const [isCounselingMode, setIsCounselingMode] = useState(false);
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

  const handleGenerate = async (customQuery = null, parentNode = null, presetDataParams = null) => {
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
      x: parentNode ? (parentNode.x + 240) : (window.innerWidth / 2 - 300),
      y: parentNode ? (parentNode.y + (Math.random() - 0.5) * 50) : (window.innerHeight / 2 - 100),
    };

    // 2. Create Response Node (Thinking state or Preset)
    let initialContent = "Thinking...";
    let initialLoading = true;
    let initialSuggestions = null;
    let initialImageUrl = null;

    // Use parent's presetData if we are branching from it
    const activePresetData = presetDataParams || parentNode?.presetData || null;

    if (activePresetData) {
      // Search for content match in the presetData array
      const presetArray = Array.isArray(activePresetData) ? activePresetData : activePresetData.presetData;
      const match = (presetArray || []).find(p => p.query === activeText);
      if (match) {
        initialContent = match.content;
        initialLoading = false;
        initialSuggestions = match.suggestions;
        initialImageUrl = match.imageUrl;
      }
    }

    const responseNode = {
      id: responseId,
      type: 'response',
      name: activeText,
      title: activeText, // Added explicit title
      x: queryNode.x + 100, // Minimal nudge, let D3 handle the spread
      y: queryNode.y,
      color: parentNode ? 'yellow' : 'teal',
      content: initialContent,
      isLoading: initialLoading,
      presetSuggestions: initialSuggestions,
      presetImageUrl: initialImageUrl, // Added presetImageUrl
      presetData: activePresetData
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
      setNodes(prev => prev.map(n => n.id === responseId ? { ...n, error: error.message || "Unknown error", isLoading: false } : n));
    }
  };

  const onShowSuggestions = async (node) => {
    setActiveSuggestionsNode(node);
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
    <div 
      data-theme={isDarkMode ? 'dark' : 'light'}
      className={`relative w-full h-screen overflow-hidden transition-colors duration-500 bg-[var(--canvas-bg)]`}
    >
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
        isCounselingMode={isCounselingMode}
        setIsCounselingMode={setIsCounselingMode}
      />

      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing bg-transparent canvas-grid">
        <defs>
          <filter id="node-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.1" />
          </filter>
          
          <linearGradient id="link-grad" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
          </linearGradient>

          <marker id="arrowhead-light" viewBox="0 -5 10 10" refX="24" refY="0" orient="auto" markerWidth="6" markerHeight="6">
            <path d="M 0,-4 L 8,0 L 0,4" fill="#000" opacity="0.6" />
          </marker>
          <marker id="arrowhead-dark" viewBox="0 -5 10 10" refX="24" refY="0" orient="auto" markerWidth="6" markerHeight="6">
            <path d="M 0,-4 L 8,0 L 0,4" fill="#fff" opacity="0.6" />
          </marker>
        </defs>

        <g ref={containerRef}>
          {links.map((link, i) => (
            <path 
              key={i} 
              className="link-path transition-all duration-700"
              fill="none" 
              stroke={isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}
              strokeWidth="1.5" 
              markerEnd={`url(#arrowhead-${isDarkMode ? 'dark' : 'light'})`} 
            />
          ))}

          {nodes.map(node => (
            <foreignObject 
              key={node.id} 
              className="node-group"
              width="340" 
              height="800"
              style={{ pointerEvents: 'none', overflow: 'visible', willChange: 'transform' }}
            >
              <div className="relative pointer-events-auto flex flex-col items-center w-full">
                <NodeCard 
                  node={node} 
                  isDarkMode={isDarkMode}
                  isCounselingMode={isCounselingMode}
                  onRemove={() => {
                    saveToHistory();
                    setNodes(prev => prev.filter(n => n.id !== node.id));
                    setLinks(prev => prev.filter(l => {
                      const sourceId = l.source.id || l.source;
                      const targetId = l.target.id || l.target;
                      return sourceId !== node.id && targetId !== node.id;
                    }));
                  }}
                  onShowSuggestions={() => onShowSuggestions(node)}
                  onRefresh={() => {
                    const parentLink = links.find(l => (l.target.id || l.target) === node.id);
                    const pNode = parentLink ? nodes.find(n => n.id === (parentLink.source.id || parentLink.source)) : null;
                    handleGenerate(node.name, pNode);
                  }}
                  onUpdateContent={onUpdateContent}
                  isActive={activeSuggestionsNode?.id === node.id}
                />
                
                <AnimatePresence>
                  {activeSuggestionsNode?.id === node.id && (
                    <div className="absolute left-[325px] top-1/2 -translate-y-1/2 z-[200] pointer-events-auto origin-left">
                      <SuggestionPanel 
                        node={activeSuggestionsNode} 
                        isDarkMode={isDarkMode}
                        onClose={() => setActiveSuggestionsNode(null)} 
                        onSelect={(s) => {
                           const preset = activeSuggestionsNode.presetData?.presetData?.find(p => p.query === s) || activeSuggestionsNode.presetData?.find(p => p.query === s);
                           handleGenerate(s, activeSuggestionsNode, preset);
                        }} 
                        suggestions={suggestions} 
                        isLoading={isSuggesting} 
                      />
                    </div>
                  )}
                </AnimatePresence>
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
            if (topic.sources) setSources(prev => [...prev, ...topic.sources]);
            handleGenerate(topic.initialQuery, null, topic.presetData);
          }}
          onFileUpload={() => fileInputRef.current?.click()}
          isLoading={isLoading}
          recentBoards={nodes.length > 0 ? [{ id: 'current', title: nodes[0].name || "Active Board" }] : []}
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
