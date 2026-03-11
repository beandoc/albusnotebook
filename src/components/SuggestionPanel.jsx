import React from 'react';
import { Wand2, X } from 'lucide-react';

const SuggestionPanel = ({ node, onClose, onSelect, suggestions, isLoading }) => (
  <div className="bg-white border border-gray-100 rounded-[28px] p-7 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] w-80">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-[#7c3aed]">
          <Wand2 size={16} />
        </div>
        <h4 className="text-[14px] font-bold text-gray-800">Tell me more...</h4>
      </div>
      <button onClick={onClose} className="text-gray-300 hover:text-black transition-colors"><X size={18} /></button>
    </div>
    
    <div className="space-y-2.5">
      {isLoading ? (
        <div className="space-y-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-10 bg-gray-50 rounded-xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        suggestions.map((s, i) => (
          <button 
            key={i} 
            onClick={() => onSelect(s)} 
            className={`w-full text-left p-4 rounded-[18px] border border-black/5 font-bold text-[12px] leading-snug transition-all hover:translate-x-1 hover:shadow-md active:scale-95 ${i % 2 === 0 ? 'bg-[#f2d05c] text-[#5c4b09]' : 'bg-[#99ebe1] text-[#0f4d44]'}`}
          >
            {s}
          </button>
        ))
      )}
    </div>
    
    <div className="mt-6 pt-5 border-t border-gray-50 text-center">
      <button className="text-[11px] font-bold text-[#7c3aed] hover:underline uppercase tracking-wider">AI Insight Engine</button>
    </div>
  </div>
);

export default SuggestionPanel;
