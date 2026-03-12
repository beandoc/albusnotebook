import React from 'react';
import { 
  FileText, Layout, Plus, Search, RefreshCw, Home, 
  MessageSquare, Folder, Undo2, Music, Download, Moon, 
  Settings, UserCircle, ChevronDown, ListVideo, X, HeartPulse
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
  isApiKeyMissing,
  onHome,
  onUndo,
  onExport,
  isDarkMode,
  toggleDarkMode,
  isCounselingMode,
  setIsCounselingMode
}) => (
  <div className={`fixed top-0 left-0 right-0 h-14 bg-[var(--canvas-bg)] border-b ${isDarkMode ? 'border-white/5' : 'border-gray-200'} flex items-center justify-between px-6 z-[100] transition-all duration-300 backdrop-blur-md`}>
    {/* Left: Branding & Base Tools */}
    <div className="flex items-center gap-6 shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-end gap-[2px] w-6 h-6">
          <div className="w-1.5 h-4 bg-orange-500 rounded-sm transform skew-x-12"></div>
          <div className="w-1.5 h-5 bg-teal-400 rounded-sm"></div>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className={`text-[13px] font-black tracking-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Untitled document</span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Medical Space</span>
        </div>
      </div>
      
      <div className={`h-6 w-[1px] ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

      <div className="flex gap-2">
         <button onClick={onHome} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-black'}`} title="Home"><Home size={16} /></button>
         <button className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-black'}`}><Layout size={16} /></button>
         <button className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-black'}`}><Plus size={16} /></button>
      </div>
    </div>

    {/* Center: Search (Clean & Dedicated) */}
    <div className="flex-1 max-w-[460px] mx-8">
      {!showInitial && (
        <div className={`
          flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 border
          ${isDarkMode ? 'bg-white/5 border-white/5 focus-within:bg-black focus-within:border-purple-500/50' : 'bg-gray-100 border-transparent focus-within:bg-white focus-within:border-purple-500/30'}
        `}>
          <Search size={15} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search or ask anything..." 
            className={`bg-transparent border-none outline-none text-[14px] font-medium w-full placeholder-gray-400 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onGenerate()}
          />
        </div>
      )}
    </div>
    
    {/* Right: Intelligence & Settings */}
    <div className="flex items-center gap-4 shrink-0">
      <div className="flex items-center gap-4 px-2 py-1.5 mr-2">
        <Undo2 size={16} className={`cursor-pointer transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`} onClick={onUndo} title="Undo" />
        <RefreshCw size={15} className={`cursor-pointer transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`} title="Refresh" />
      </div>

       {/* Mode Toggle */}
       <button 
        onClick={() => setIsCounselingMode(!isCounselingMode)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500 border
          ${isCounselingMode 
            ? 'bg-teal-500/10 border-teal-500/30 text-teal-600 shadow-sm font-black' 
            : 'bg-purple-500/5 border-purple-500/20 text-purple-500 font-bold'}
        `}
      >
        <HeartPulse size={14} className={isCounselingMode ? 'animate-pulse' : ''} />
        <span className="text-[10px] uppercase tracking-widest leading-none">
          {isCounselingMode ? 'Patient Mode' : 'Clinical View'}
        </span>
      </button>

      <div className={`h-6 w-[1px] ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

      <div className="flex gap-4 items-center">
        <div className={`flex items-center gap-1 cursor-pointer transition-colors text-[13px] font-bold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
          <span>G1.5 Flash</span> <ChevronDown size={14} className="opacity-40" />
        </div>
        
        <div className={`h-6 w-[1px] ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

        <div className="flex items-center gap-3">
          <Moon size={18} className={`cursor-pointer transition-all ${isDarkMode ? 'text-purple-400 rotate-[360deg]' : 'text-gray-400 hover:text-black'}`} onClick={toggleDarkMode} title="Toggle Dark Mode" />
          <Download size={18} className={`cursor-pointer transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'}`} onClick={onExport} title="Export Board" />
          <UserCircle size={22} className={`cursor-pointer ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`} />
          
          <div className="flex items-center gap-2 ml-1">
            <span className={`text-[13px] font-black w-10 text-right ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{zoomPercent}%</span>
            <X size={18} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" onClick={onClearBoard} title="Clear board" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopNavBar;
