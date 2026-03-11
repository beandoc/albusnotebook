import React from 'react';
import { 
  Menu, Share, FileText, Search, MoreHorizontal, Maximize2, X, RefreshCw 
} from 'lucide-react';

const TopNavBar = ({ 
  sources, 
  showSources, 
  setShowSources, 
  showInitial, 
  query, 
  setQuery, 
  onGenerate, 
  isLoading, 
  onClearBoard,
  zoomPercent,
  isApiKeyMissing
}) => (
  <div className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-b border-[#e5e5e5] text-[#111111] flex items-center justify-between px-4 z-[100] transform transition-all">
    
    {/* Left Side */}
    <div className="flex items-center gap-4 text-sm shrink-0 font-medium">
      <button className="p-1.5 text-[#555555] hover:text-[#111111] transition-colors rounded-lg hover:bg-[#f5f5f5]">
        <Menu size={18} />
      </button>
      
      <div className="flex items-center gap-3">
        <span className="font-semibold px-2">Untitled canvas</span>
        <button className="text-[#888888] hover:text-[#111111] transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>

    {/* Center Search (Only when not on landing page) */}
    {!showInitial && (
      <div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center justify-center">
        <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-1.5 border border-[#e5e5e5] hover:border-[#cccccc] transition-colors w-[380px]">
          <Search size={14} className="text-[#888888]" />
          <input 
            type="text" 
            placeholder="Ask a question..."
            className="bg-transparent border-none outline-none text-[13px] font-medium text-[#111111] placeholder:text-[#888888] w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onGenerate()}
          />
          {isLoading ? (
             <RefreshCw size={14} className="text-[#111111] animate-spin" />
          ) : (
             <div className="w-4" />
          )}
        </div>
      </div>
    )}

    {/* Right Side */}
    <div className="flex items-center gap-3 shrink-0">
      {sources.length > 0 && (
        <button 
          onClick={() => setShowSources(!showSources)}
          className={`flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${showSources ? 'bg-[#111111] text-white' : 'bg-[#f5f5f5] text-[#555555] border border-[#e5e5e5]'}`}
        >
          <FileText size={12} /> {sources.length} Sources
        </button>
      )}

      {isApiKeyMissing && (
        <span className="bg-red-50 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded border border-red-200">No Key</span>
      )}

      <span className="text-[12px] font-mono text-[#888888] w-12 text-center">{zoomPercent}%</span>
      
      <div className="h-4 w-[1px] bg-[#e5e5e5] mx-1"></div>
      
      <button className="p-1.5 text-[#555555] hover:text-[#111111] transition-colors rounded-lg hover:bg-[#f5f5f5]">
        <Share size={16} />
      </button>

      <button className="p-1.5 text-[#555555] hover:text-[#111111] transition-colors rounded-lg hover:bg-[#f5f5f5]">
        <Maximize2 size={16} />
      </button>

      <button 
        onClick={onClearBoard} 
        title="Clear Board"
        className="p-1.5 text-[#555555] hover:text-red-600 transition-colors rounded-lg hover:bg-red-50 ml-1"
      >
        <X size={18} />
      </button>
    </div>
  </div>
);

export default TopNavBar;
