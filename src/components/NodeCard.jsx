import React, { useState } from 'react';
import { RefreshCw, X, Plus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NodeCard = ({ node, onRemove, onShowSuggestions, onSubmitQuestion, onRefresh, onUpdateContent, isActive, isDarkMode }) => {
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
  // The original teal/yellow color logic is replaced by the new dark mode logic below.

  return (
    <div className={`
      relative group flex flex-col w-[300px] rounded-[18px] border overflow-hidden transition-all duration-300
      ${isActive ? 'ring-2 ring-purple-500 shadow-2xl' : 'shadow-lg'}
      ${isDarkMode ? 'bg-[#1e1e1e] border-[#333]' : 'bg-white border-[#e5e5e5]'}
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkMode ? 'bg-[#252525] border-[#333]' : 'bg-[#fcfcfc] border-[#f0f0f0]'}`}>
          <div className="flex items-center gap-2 max-w-[70%]">
            <span className="text-[11px] font-bold text-black uppercase tracking-widest opacity-50 bg-black/5 px-1.5 py-0.5 rounded">
              {node.type}
            </span>
            <h3 className={`text-[13px] font-bold truncate ${isDarkMode ? 'text-white' : 'text-black'}`}>{node.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onRefresh} className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
              <RefreshCw size={14} />
            </button>
            <button onClick={onRemove} className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-red-500/20 text-gray-400' : 'hover:bg-red-50 text-gray-500'}`}>
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className={`px-4 pb-5 pt-3 text-[14px] leading-relaxed max-h-[400px] overflow-y-auto scroll-elegant ${isDarkMode ? 'text-gray-200' : 'text-[#111]'}`}>
          {node.isLoading ? (
            <div className="space-y-3 py-1">
              <div className={`h-2 rounded-full w-full animate-pulse ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>
              <div className={`h-2 rounded-full w-[90%] animate-pulse delay-75 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>
              <div className={`h-2 rounded-full w-[95%] animate-pulse delay-150 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>
              <div className={`h-2 rounded-full w-[60%] animate-pulse delay-200 ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>
            </div>
          ) : isEditing ? (
            <textarea 
              className={`w-full min-h-[150px] bg-transparent outline-none resize-none font-sans text-[14px] ${isDarkMode ? 'text-white' : 'text-black'}`}
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onBlur={handleEditToggle}
              autoFocus
            />
          ) : (
            <div 
              className={`prose prose-sm max-w-none prose-p:my-1 prose-headings:mb-2 prose-headings:mt-3 prose-ul:my-1 prose-li:my-0 font-[400] ${isDarkMode ? 'prose-invert text-gray-200' : 'text-[#111]'}`} 
              onDoubleClick={() => setIsEditing(true)}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {node.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
      
      {/* Plus button at right edge */}
      {!node.isLoading && !isActive && (
        <button 
          onClick={onShowSuggestions} 
          className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-gray-400 rounded-full flex items-center justify-center text-black shadow-md hover:scale-110 transition-all z-[100] cursor-pointer pointer-events-auto"
        >
           <Plus size={14} />
        </button>
      )}

    </div>
  );
};

export default NodeCard;
