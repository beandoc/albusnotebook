import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, MessageSquare, Map, Plus, Sparkles, FolderOpen, ArrowRight } from 'lucide-react';
import { PRESET_TOPICS } from '../data/presetTopics';

const TopicChooser = ({ query, setQuery, onGenerate, onSelectTopic, onFileUpload, isLoading, recentBoards = [], recentConversations = [] }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#fdfbf7] z-[1000] flex items-center justify-center font-sans">
      {/* Decorative Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-100 rounded-full blur-[100px] opacity-40" />

      <div className="w-full max-w-[1100px] px-8 flex justify-between items-center z-10">
        
        {/* Left Column: Greeting and Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-[460px]"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-[14px] font-bold uppercase tracking-widest text-black/40">Notebook LLM</span>
          </div>

          <h1 className="text-[64px] font-black text-[#111] leading-[1.05] tracking-[-0.05em] mb-6">
            Hello, Sachin.
          </h1>
          <p className="text-[19px] font-medium text-black/60 leading-relaxed mb-12 max-w-[400px]">
            Your digital second brain is ready. Upload documents or dive into medical mind maps.
          </p>

          <div className="flex flex-col gap-4 w-[340px]">
            <button 
              onClick={onFileUpload}
              className="flex items-center justify-between group bg-white hover:bg-black border border-black/5 rounded-[20px] px-6 py-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 text-black group-hover:text-white transition-colors">
                <UploadCloud size={20} className="text-black/30 group-hover:text-white" />
                <span className="text-[15px] font-bold">Index Source Files</span>
              </div>
              <ArrowRight size={16} className="text-black/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>

            <button 
              onClick={() => onGenerate("New Mind Map")}
              className="flex items-center justify-between group bg-white hover:bg-black border border-black/5 rounded-[20px] px-6 py-4 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 text-black group-hover:text-white transition-colors">
                <Map size={20} className="text-black/30 group-hover:text-white" />
                <span className="text-[15px] font-bold">New Canvas</span>
              </div>
              <ArrowRight size={16} className="text-black/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Lists */}
        <div className="flex gap-8">
          
          {/* Recent Resources Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[320px] bg-white rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] border border-black/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <FolderOpen size={18} className="text-purple-600" />
              <h3 className="text-[15px] font-bold text-black">Your Sessions</h3>
            </div>
            
            <div className="space-y-4 mb-8 max-h-[220px] overflow-y-auto scroll-elegant pr-2">
              {recentBoards.length > 0 ? (
                recentBoards.map((board, i) => (
                  <button 
                    key={board.id} 
                    onClick={() => onSelectTopic(board)}
                    className="w-full text-left group flex flex-col p-4 rounded-2xl hover:bg-purple-50 transition-all border border-transparent hover:border-purple-100"
                  >
                    <span className="text-[13px] font-bold text-black group-hover:text-purple-700 transition-colors truncate">{board.title}</span>
                    <span className="text-[11px] font-medium text-black/30 group-hover:text-purple-400 mt-1">Edited recently</span>
                  </button>
                ))
              ) : (
                <div className="py-10 text-center flex flex-col items-center gap-3 opacity-30">
                  <MessageSquare size={32} />
                  <p className="text-[12px] font-bold">No active boards</p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-black/5">
               <h3 className="text-[11px] font-black text-black/30 mb-4 uppercase tracking-[0.2em]">Templates</h3>
               <div className="grid grid-cols-2 gap-3">
                  {PRESET_TOPICS.slice(0, 4).map(topic => (
                    <button 
                      key={topic.id}
                      onClick={() => onSelectTopic(topic)}
                      className="p-3 text-center bg-gray-50 hover:bg-black rounded-xl border border-black/[0.03] transition-all duration-300"
                    >
                      <span className="text-[12px] font-bold text-black hover:text-white transition-colors">{topic.icon}</span>
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Expert Modules Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[320px] bg-black rounded-[32px] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Sparkles size={18} className="text-purple-400" />
                <h3 className="text-[15px] font-bold text-white">Expert Modules</h3>
              </div>
              
              <div className="space-y-3">
                {PRESET_TOPICS.map(topic => (
                  <button 
                    key={topic.id}
                    onClick={() => onSelectTopic(topic)}
                    className="w-full group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 overflow-hidden relative"
                  >
                    <div className="flex items-center gap-3 z-10">
                      <span className="text-[14px]">{topic.icon}</span>
                      <span className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors truncate max-w-[160px]">
                        {topic.title.replace(/[^a-zA-Z\s]/g, '').trim()}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all z-10" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-purple-600/20 border border-purple-500/20 rounded-2xl p-4">
              <p className="text-[12px] font-bold text-purple-200 leading-relaxed italic">
                "AI provides a preliminary starting point. Always verify with medical professionals."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TopicChooser;
