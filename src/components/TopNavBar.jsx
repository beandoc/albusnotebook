import React from 'react';
import { 
  Plus, 
  Search, 
  MessageCircle, 
  Share2, 
  Settings, 
  UserCircle, 
  ChevronDown, 
  Download,
  Music,
  Moon,
  Database
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
}) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] h-[72px] z-[2000] flex items-center justify-between px-6 glass-panel rounded-[24px] premium-shadow animate-fade-in">
      
      {/* Brand Section */}
      <div className="flex items-center gap-4 min-w-[200px]">
        <div className="w-10 h-10 bg-[#0f172a] rounded-xl flex items-center justify-center text-white font-black text-xl">
          N
        </div>
        <div className="flex flex-col">
          <h1 className="text-[15px] font-bold text-slate-900 tracking-tight leading-none mb-1">Nirogyam AI</h1>
          <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.05em]">Medical Board</span>
        </div>
      </div>

      {/* Center Search (Only show if not initial) */}
      {!showInitial && (
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative flex items-center bg-slate-100/50 rounded-2xl p-1 px-4 border border-slate-200/50 group transition-all focus-within:bg-white focus-within:border-violet-600 focus-within:shadow-lg focus-within:shadow-violet-600/5">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Ask a question..."
              className="w-full bg-transparent px-3 py-2 text-sm font-medium outline-none text-slate-800"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onGenerate()}
            />
            {isLoading && (
              <div className="w-4 h-4 border-2 border-violet-600 border-t-transparent rounded-full animate-spin ml-2"></div>
            )}
          </div>
        </div>
      )}

      {/* Tools Section */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setShowSources(!showSources)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
            showSources ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <Database size={16} />
          Sources {sources.length > 0 && <span className="opacity-70 ml-1">{sources.length}</span>}
        </button>

        <div className="w-[1px] h-6 bg-slate-200 mx-2" />

        <div className="flex items-center gap-1">
          <NavIconButton icon={<Download size={18} />} />
          <NavIconButton icon={<Settings size={18} />} />
          <NavIconButton icon={<UserCircle size={22} />} className="text-slate-900 ml-1" />
        </div>

        <div className="w-[1px] h-6 bg-slate-200 mx-2" />

        <div className="flex items-center gap-3 pl-2">
          <span className="text-[12px] font-bold font-mono text-slate-400">{zoomPercent}%</span>
          <button 
            onClick={onClearBoard}
            className="text-[11px] font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded-md transition-colors"
          >
            CLEAR
          </button>
        </div>
      </div>

      {isApiKeyMissing && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-bold shadow-sm">
          ⚠️ GEMINI_API_KEY Missing in Environment
        </div>
      )}
    </div>
  );
};

const NavIconButton = ({ icon, className = "" }) => (
  <button className={`p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all ${className}`}>
    {icon}
  </button>
);

export default TopNavBar;
