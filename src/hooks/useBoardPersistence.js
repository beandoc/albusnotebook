import { useEffect } from 'react';

export const useBoardPersistence = (nodes, links, setNodes, setLinks, setShowInitial, sources, setSources) => {
  // Load from localStorage on mount
  useEffect(() => {
    const savedNodes = localStorage.getItem('ai-board-nodes');
    const savedLinks = localStorage.getItem('ai-board-links');
    const savedSources = localStorage.getItem('ai-board-sources');

    if (savedNodes && savedLinks) {
      try {
        const parsedNodes = JSON.parse(savedNodes);
        const parsedLinks = JSON.parse(savedLinks);
        
        if (parsedNodes.length > 0) {
          setNodes(parsedNodes);
          setLinks(parsedLinks);
          setShowInitial(false);
        }

        if (savedSources) {
          setSources(JSON.parse(savedSources));
        }
      } catch (e) {
        console.error("Persistence Load Error:", e);
      }
    }
  }, []);

  // Save to localStorage when nodes/links/sources change
  useEffect(() => {
    if (nodes.length > 0) {
      // 1. Clean nodes: remove D3 simulation noise (vx, vy, index) 
      // but KEEP fx, fy for Albus-style pinned positioning
      const cleanNodes = nodes.map(n => ({
        id: n.id,
        type: n.type,
        name: n.name,
        content: n.content,
        color: n.color,
        fx: n.fx || n.x,
        fy: n.fy || n.y,
        presetSuggestions: n.presetSuggestions,
        presetData: n.presetData
      }));

      // 2. Clean links: ensure they are ID strings, not active object references
      const cleanLinks = links.map(l => ({
        source: typeof l.source === 'object' ? l.source.id : l.source,
        target: typeof l.target === 'object' ? l.target.id : l.target
      }));

      localStorage.setItem('ai-board-nodes', JSON.stringify(cleanNodes));
      localStorage.setItem('ai-board-links', JSON.stringify(cleanLinks));
      localStorage.setItem('ai-board-sources', JSON.stringify(sources));
    }
  }, [nodes, links, sources]);

  const clearPersistence = () => {
    localStorage.removeItem('ai-board-nodes');
    localStorage.removeItem('ai-board-links');
    localStorage.removeItem('ai-board-sources');
  };

  return { clearPersistence };
};
