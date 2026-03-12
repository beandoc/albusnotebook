import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const useCanvas = (nodes, links) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const simulationRef = useRef(null);
  const zoomBehaviorRef = useRef(null);
  const [transform, setTransform] = useState({ k: 1, x: 0, y: 0 });

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    simulationRef.current = d3.forceSimulation()
      .force("link", d3.forceLink().id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-800))
      .force("collision", d3.forceCollide().radius(160));

    const svg = d3.select(svgRef.current);
    const container = d3.select(containerRef.current);

    const zoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
        setTransform(event.transform);
      });

    zoomBehaviorRef.current = zoom;
    svg.call(zoom);
    svg.call(zoom.transform, d3.zoomIdentity);

    simulationRef.current.on("tick", () => {
      d3.selectAll(".node-group")
        .data(simulationRef.current.nodes())
        .attr("transform", d => `translate(${d.x - 170}, ${d.y - 100})`); 

      d3.selectAll(".link-path")
        .data(simulationRef.current.force("link").links())
        .attr("d", d => {
          const src = d.source;
          const tgt = d.target;
          if(!src || !tgt || src.x===undefined || tgt.x===undefined) return "";
          const dx = tgt.x - src.x;
          return `M${src.x},${src.y} C${src.x + dx/2.5},${src.y} ${tgt.x - dx/2.5},${tgt.y} ${tgt.x},${tgt.y}`;
        });
    });

  }, []);

  useEffect(() => {
    if (!simulationRef.current) return;
    const simulation = simulationRef.current;
    
    // Preserve existing D3 simulation state
    const currentNodes = simulation.nodes();
    const newNodes = nodes.map(n => {
      const existing = currentNodes.find(en => en.id === n.id);
      if (existing) {
        Object.assign(n, {
          x: existing.x, y: existing.y, vx: existing.vx, vy: existing.vy,
          fx: existing.fx || n.fx, fy: existing.fy || n.y
        });
      }
      return n;
    });

    const newLinks = links.map(l => {
      const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
      const targetId = typeof l.target === 'object' ? l.target.id : l.target;
      return { 
        ...l, 
        source: newNodes.find(n => n.id === sourceId) || sourceId, 
        target: newNodes.find(n => n.id === targetId) || targetId 
      };
    });

    simulation.nodes(newNodes);
    simulation.force("link").links(newLinks);
    simulation.alpha(1).restart();

    // Re-attach drag to new nodes
    const drag = d3.drag()
      .filter((event) => !event.target.closest('button'))
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
      });
    
    d3.selectAll(".node-group").data(newNodes).call(drag);
  }, [nodes.length, links.length]);

  const navigateTo = (x, y, k = 1) => {
    if (!svgRef.current || !zoomBehaviorRef.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(750)
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity.translate(x, y).scale(k));
  };

  return { svgRef, containerRef, transform, navigateTo };
};
