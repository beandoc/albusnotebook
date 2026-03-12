import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GitBranch, Maximize2, Square, Type, ArrowUpCircle, Image as ImageIcon, Youtube } from 'lucide-react';

const ToolPalette = ({ onFileUpload, fileInputRef, handleFileUpload, onResetZoom, onMagicGenerate }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-gray-200 p-2.5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-1.5 z-[100] transition-all duration-500 hover:border-gray-300">
    <button 
      onClick={onMagicGenerate}
      title="Magic Generate"
      className="w-12 h-12 flex items-center justify-center text-[#7c3aed] rounded-[16px] hover:bg-purple-50 transition-all relative group"
    >
      <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <Sparkles size={20} className="drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]" />
      </motion.div>
    </button>
    <button title="Branch Mode" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><GitBranch size={20} /></button>
    <button title="Reset View" onClick={onResetZoom} className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><Maximize2 size={20} className="rotate-45" /></button>
    
    <div className="w-[1px] h-6 bg-gray-200 mx-1" />

    <button title="Selector" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><Square size={20} /></button>
    <button title="Heading" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 font-bold text-lg">H</button>
    <button title="Text Tool" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><Type size={20} /></button>
    
    <div className="relative group mx-1">
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        onChange={handleFileUpload}
        accept=".txt,.md,.pdf,.png,.jpg,.jpeg,.webp"
      />
      <button 
        onClick={() => fileInputRef.current?.click()}
        title="Upload Sources"
        className="w-12 h-12 flex items-center justify-center bg-[#7c3aed] text-white rounded-[18px] shadow-[0_8px_20px_rgba(124,58,237,0.3)] hover:bg-[#6d28d9] transition-all transform active:scale-90"
      >
        <ArrowUpCircle size={22} strokeWidth={2.5} />
      </button>
    </div>

    <button title="Image Search" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><ImageIcon size={20} /></button>
    <button title="YouTube Import" className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-900 rounded-[14px] hover:bg-gray-100 transition-colors"><Youtube size={20} /></button>
  </div>
);

export default ToolPalette;
