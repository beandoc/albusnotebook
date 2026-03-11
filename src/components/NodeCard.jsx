import React, { useState } from 'react';
import { RefreshCw, X } from 'lucide-react';

const NodeCard = ({ node, onRemove, onShowSuggestions, onSubmitQuestion, onRefresh, onUpdateContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(node.content || "");

  const handleEditToggle = () => {
    if (isEditing) {
      onUpdateContent(node.id, editValue);
    } else {
      setEditValue(node.content);
    }
    setIsEditing(!isEditing);
  };

  const isQuery = node.type === 'query';

  if (isQuery) {
    return (
      <div className="w-[340px] relative group pointer-events-auto">
        <div className="bg-white border text-[#111111] border-[#e5e5e5] rounded-[12px] p-3 shadow-sm flex justify-between items-center cursor-grab active:cursor-grabbing font-mono">
          <span className="text-[13px] font-bold tracking-tight">{node.name}</span>
          <button 
            onClick={onRefresh}
            className="w-7 h-7 flex items-center justify-center shrink-0 text-[#8b5cf6] border border-[#8b5cf6]/30 rounded-[8px] hover:bg-[#8b5cf6]/10 transition-colors ml-3"
          >
            <RefreshCw size={12} strokeWidth={3} />
          </button>
        </div>
        <div className="absolute top-1/2 -left-[5px] w-2.5 h-2.5 bg-[#aaaaaa] rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 -right-[5px] w-2.5 h-2.5 bg-[#aaaaaa] rounded-full transform -translate-y-1/2"></div>
        <div className="absolute -top-[5px] left-1/2 w-2.5 h-2.5 bg-[#aaaaaa] rounded-full transform -translate-x-1/2"></div>
        <div className="absolute -bottom-[5px] left-1/2 w-2.5 h-2.5 bg-[#aaaaaa] rounded-full transform -translate-x-1/2"></div>
      </div>
    );
  }
  
  // Teal vs Yellow card colors
  const isTeal = node.color === 'teal';
  const headerBg = isTeal ? 'bg-[#98ebd9]' : 'bg-[#eec14d]';
  const bodyBg = isTeal ? 'bg-[#e0fcf6]' : 'bg-[#fcedb3]';
  const textColor = '#111111';

  return (
    <div className="flex flex-col relative pointer-events-auto mt-6">
      
      {/* Node Content Box */}
      <div className={`w-[360px] rounded-[12px] overflow-hidden ${bodyBg} z-10 font-sans`}>
        
        {/* Header */}
        <div className={`px-4 py-3 flex justify-between items-start ${headerBg} text-${textColor} relative`}>
          <span className="font-bold text-[14px] leading-snug tracking-tight">
            {node.name}
          </span>
          <button onClick={onRemove} className="text-[#111] opacity-50 hover:opacity-100 transition-opacity ml-2 shrink-0">
             <X size={14} />
          </button>
        </div>
        
        {/* Body */}
        <div className="px-4 pb-5 pt-3 text-[14px] leading-relaxed text-[#111] max-h-[400px] overflow-y-auto scroll-elegant">
          {node.isLoading ? (
            <div className="space-y-3 py-1">
              <div className="h-2 bg-black/10 rounded-full w-full animate-pulse"></div>
              <div className="h-2 bg-black/10 rounded-full w-[90%] animate-pulse delay-75"></div>
              <div className="h-2 bg-black/10 rounded-full w-[95%] animate-pulse delay-150"></div>
              <div className="h-2 bg-black/10 rounded-full w-[60%] animate-pulse delay-200"></div>
            </div>
          ) : isEditing ? (
            <textarea 
              className="w-full min-h-[150px] bg-transparent outline-none resize-none font-sans text-[14px]"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onBlur={handleEditToggle}
              autoFocus
            />
          ) : (
            <div className="whitespace-pre-wrap outline-none font-[400]" onDoubleClick={() => setIsEditing(true)}>
              {node.content}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default NodeCard;
