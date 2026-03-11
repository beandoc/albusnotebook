import React, { useState } from 'react';
import { 
  X, Maximize2, RefreshCw, MessageSquare, MoreHorizontal, Plus, Link as LinkIcon
} from 'lucide-react';

const NodeCard = ({ node, onRemove, onShowSuggestions, onSubmitQuestion, onRefresh, onUpdateContent }) => {
  const [qInput, setQInput] = useState('');
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
      <div className="w-[340px] animate-fade-in group relative">
        <div className="bg-[#111111] text-white rounded-[20px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex justify-between items-start cursor-grab active:cursor-grabbing">
          <span className="font-semibold text-[15px] leading-tight pr-4">{node.name}</span>
        </div>
        <button 
          onClick={onRefresh}
          className="absolute -right-3 -top-3 w-8 h-8 bg-white border border-[#e5e5e5] text-[#555555] rounded-full flex items-center justify-center hover:bg-[#f5f5f5] hover:text-[#111111] transition-all opacity-0 group-hover:opacity-100 shadow-sm"
        >
          <RefreshCw size={14} />
        </button>
      </div>
    );
  }
  
  return (
    <div className="w-[360px] flex flex-col items-center group/card animate-fade-in relative">
      
      {/* Node Content Box */}
      <div className="w-full bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-[#e5e5e5] transition-shadow duration-300 relative z-10">
        
        {/* Header */}
        <div className="px-5 py-4 flex justify-between items-center border-b border-[#f0f0f0] bg-[#fafafa] rounded-t-[20px]">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${node.color === 'yellow' ? 'bg-[#facc15]' : 'bg-[#14b8a6]'}`} />
            <span className="font-semibold text-[13px] text-[#111111] truncate uppercase tracking-wide opacity-80">
              {node.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#999999]">
            <button className="hover:text-[#111111] transition-colors"><Maximize2 size={14} /></button>
            <button className="hover:text-[#111111] transition-colors"><MoreHorizontal size={14} /></button>
            <button onClick={onRemove} className="hover:text-red-500 transition-colors"><X size={14} /></button>
          </div>
        </div>
        
        {/* Body */}
        <div className="p-5 text-[14px] leading-[1.6] text-[#333333] max-h-[400px] overflow-y-auto scroll-elegant">
          {node.isLoading ? (
            <div className="space-y-3 py-1">
              <div className="h-2.5 bg-[#f0f0f0] rounded-full w-full animate-pulse"></div>
              <div className="h-2.5 bg-[#f0f0f0] rounded-full w-[90%] animate-pulse delay-75"></div>
              <div className="h-2.5 bg-[#f0f0f0] rounded-full w-[95%] animate-pulse delay-150"></div>
              <div className="h-2.5 bg-[#f0f0f0] rounded-full w-[60%] animate-pulse delay-200"></div>
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
            <div className="whitespace-pre-wrap outline-none" onDoubleClick={() => setIsEditing(true)}>
              {/* Parse citations into subtle tags */}
              {node.content?.split(/(\[.*?\])/).map((part, i) => {
                if (part.startsWith('[') && part.endsWith(']')) {
                  return (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#f5f5f5] text-[#555555] text-[11px] font-semibold mx-0.5 border border-[#e5e5e5] cursor-help hover:bg-[#111111] hover:text-white transition-colors"
                      title="Source grounded information"
                    >
                      <LinkIcon size={10} />
                      {part.slice(1, -1)}
                    </span>
                  );
                }
                return part;
              })}
            </div>
          )}
        </div>
      </div>

      {/* Explore (+) Button */}
      <button 
        onClick={onShowSuggestions} 
        disabled={node.isLoading}
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-[#e5e5e5] rounded-full flex items-center justify-center text-[#555555] shadow-sm hover:text-[#111111] hover:border-[#cccccc] transition-all z-20 group disabled:opacity-0 focus:outline-none"
      >
         <Plus size={16} className="transition-transform group-hover:rotate-90" />
      </button>

      {/* Quick Follow Query Box */}
      <div className="w-[90%] -mt-2 bg-white rounded-b-[16px] border border-[#e5e5e5] border-t-0 p-3 shadow-sm z-0 pt-4 flex items-center focus-within:border-[#ccc]">
        <Search size={14} className="text-[#999999] ml-1 mr-2" />
        <input 
          className="bg-transparent flex-1 outline-none text-[13px] text-[#111111] font-medium placeholder-[#999999]" 
          placeholder="Ask a question..." 
          value={qInput} 
          onChange={e => setQInput(e.target.value)} 
          onKeyPress={e => {
            if (e.key === 'Enter' && qInput.trim()) {
              onSubmitQuestion(qInput);
              setQInput('');
            }
          }}
        />
      </div>

    </div>
  );
};

export default NodeCard;
