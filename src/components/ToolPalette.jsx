import React from 'react';
import { Wand2, GitBranch, Edit3, Maximize2, Square, Type, FileText, ArrowUpCircle, Image as ImageIcon, Youtube } from 'lucide-react';

const ToolPalette = ({ onFileUpload, fileInputRef, handleFileUpload, onResetZoom, onMagicGenerate }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-200/50 p-2.5 rounded-[20px] shadow-2xl flex items-center gap-1.5 z-[100] transition-all duration-500 hover:border-gray-300">
    <button 
      onClick={onMagicGenerate}
      title="Magic Generate"
      className="w-11 h-11 flex items-center justify-center text-[#7c3aed] rounded-[14px] hover:bg-gray-100 transition-colors"
    >
      <Wand2 size={20} />
    </button>
    <button title="Branch Mode" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><GitBranch size={20} /></button>
    <button title="Edit Nodes" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><Edit3 size={20} /></button>
    <button 
      onClick={onResetZoom}
      title="Reset View"
      className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"
    >
      <Maximize2 size={20} className="rotate-45" />
    </button>
    <button title="Selector" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><Square size={20} /></button>
    <button title="Heading" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100 font-bold text-lg">H</button>
    <button title="Text Tool" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><Type size={20} /></button>
    <button title="Note" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><FileText size={20} /></button>
    <div className="relative group mx-0.5">
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
        className="w-11 h-11 flex items-center justify-center bg-[#7c3aed] text-white rounded-[14px] shadow-lg shadow-purple-200 hover:bg-[#6d28d9] transition-all transform active:scale-95"
      >
        <ArrowUpCircle size={22} />
      </button>
    </div>
    <button title="Image Search" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><ImageIcon size={20} /></button>
    <button title="YouTube Import" className="w-11 h-11 flex items-center justify-center text-gray-600 rounded-[14px] hover:bg-gray-100"><Youtube size={20} /></button>
  </div>
);

export default ToolPalette;
