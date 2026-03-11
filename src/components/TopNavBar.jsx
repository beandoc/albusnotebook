import React from 'react';
import { 
  FileText, Layout, Plus, Search, RefreshCw, Home, 
  MessageSquare, Folder, Undo2, Music, Download, Moon, 
  Settings, UserCircle, ChevronDown, ListVideo, X
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
  <div className="fixed top-0 left-0 right-0 h-12 bg-[#000000] text-white flex items-center justify-between px-4 z-[100]">
    <div className="flex items-center gap-4 text-xs shrink-0 font-medium tracking-wide">
      <div className="flex items-center gap-2">
        {/* Albus Logo Mock */}
        <div className="flex items-end gap-[2px] w-6 h-6">
          <div className="w-1.5 h-4 bg-orange-500 rounded-sm transform skew-x-12"></div>
          <div className="w-1.5 h-5 bg-teal-400 rounded-sm"></div>
        </div>
        <span className="opacity-40 text-[10px] mx-1">•</span>
        <span className="font-semibold text-gray-200">Untitled document</span>
      </div>
      <div className="flex gap-3 ml-2 text-gray-400">
         <Layout size={15} className="cursor-pointer hover:text-white transition-colors" />
         <Plus size={15} className="cursor-pointer hover:text-white transition-colors" />
         <Search size={15} className="cursor-pointer hover:text-white transition-colors" />
      </div>
    </div>

    {/* Center Search (Only when not on landing page) */}
    {!showInitial && (
      <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[400px] z-[110]">
        <div className="bg-[#1a1a1a] rounded-full px-4 py-1.5 flex items-center gap-3 transition-all focus-within:bg-[#222]">
          <Search size={14} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Ask a question..." 
            className="bg-transparent border-none outline-none text-[13px] font-medium text-white w-full placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onGenerate()}
          />
        </div>
      </div>
    )}
    
    <nav className="flex items-center gap-1 shrink-0 absolute left-1/2 -ml-[250px] top-1.5">
       {/* Albus center nav icons */}
    </nav>
    <div className="absolute left-[calc(50%-180px)] top-2 flex bg-[#1a1a1a] rounded-lg p-0.5 gap-0.5">
       <button className="w-9 h-7 flex items-center justify-center text-white bg-[#333] rounded-md"><Home size={14} /></button>
       <button className="w-9 h-7 flex items-center justify-center text-gray-400 hover:text-white"><MessageSquare size={14} /></button>
       <button className="w-9 h-7 flex items-center justify-center bg-[#7c3aed] text-white rounded-md"><Layout size={14} /></button>
       <button className="w-9 h-7 flex items-center justify-center text-gray-400 hover:text-white"><Folder size={14} /></button>
    </div>

    <div className="flex items-center gap-5 text-[12px] font-medium shrink-0">
      <div className="flex gap-3 text-gray-400">
        <Undo2 size={15} className="cursor-pointer hover:text-white" />
        <RefreshCw size={15} className="cursor-pointer hover:text-white" />
      </div>
      <div className="flex items-center gap-1.5 cursor-pointer text-gray-200 hover:text-white">
        <span>G2.5 Flash</span> <ChevronDown size={12} className="text-gray-400" />
      </div>
      
      <div className="h-3 w-[1px] bg-gray-700 mx-1"></div>
      
      <div className="flex gap-3 text-gray-400 items-center">
        <ListVideo size={16} className="cursor-pointer hover:text-white" />
        <Download size={16} className="cursor-pointer hover:text-white" />
        <Moon size={16} className="cursor-pointer hover:text-white" />
        <Music size={16} className="cursor-pointer hover:text-white" />
        <Settings size={16} className="cursor-pointer hover:text-white" />
        <UserCircle size={18} className="cursor-pointer text-gray-200" />
        
        <div className="flex items-center gap-2 ml-2">
          <span className="w-10 text-right text-gray-200">{zoomPercent}%</span>
          <Plus size={14} />
          <X size={16} className="text-gray-500 hover:text-red-500 cursor-pointer ml-1" onClick={onClearBoard} title="Clear board" />
        </div>
      </div>
    </div>
  </div>
);

export default TopNavBar;
