import React, { useEffect, useRef } from 'react';

const Minimap = ({ nodes, transform, onNavigate }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (nodes.length === 0) return;

    // Find bounds
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(n => {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x);
      maxY = Math.max(maxY, n.y);
    });

    // Padding
    minX -= 1000; minY -= 1000; maxX += 1000; maxY += 1000;
    
    const rangeX = maxX - minX;
    const rangeY = maxY - minY;
    
    const scale = Math.min(canvas.width / rangeX, canvas.height / rangeY);
    
    // Draw Nodes
    nodes.forEach(n => {
      const x = (n.x - minX) * scale;
      const y = (n.y - minY) * scale;
      
      ctx.fillStyle = n.type === 'query' ? '#e2e8f0' : (n.color === 'teal' ? '#99ebe1' : '#f2d05c');
      ctx.fillRect(x - 5, y - 3, 10, 6);
    });

    // Draw Viewport
    const vW = window.innerWidth / transform.k;
    const vH = window.innerHeight / transform.k;
    const vX = -transform.x / transform.k;
    const vY = -transform.y / transform.k;
    
    const vx0 = (vX - minX) * scale;
    const vy0 = (vY - minY) * scale;
    const vw = vW * scale;
    const vh = vH * scale;

    ctx.strokeStyle = '#7c3aed';
    ctx.lineWidth = 1;
    ctx.strokeRect(vx0, vy0, vw, vh);
    ctx.fillStyle = 'rgba(124, 58, 237, 0.05)';
    ctx.fillRect(vx0, vy0, vw, vh);

  }, [nodes, transform]);

  const handleClick = (e) => {
    if (!onNavigate || nodes.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Bounds recalculation (simpler to just reuse state logic if possible, but for a hook-less component we recalculate or pass bounds)
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(n => {
      minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x); maxY = Math.max(maxY, n.y);
    });
    minX -= 1000; minY -= 1000; maxX += 1000; maxY += 1000;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const scale = Math.min(canvas.width / (maxX - minX), canvas.height / (maxY - minY));
    
    const targetWorldX = x / scale + minX;
    const targetWorldY = y / scale + minY;
    
    // Convert target world (x,y) to d3 translate coordinates:
    // transform.x = width/2 - targetWorldX * k
    // transform.y = height/2 - targetWorldY * k
    onNavigate(window.innerWidth/2 - targetWorldX * transform.k, window.innerHeight/2 - targetWorldY * transform.k, transform.k);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-white/90 backdrop-blur-sm border border-gray-200 rounded-[24px] p-3 shadow-2xl overflow-hidden group">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Minimap</span>
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
      </div>
      <canvas 
        ref={canvasRef} 
        width={160} 
        height={100} 
        className="rounded-xl bg-gray-50/50 border border-gray-100 cursor-crosshair"
        onClick={handleClick}
      />
    </div>
  );
};

export default Minimap;
