import React from 'react';
import { 
  FileText, Layout, Plus, X, Search, RefreshCw, Home, 
  MessageSquare, Folder, Undo2, Music, Download, Moon, 
  Settings, UserCircle, ChevronDown 
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
  <div className="fixed top-0 left-0 right-0 h-12 bg-black text-white flex items-center justify-between px-4 z-[100]">
    <div className="flex items-center gap-4 text-xs shrink-0">
      <span className="opacity-60 text-[11px]">•</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-200">Nirogyam AI Board</span>
        {sources.length > 0 && (
          <div 
            onClick={() => setShowSources(!showSources)}
            className="bg-[#2a2a2a] text-[#a78bfa] px-2 py-0.5 rounded-md flex items-center gap-1.5 cursor-pointer hover:bg-[#333] transition-colors"
          >
            <FileText size={12} />
            <span className="text-[10px] uppercase font-bold tracking-tighter">{sources.length} SOURCES</span>
          </div>
        )}
      </div>
      <div className="flex gap-4 ml-4 text-gray-500">
         <Layout size={16} className="cursor-pointer hover:text-white" />
         <Plus size={16} className="cursor-pointer hover:text-white" />
         <X size={16} className="cursor-pointer hover:text-red-500" onClick={onClearBoard} title="Clear Board" />
      </div>
    </div>

    {/* Global Search Bar (Persistent) */}
    {!showInitial && (
      <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[400px] z-[110] animate-fade-in">
        <div className="bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-1.5 flex items-center gap-3 transition-all focus-within:border-[#7c3aed]/50 focus-within:bg-[#222]">
          <Search size={14} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Ask Albus anything..." 
            className="bg-transparent border-none outline-none text-[13px] text-white w-full placeholder-gray-600"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onGenerate()}
          />
           <RefreshCw 
            size={14} 
            className={`text-gray-500 hover:text-[#7c3aed] cursor-pointer transition-all ${isLoading ? 'animate-spin' : ''}`} 
            onClick={() => onGenerate()}
          />
        </div>
      </div>
    )}
    
    <nav className="flex bg-[#1a1a1a] rounded-xl p-1 gap-1 shrink-0">
      <button className="w-10 h-8 flex items-center justify-center text-gray-400 hover:text-white"><Home size={18} /></button>
      <button className="w-10 h-8 flex items-center justify-center text-gray-400 hover:text-white"><MessageSquare size={18} /></button>
      <button className="w-10 h-8 flex items-center justify-center bg-[#7c3aed] text-white rounded-lg px-4"><Layout size={18} /></button>
      <button className="w-10 h-8 flex items-center justify-center text-gray-400 hover:text-white"><Folder size={18} /></button>
    </nav>

    <div className="flex items-center gap-5 text-[11px] font-medium">
      {isApiKeyMissing && (
        <div className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-[10px] items-center gap-1 flex">
          <span>Demo Mode</span>
        </div>
      )}
      <div className="flex gap-4 text-gray-500">
        <Undo2 size={16} className="cursor-pointer hover:text-white" />
        <RefreshCw size={14} className="cursor-pointer hover:text-white" />
      </div>
      <div className="bg-[#1a1a1a] px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
        <span className="text-gray-300">G2.5 Flash</span> <ChevronDown size={12} className="text-gray-500" />
      </div>
    <div className="flex gap-4 text-gray-400 items-center">
        <Music size={16} /> <Download size={16} /> <Moon size={16} /> <Settings size={16} /> 
        <div className="flex items-center gap-2 text-gray-300">
          <span className="font-bold text-[10px] uppercase tracking-wider">{userName}</span>
          <UserCircle size={22} />
        </div>
        <div className="w-[1px] h-4 bg-gray-800 mx-1"></div>
        <span className="min-w-[40px] text-right text-gray-200 font-mono">{zoomPercent}%</span>
        <span className="text-gray-500 cursor-pointer">+</span>
      </div>
    </div>
  </div>
);

export default TopNavBar;
