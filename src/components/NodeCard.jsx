import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X, Plus, Image, Sparkles, MessageCircle, HeartPulse, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NodeCard = ({ 
  node, 
  onRemove, 
  onShowSuggestions, 
  onRefresh, 
  onUpdateContent, 
  isActive, 
  isDarkMode,
  isCounselingMode
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(node.content || "");
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const simplifiedContent = node.content 
    ? node.content
        .replace(/Serum Creatinine/gi, 'Creatinine (Blood waste test)')
        .replace(/eGFR/gi, 'Kidney filter percentage')
        .replace(/Nitrogenous waste/gi, 'Medical waste in blood')
        .replace(/Ischemia/gi, 'Lack of blood/oxygen')
        .replace(/Structural damage/gi, 'Injury to the tissue')
        .replace(/KDIGO/gi, 'Global Kidney Standards')
    : "";

  const handleEditToggle = () => {
    if (isEditing) onUpdateContent(node.id, editValue);
    setIsEditing(!isEditing);
  };

  const handleGenerateImage = () => {
    if (!node.presetImageUrl) return;
    setIsGeneratingImage(true);
    setTimeout(() => {
      setIsGeneratingImage(false);
      setShowImage(true);
    }, 2000);
  };

  const colors = {
    teal: { 
      header: 'bg-gradient-to-br from-[#99ebe1] to-[#81d4cb]', 
      body: 'bg-[#f0fdfa]', 
      border: 'border-[#71c4bb]',
      accent: 'bg-[#14b8a6]',
      text: 'text-[#064e4b]'
    },
    yellow: { 
      header: 'bg-gradient-to-br from-[#f2d05c] to-[#e6c141]', 
      body: 'bg-[#fffbeb]', 
      border: 'border-[#dab94b]',
      accent: 'bg-[#eab308]',
      text: 'text-[#713f12]'
    },
    default: {
      header: isDarkMode ? 'bg-gradient-to-br from-[#2a2d35] to-[#1e2128]' : 'bg-gradient-to-br from-gray-50 to-gray-100',
      body: isDarkMode ? 'bg-[#14161b]' : 'bg-white',
      border: isDarkMode ? 'border-white/10' : 'border-gray-300',
      accent: 'bg-purple-600',
      text: isDarkMode ? 'text-white' : 'text-gray-900'
    }
  };

  const theme = colors[node.color] || colors.default;

  if (node.type === 'query') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`px-6 py-3 rounded-[12px] border-2 shadow-sm flex items-center gap-3 transition-colors duration-300 pointer-events-auto cursor-grab active:cursor-grabbing
          ${theme.header} ${theme.border} ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}
        `}
      >
        <span className="text-[14px] font-bold tracking-tight whitespace-nowrap">{node.name}</span>
        <div className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-600'} animate-pulse`} />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`
        relative group flex flex-col w-[340px] rounded-[16px] overflow-visible transition-all duration-500 pointer-events-auto border-2
        ${isActive ? `shadow-2xl translate-y-[-4px]` : 'shadow-lg'}
        ${theme.border} ${isActive ? 'ring-4 ring-black/5' : ''}
      `}
    >
      {/* Right Margin Plus Trigger - Exactly like Albus */}
      <AnimatePresence>
        {isHovered && !node.isLoading && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-50"
          >
            <motion.button 
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onShowSuggestions(); }}
              onPointerDown={(e) => e.stopPropagation()}
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white transition-colors duration-300 ${theme.accent}`}
            >
              <Plus size={18} strokeWidth={3} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-hidden rounded-[15px] flex flex-col flex-1">
        {/* Counseling Indicator Overlay */}
        {isCounselingMode && (
          <div className="absolute top-10 left-0 right-0 z-10 pointer-events-none">
             <div className="bg-teal-500/90 text-white text-[9px] font-black py-1 px-3 w-fit flex items-center gap-1 shadow-md">
               <HeartPulse size={10} /> PATIENT VIEW
             </div>
          </div>
        )}

        {showImage && node.presetImageUrl && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 200, opacity: 1 }} className="w-full overflow-hidden">
            <img src={node.presetImageUrl} alt={node.name} className="w-full h-full object-cover" />
          </motion.div>
        )}

        {isGeneratingImage && (
          <div className="w-full h-[200px] flex flex-col items-center justify-center bg-black/5 animate-pulse">
            <Sparkles className="text-purple-500 mb-2 animate-bounce" size={24} />
            <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest">Generating Visual...</span>
          </div>
        )}

        <div className={`px-6 py-4 flex items-center justify-between ${theme.header} transition-colors duration-500 relative border-b border-black/5`}>
          {/* Inner Glow Hack for Premium Feel */}
          <div className="absolute inset-0 border-t border-white/40 pointer-events-none" />
          
          <div className="flex items-center gap-2 relative z-10">
            {isCounselingMode && <MessageCircle size={14} className={theme.text} />}
            <h3 className={`text-[13px] font-black uppercase tracking-wider ${theme.text} truncate max-w-[210px]`}>
              {isCounselingMode ? `Simple: ${node.title || node.name}` : (node.title || node.name)}
            </h3>
          </div>
          <div className="flex items-center gap-1 transition-opacity">
            {node.presetImageUrl && !showImage && !isGeneratingImage && (
              <button 
                onClick={(e) => { e.stopPropagation(); handleGenerateImage(); }}
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                className="p-1.5 hover:bg-black/10 rounded-lg text-gray-700 relative z-[100] cursor-pointer"
              >
                <Image size={14} />
              </button>
            )}
            <button 
              onClick={(e) => { e.stopPropagation(); onRefresh(); }}
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              className="p-1.5 hover:bg-black/10 rounded-full text-gray-700 relative z-[100] cursor-pointer transition-colors" 
              title="Refresh"
            >
              <RefreshCw size={14} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onRemove(); }}
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              className="p-1.5 hover:bg-red-500/20 rounded-full text-red-600 relative z-[100] cursor-pointer transition-colors" 
              title="Remove"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        <div className={`px-6 pt-6 pb-10 leading-relaxed max-h-[560px] overflow-y-auto scroll-elegant ${theme.body} ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {node.isLoading ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <div className="flex gap-1.5">
                 <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-black/20" />
                 <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 rounded-full bg-black/20" />
                 <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 rounded-full bg-black/20" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Capturing Insight...</p>
            </div>
          ) : node.error ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-red-500 opacity-50" size={24} />
              </div>
              <p className="text-[14px] font-black text-red-600 mb-1 leading-none uppercase tracking-widest">Capture Failed</p>
              <p className="text-[12px] text-gray-500 font-medium leading-relaxed max-w-[220px]">
                {node.error}
              </p>
              <button 
                onClick={onRefresh}
                className="mt-6 px-5 py-2.5 bg-black/5 hover:bg-black/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
              >
                Retry Insight
              </button>
            </div>
          ) : isEditing ? (
            <textarea 
              className="w-full min-h-[200px] bg-transparent outline-none resize-none font-sans text-[15px] leading-relaxed"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              onBlur={handleEditToggle}
              autoFocus
            />
          ) : (
            <div 
              className={`prose prose-sm max-w-none 
                prose-p:text-[15.5px] prose-p:leading-[1.85] prose-p:mb-5 prose-p:font-medium
                prose-headings:font-black prose-headings:tracking-tight prose-headings:mb-4
                prose-strong:font-black prose-strong:text-black
                prose-li:text-[14.5px] prose-li:mb-2
                ${isDarkMode ? 'prose-invert text-gray-100' : 'text-gray-800'}
              `}
              onDoubleClick={() => setIsEditing(true)}
            >
              {isCounselingMode && (
                 <div className="mb-4 bg-teal-500/5 p-3 rounded-xl border border-teal-500/10">
                    <p className="text-[11px] font-black text-teal-600 uppercase mb-2 flex items-center gap-1">
                       <HeartPulse size={12} /> Key Patient Takeaway
                    </p>
                    <p className="text-[13px] text-teal-900 font-bold leading-snug">
                       {simplifiedContent.split('.')[0]}. This is often manageable with the right steps.
                    </p>
                 </div>
              )}
              
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {isCounselingMode ? simplifiedContent : node.content}
              </ReactMarkdown>

              {isCounselingMode && (
                <div className="mt-6 pt-4 border-t border-teal-500/10 flex flex-wrap gap-2">
                   <div className="bg-white/50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold text-teal-700 shadow-sm">
                      <CheckCircle2 size={12} /> Stay Hydrated
                   </div>
                   <div className="bg-white/50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold text-orange-700 shadow-sm">
                      <X size={12} /> Avoid Ibuprofen
                   </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NodeCard;
