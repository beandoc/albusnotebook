import React, { useState } from 'react';
import { 
  Globe, Image as ImageIcon, Maximize2, X, 
  MessageSquare, Edit3, Square, Clipboard, Headphones, 
  ArrowDownCircle, MoreHorizontal, RefreshCw, Plus
} from 'lucide-react';

const NodeCard = ({ node, onRemove, onShowSuggestions, onSubmitQuestion, onRefresh, onUpdateContent }) => {
  const [qInput, setQInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(node.content);

  const toggleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(node.content);
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Premium'));
      if (preferredVoice) utterance.voice = preferredVoice;
      
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      onUpdateContent(node.id, editValue);
    } else {
      setEditValue(node.content);
    }
    setIsEditing(!isEditing);
  };

  if (node.type === 'query') {
    return (
      <div className="w-[340px] animate-fade-in group/query">
        <div className="bg-white border-2 border-[#7c3aed]/10 rounded-[24px] px-6 py-4 shadow-sm flex items-center justify-between transition-all hover:border-[#7c3aed]/30 hover:shadow-md cursor-grab active:cursor-grabbing">
          <span className="font-mono text-[15px] font-bold text-gray-800 truncate pr-4">{node.name}</span>
          <button 
            onClick={onRefresh}
            className="w-10 h-10 bg-[#7c3aed]/5 text-[#7c3aed] rounded-xl flex items-center justify-center hover:bg-[#7c3aed] hover:text-white transition-all transform active:scale-95 shrink-0"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-[340px] flex flex-col items-center group/card animate-fade-in">
      {/* Floating Toolbar above card */}
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-[12px] px-3 py-1.5 flex items-center gap-3.5 shadow-lg mb-3 transition-all duration-300 opacity-0 group-hover/card:opacity-100 transform translate-y-1 group-hover/card:translate-y-0">
        <div className={`w-4 h-4 rounded-full border border-black/5 shadow-inner cursor-pointer hover:scale-110 transition-transform ${node.color === 'teal' ? 'bg-[#99ebe1]' : 'bg-[#f2d05c]'}`}></div>
        <div className="w-[1px] h-3 bg-gray-200"></div>
        <Edit3 
          size={14} 
          className={`${isEditing ? 'text-[#7c3aed]' : 'text-gray-500'} hover:text-black cursor-pointer transition-colors`} 
          onClick={handleEditToggle}
        />
        <Square size={14} className="text-gray-500 hover:text-black cursor-pointer" />
        <Clipboard size={14} className="text-gray-500 hover:text-black cursor-pointer" />
        <div className="w-[1px] h-3 bg-gray-200"></div>
        <Headphones 
          size={14} 
          className={`${isSpeaking ? 'text-[#7c3aed] fill-[#7c3aed]/10' : 'text-gray-500'} hover:text-[#7c3aed] cursor-pointer transition-colors`} 
          onClick={toggleSpeak}
        />
        <ArrowDownCircle size={14} className="text-gray-500 hover:text-[#7c3aed] cursor-pointer" />
        <MoreHorizontal size={14} className="text-gray-400 hover:text-black cursor-pointer" />
      </div>

      <div className="relative">
        <div className={`w-[340px] rounded-[16px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 relative group transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] ${node.color === 'yellow' ? 'bg-[#fef9e7]' : 'bg-white'}`}>
          {/* Header */}
          <div className={`px-5 py-3.5 flex justify-between items-center font-bold text-[13px] ${node.color === 'teal' ? 'bg-[#99ebe1] text-[#0f4d44]' : 'bg-[#f2d05c] text-[#5c4b09]'}`}>
            <span className="truncate max-w-[200px] leading-tight text-left block w-full">{node.name}</span>
            <div className="flex items-center gap-2.5 opacity-60 shrink-0">
              <Globe size={13} /> 
              <ImageIcon size={13} /> 
              <Maximize2 size={13} />
              <X size={14} className="cursor-pointer hover:opacity-100" onClick={onRemove} />
            </div>
          </div>
          
          {/* Content Body */}
          <div className={`p-7 text-[14px] leading-relaxed text-gray-800 max-h-[480px] overflow-y-auto font-[400] scroll-elegant border-b border-gray-50/10`}>
            {node.isLoading ? (
              <div className="space-y-4 py-2 text-left w-full">
                <div className="h-3 bg-gray-100/50 rounded-full w-full animate-pulse"></div>
                <div className="h-3 bg-gray-100/50 rounded-full w-[94%] animate-pulse delay-75"></div>
                <div className="h-3 bg-gray-100/50 rounded-full w-[88%] animate-pulse delay-150"></div>
                <div className="h-3 bg-gray-100/50 rounded-full w-[96%] animate-pulse delay-200"></div>
              </div>
            ) : isEditing ? (
              <textarea 
                className="w-full min-h-[150px] bg-transparent outline-none resize-none font-sans text-[14px] leading-relaxed"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onBlur={handleEditToggle}
                autoFocus
              />
            ) : (
              <div className="whitespace-pre-wrap text-left" onDoubleClick={() => setIsEditing(true)}>
                {node.content.split(/(\[.*?\])/).map((part, i) => {
                  if (part.startsWith('[') && part.endsWith(']')) {
                    return (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-[#7c3aed]/10 text-[#7c3aed] text-[10px] font-bold mx-0.5 cursor-help border border-[#7c3aed]/20"
                        title="Information grounded in source"
                      >
                        {part.slice(1, -1)}
                      </span>
                    );
                  }
                  return part;
                })}
              </div>
            )}
          </div>
        </div>

        {/* Suggestion Toggle Button (+) */}
        <button 
          onClick={onShowSuggestions} 
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 shadow-lg hover:text-[#7c3aed] hover:border-[#7c3aed]/20 transition-all hover:scale-110 z-20 group"
        >
          <Plus size={18} className="transition-transform group-hover:rotate-90" />
        </button>

        {/* Ask a question field (Always visible below response cards) */}
        <div className="mt-3 w-full bg-[#fef9e7] rounded-[24px] border border-[#f2d05c]/20 p-4 shadow-sm transition-all focus-within:shadow-md focus-within:border-[#f2d05c]/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#f2d05c] flex items-center justify-center text-amber-900 shadow-sm shrink-0">
              <MessageSquare size={14} />
            </div>
            <input 
              className="bg-transparent flex-1 outline-none text-[14px] text-[#5c4b09] font-medium placeholder-[#5c4b09]/30" 
              placeholder="Ask a question" 
              value={qInput} 
              onChange={e => setQInput(e.target.value)} 
              onKeyPress={e => {
                if (e.key === 'Enter' && qInput.trim()) {
                  onSubmitQuestion(qInput);
                  setQInput('');
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeCard;
