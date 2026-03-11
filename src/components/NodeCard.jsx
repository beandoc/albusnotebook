import React, { useState } from 'react';
import { 
  RefreshCw, 
  Trash2, 
  ChevronRight, 
  MoreVertical, 
  MessageSquare, 
  Sparkles,
  Link as LinkIcon,
  CheckCircle,
  Clock
} from 'lucide-react';

const NodeCard = ({ node, onRemove, onShowSuggestions, onSubmitQuestion, onRefresh, onUpdateContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(node.content || "");
  const [followUp, setFollowUp] = useState('');

  const handleUpdate = () => {
    onUpdateContent(node.id, editValue);
    setIsEditing(false);
  };

  const isQuery = node.type === 'query';

  // Render content with styled citations
  const renderContent = (content) => {
    if (!content) return null;
    const parts = content.split(/(\[.*?\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span key={i} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-violet-100 text-violet-700 text-[10px] font-bold mx-0.5 border border-violet-200 shadow-sm cursor-help hover:bg-violet-600 hover:text-white transition-colors">
            <LinkIcon size={8} />
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  if (isQuery) {
    return (
      <div className="w-[320px] bg-[#0f172a] text-white p-6 rounded-[32px] premium-shadow group border border-white/10 animate-fade-in">
        <div className="flex items-center gap-2 text-violet-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
          <MessageSquare size={12} />
          Patient Query
        </div>
        <p className="text-xl font-medium leading-tight tracking-tight mono-font">
          "{node.name}"
        </p>
        <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
           <button onClick={onRefresh} className="p-2 bg-white/10 hover:bg-violet-600 rounded-xl transition-all">
             <RefreshCw size={14} />
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[380px] bg-white rounded-[40px] premium-shadow border border-slate-100/50 flex flex-col overflow-hidden animate-fade-in">
      {/* Card Header */}
      <div className="px-8 pt-8 pb-4 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Clinical Answer
          </div>
          <h3 className="text-[17px] font-bold text-slate-900 tracking-tight leading-snug">
            {node.name}
          </h3>
        </div>
        <div className="flex gap-1">
           <button onClick={onRemove} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
             <Trash2 size={16} />
           </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="px-8 pb-4 flex-1">
        {node.isLoading ? (
          <div className="py-6 flex flex-col items-center gap-4">
             <div className="w-12 h-1 border-2 border-slate-100 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-violet-600 w-1/2 animate-[loadingAnim_1s_infinite]" />
             </div>
             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 leading-none">
                <Clock size={12} /> Synthesizing Knowledge...
             </p>
          </div>
        ) : isEditing ? (
          <div className="flex flex-col gap-3">
            <textarea
              className="w-full text-[15px] font-medium leading-relaxed text-slate-700 p-4 bg-slate-50 border border-slate-200 rounded-3xl min-h-[150px] outline-none focus:border-violet-600 transition-all scroll-elegant"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              autoFocus
            />
            <div className="flex gap-2">
              <button 
                onClick={handleUpdate}
                className="flex-1 py-2.5 bg-[#0f172a] text-white text-xs font-bold rounded-2xl hover:bg-violet-600 transition-colors shadow-lg shadow-black/5"
              >
                SAVE EDITS
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                className="py-2.5 px-4 bg-slate-100 text-slate-500 text-xs font-bold rounded-2xl hover:bg-slate-200 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="text-[15px] font-medium leading-[1.6] text-slate-600 cursor-text scroll-elegant max-h-[400px] overflow-y-auto whitespace-pre-wrap pr-2"
            onDoubleClick={() => {
              setEditValue(node.content);
              setIsEditing(true);
            }}
          >
            {renderContent(node.content)}
          </div>
        )}
      </div>

      {/* Suggestions Button */}
      {!node.isLoading && (
        <div className="px-8 pb-2">
           <button 
            onClick={onShowSuggestions}
            className="w-full py-4 flex items-center justify-between group"
           >
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <Plus size={16} />
                 </div>
                 <span className="text-xs font-bold text-slate-400 group-hover:text-violet-600 uppercase tracking-widest transition-colors">
                    Explore deeper insights
                 </span>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 group-hover:text-violet-600 transition-all" />
           </button>
        </div>
      )}

      {/* Bottom Follow-up Input */}
      <div className="px-4 pb-4">
        <div className="bg-[#fefce8] p-1.5 rounded-[32px] border border-[#fef08a] flex items-center shadow-inner group focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20 transition-all">
           <input 
             type="text" 
             placeholder="Ask a question..."
             className="flex-1 bg-transparent px-5 py-3 text-sm font-bold text-yellow-900 placeholder:text-yellow-700/40 outline-none"
             value={followUp}
             onChange={(e) => setFollowUp(e.target.value)}
             onKeyDown={(e) => {
               if (e.key === 'Enter' && followUp.trim()) {
                 onSubmitQuestion(followUp);
                 setFollowUp('');
               }
             }}
           />
           <button 
             onClick={() => {
               if(followUp.trim()){
                 onSubmitQuestion(followUp);
                 setFollowUp('');
               }
             }}
             className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-yellow-700 shadow-sm border border-yellow-100 hover:bg-yellow-100 active:scale-95 transition-all"
           >
             <ArrowRight size={18} />
           </button>
        </div>
      </div>
    </div>
  );
};

const Plus = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ArrowRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default NodeCard;
