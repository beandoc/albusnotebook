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
      .force("link", d3.forceLink().id(d => d.id).distance(450))
      .force("charge", d3.forceManyBody().strength(-2000))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(250));

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
      // Direct DOM update instead of React state for performance
      d3.selectAll(".node-group")
        .attr("transform", d => `translate(${d.x - 170}, ${d.y - 150})`);

      d3.selectAll(".link-path")
        .attr("d", d => {
          const source = d.source;
          const target = d.target;
          // Straight line for Phase 3.4
          return `M${source.x},${source.y} L${target.x},${target.y}`;
        });
    });

    // Drag support for Phase 3.3
    const drag = d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0);
        // Keep fx/fy for permanent positioning (Albus style)
        // d.fx = null; 
        // d.fy = null;
      });

    // Use a small delay to ensure nodes are rendered before attaching drag
    setTimeout(() => {
      d3.selectAll(".node-group").call(drag);
    }, 500);

  }, []);

  useEffect(() => {
    if (!simulationRef.current) return;
    const simulation = simulationRef.current;
    
    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart();

    // Re-attach drag to new nodes
    const drag = d3.drag()
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
    
    d3.selectAll(".node-group").call(drag);
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
