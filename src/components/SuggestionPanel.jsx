import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const SuggestionPanel = ({ node, onClose, onSelect, suggestions, isLoading, isDarkMode }) => {
  // Theme mapping matching the NodeCard for the buttons
  const colors = {
    teal: { 
      bg: 'bg-[#99ebe1]', 
      hover: 'hover:bg-[#81d4cb]',
      border: 'border-[#81d4cb]',
      shadow: 'shadow-[0_4px_10px_rgba(129,212,203,0.3)]'
    },
    yellow: { 
      bg: 'bg-[#f2d05c]', 
      hover: 'hover:bg-[#dab94b]',
      border: 'border-[#dab94b]',
      shadow: 'shadow-[0_4px_10px_rgba(218,185,75,0.3)]'
    },
    default: {
      bg: isDarkMode ? 'bg-[#2a2d35]' : 'bg-white',
      hover: isDarkMode ? 'bg-[#353942]' : 'bg-gray-50',
      border: isDarkMode ? 'border-white/10' : 'border-gray-200',
      shadow: 'shadow-md'
    }
  };

  const theme = colors[node?.color] || colors.default;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, x: -10 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -10 }}
      className="relative flex items-center pointer-events-auto"
    >
      {/* The Connector with 'X' button exactly as in reference */}
      <div className="flex items-center">
        <div className={`w-8 h-[2px] ${isDarkMode ? 'bg-white/20' : 'bg-black/10'}`} />
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          onPointerDown={(e) => e.stopPropagation()}
          className={`
            -ml-4 z-50 w-7 h-7 rounded-full flex items-center justify-center shadow-xl border-2 transition-all
            ${isDarkMode ? 'bg-black border-white/20 text-white hover:bg-white/10' : 'bg-white border-black/5 text-purple-600 hover:bg-purple-50'}
          `}
        >
          <X size={12} strokeWidth={3} />
        </button>
        <div className={`w-8 h-[2px] ${isDarkMode ? 'bg-white/20' : 'bg-black/10'}`} />
      </div>

      {/* The Styled Suggestion Box */}
      <div className={`
        ${isDarkMode ? 'bg-[#1e2128] border-white/10' : 'bg-white border-gray-200'}
        border rounded-[14px] p-5 shadow-2xl w-[360px] relative
      `}>
        <div className="mb-4">
          <p className="text-[11px] font-black text-gray-400 font-mono uppercase tracking-[0.2em] opacity-80">Tell me more...</p>
        </div>
        
        <div className="space-y-2.5">
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 bg-gray-100 dark:bg-white/5 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            suggestions && suggestions.map((s, i) => (
              <motion.button 
                key={i} 
                whileHover={{ y: -2 }}
                whileTap={{ y: 0.5 }}
                onClick={(e) => { e.stopPropagation(); onSelect(s); }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`
                  group block w-full text-left transition-all duration-150 px-5 py-3.5 rounded-[12px] 
                  border-b-[4px] border-x border-t ${theme.border} ${theme.bg} ${theme.hover}
                  shadow-sm hover:shadow-md outline-none
                  flex items-center justify-between
                `}
              >
                <span className="text-[14px] font-black text-gray-900 leading-tight tracking-tight pr-4">
                  {s}
                </span>
                <ChevronRight size={16} className="text-gray-900/30 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </motion.button>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SuggestionPanel;
