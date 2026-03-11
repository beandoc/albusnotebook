import React from 'react';
import { X } from 'lucide-react';

const SuggestionPanel = ({ node, onClose, onSelect, suggestions, isLoading }) => {
  return (
    <div className="relative flex items-center h-full pointer-events-auto font-sans">
      {/* The overlapping Close Button */}
      <button 
        onClick={onClose} 
        className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-[#e5e5e5] rounded-full flex items-center justify-center text-[#555] shadow-[0_2px_4px_rgba(0,0,0,0.05)] z-20 hover:text-black hover:border-black transition-all"
      >
         <X size={14} />
      </button>

      {/* The Panel */}
      <div className="bg-[#fcfcfc] border border-[#e5e5e5] rounded-[12px] border-l-[#d1d5db] p-4 pl-6 shadow-[2px_2px_12px_rgba(0,0,0,0.04)] w-[280px]">
        <p className="text-[12px] font-bold text-[#888] mb-3 ml-1 tracking-wide">Tell me more...</p>
        
        <div className="space-y-2">
          {isLoading ? (
            <div className="space-y-2.5">
              <div className="h-8 bg-[#eec14d]/20 rounded-md animate-pulse"></div>
              <div className="h-8 bg-[#eec14d]/20 rounded-md animate-pulse delay-75"></div>
              <div className="h-8 bg-[#eec14d]/20 rounded-md animate-pulse delay-150"></div>
            </div>
          ) : (
            suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => onSelect(s)} 
                className="block w-full text-left bg-[#eec14d] text-[#6b4700] text-[12px] font-bold py-2.5 px-3 rounded-md hover:brightness-95 transition-all outline-none leading-snug shadow-sm border border-[#e3b032]"
              >
                {s}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionPanel;
