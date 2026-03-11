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

  const fileInputRef = useRef(null);

  // Custom Hooks
  const { sources, setSources, showSources, setShowSources, handleFileUpload, removeSource } = useSources();
  const { generateResponse, getSuggestions, suggestions, isLoading, isSuggesting } = useGemini(sources);
  const { svgRef, containerRef, transform, navigateTo } = useCanvas(nodes, links);
  const { clearPersistence } = useBoardPersistence(nodes, links, setNodes, setLinks, setShowInitial);

  const handleGenerate = async (customQuery = null, parentNode = null) => {
    const activeText = customQuery || query;
    if (!activeText.trim()) return;
    
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

    // 2. Create Response Node (Thinking state)
    const responseNode = {
      id: responseId,
      type: 'response',
      name: activeText,
      x: queryNode.x + 450,
      y: queryNode.y,
      color: parentNode ? 'yellow' : 'teal',
      content: "Thinking...",
      isLoading: true
    };

    setNodes(prev => [...prev, queryNode, responseNode]);
    
    const newLinks = [{ source: queryId, target: responseId }];
    if (parentNode) {
      newLinks.push({ source: parentNode.id, target: queryId });
    }
    setLinks(prev => [...prev, ...newLinks]);

    setQuery('');
    setActiveSuggestionsNode(null);

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
    <div className="relative w-screen h-screen overflow-hidden bg-white canvas-grid select-none font-sans">
      <TopNavBar 
        sources={sources}
        showSources={showSources}
        setShowSources={setShowSources}
        showInitial={showInitial}
        query={query}
        setQuery={setQuery}
        onGenerate={handleGenerate}
        isLoading={isLoading}
        onClearBoard={onClearBoard}
        zoomPercent={Math.round(transform.k * 100)}
        isApiKeyMissing={!import.meta.env.VITE_GEMINI_API_KEY}
      />

      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing bg-transparent">
        <g ref={containerRef}>
          {links.map((link, i) => (
            <path 
              key={i} 
              className="link-path"
              fill="none" 
              stroke="#1a1a1a" 
              strokeWidth="1" 
              markerEnd="url(#arrowhead)" 
            />
          ))}

          <defs>
            <marker id="arrowhead" viewBox="0 -5 10 10" refX="28" refY="0" orient="auto" markerWidth="6" markerHeight="6">
              <path d="M 0,-5 L 10,0 L 0,5" fill="#1a1a1a" />
            </marker>
          </defs>

          {nodes.map(node => (
            <foreignObject 
              key={node.id} 
              className="node-group"
              width="360" 
              height="800"
              style={{ pointerEvents: 'none' }}
            >
              <div className="pointer-events-auto flex flex-col items-center" onMouseDown={e => e.stopPropagation()}>
                <NodeCard 
                  node={node} 
                  onRemove={() => {
                    setNodes(prev => prev.filter(n => n.id !== node.id));
                    setLinks(prev => prev.filter(l => (l.source.id || l.source) !== node.id && (l.target.id || l.target) !== node.id));
                  }}
                  onShowSuggestions={() => onShowSuggestions(node)}
                  onSubmitQuestion={(q) => handleGenerate(q, node)}
                  onRefresh={() => {
                    const parentLink = links.find(l => (l.target.id || l.target) === node.id);
                    const pNode = parentLink ? nodes.find(n => n.id === (parentLink.source.id || parentLink.source)) : null;
                    handleGenerate(node.name, pNode);
                  }}
                  onUpdateContent={onUpdateContent}
                />
              </div>
            </foreignObject>
          ))}
        </g>
      </svg>

      {activeSuggestionsNode && (
        <div 
          className="fixed z-[200] animate-fade-in"
          style={{ 
            left: (activeSuggestionsNode.x + 170) * transform.k + transform.x + 20,
            top: activeSuggestionsNode.y * transform.k + transform.y,
            transform: 'translateY(-50%)'
          }}
        >
          <SuggestionPanel 
            node={activeSuggestionsNode} 
            onClose={() => setActiveSuggestionsNode(null)} 
            onSelect={(s) => handleGenerate(s, activeSuggestionsNode)} 
            suggestions={suggestions} 
            isLoading={isSuggesting} 
          />
        </div>
      )}

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
            handleGenerate(topic.initialQuery);
          }}
          onFileUpload={() => fileInputRef.current?.click()}
          isLoading={isLoading}
        />
      )}

      <ToolPalette 
        fileInputRef={fileInputRef} 
        handleFileUpload={(e) => handleFileUpload(e.target.files[0])} 
      />

      <Minimap nodes={nodes} transform={transform} onNavigate={navigateTo} />
    </div>
  );
};

export default AIBoard;
