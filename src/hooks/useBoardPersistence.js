import { useEffect } from 'react';

export const useBoardPersistence = (nodes, links, setNodes, setLinks, setShowInitial) => {
  // Load from localStorage on mount
  useEffect(() => {
    const savedNodes = localStorage.getItem('ai-board-nodes');
    const savedLinks = localStorage.getItem('ai-board-links');
    if (savedNodes && savedLinks) {
      try {
        const parsedNodes = JSON.parse(savedNodes);
        const parsedLinks = JSON.parse(savedLinks);
        if (parsedNodes.length > 0) {
          setNodes(parsedNodes);
          setLinks(parsedLinks);
          setShowInitial(false);
        }
      } catch (e) {
        console.error("Persistence Load Error:", e);
      }
    }
  }, []);

  // Save to localStorage when nodes/links change
  useEffect(() => {
    if (nodes.length > 0) {
      localStorage.setItem('ai-board-nodes', JSON.stringify(nodes));
      localStorage.setItem('ai-board-links', JSON.stringify(links));
    }
  }, [nodes, links]);

  const clearPersistence = () => {
    localStorage.removeItem('ai-board-nodes');
    localStorage.removeItem('ai-board-links');
  };

  return { clearPersistence };
};
