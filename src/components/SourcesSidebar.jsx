import React from 'react';
import { X, FileText, Plus } from 'lucide-react';

const SourcesSidebar = ({ sources, onClose, onRemove, onAddMore }) => (
  <div className="fixed right-6 top-16 w-72 bg-white/95 backdrop-blur-md border border-gray-100 rounded-[28px] shadow-2xl z-[150] p-6 animate-fade-in">
    <div className="flex justify-between items-center mb-5">
      <h3 className="text-sm font-bold text-gray-800">Knowledge Sources</h3>
      <X size={16} className="text-gray-400 cursor-pointer hover:text-black" onClick={onClose} />
    </div>
    <div className="space-y-3 max-h-[400px] overflow-y-auto scroll-elegant pr-2">
      {sources.map(s => (
        <div key={s.id} className="group relative bg-gray-50 hover:bg-purple-50 p-4 rounded-2xl border border-gray-100 transition-colors">
          <div className="flex items-start gap-3">
            <div className="shrink-0">
              {s.isImage ? (
                <img src={s.content} alt={s.name} className="w-10 h-10 rounded-lg object-cover border border-gray-200" />
              ) : (
                <div className="p-2 bg-white rounded-xl text-purple-600 shadow-sm">
                  <FileText size={16} />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[12px] font-bold text-gray-900 truncate">{s.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{s.size}</p>
                {s.metadata && (
                  <>
                    <span className="text-[10px] text-gray-300">•</span>
                    <p className="text-[10px] text-purple-400 font-bold uppercase tracking-tighter">{s.metadata}</p>
                  </>
                )}
              </div>
            </div>
            <X 
              size={14} 
              className="text-gray-300 hover:text-red-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" 
              onClick={() => onRemove(s.id)}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 pt-5 border-t border-gray-100">
       <button 
        onClick={onAddMore}
        className="w-full flex items-center justify-center gap-2 bg-[#f8f6ff] text-[#7c3aed] py-3 rounded-2xl text-[12px] font-bold hover:bg-[#7c3aed] hover:text-white transition-all"
       >
         <Plus size={14} /> Add more files
       </button>
    </div>
  </div>
);

export default SourcesSidebar;
