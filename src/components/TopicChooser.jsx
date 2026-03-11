import React from 'react';
import { ArrowRight, Upload, Search } from 'lucide-react';
import { PRESET_TOPICS } from '../data/presetTopics';

const TopicChooser = ({ query, setQuery, onGenerate, onSelectTopic, onFileUpload, isLoading }) => (
  <div className="absolute top-0 left-0 w-full h-full bg-[#fcfcfc] z-50 overflow-y-auto flex flex-col items-center justify-center animate-fade-in font-sans">
    <div className="w-full max-w-[800px] px-8 -mt-20">
      
      {/* Search Section */}
      <div className="mb-12 text-center">
        <h1 className="text-[42px] font-semibold text-[#111111] leading-tight tracking-tight mb-8">
          Explore a topic or upload content
        </h1>
        
        <div className="w-full bg-white border border-[#e5e5e5] rounded-[32px] p-2 flex items-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.06)] focus-within:border-[#d1d1d1] transition-all">
          <div className="pl-4 pr-2 text-[#999999]">
            <Search size={22} strokeWidth={2} />
          </div>
          <input 
            type="text" 
            placeholder="Ask about kidney health..."
            className="flex-1 bg-transparent px-2 py-4 text-[17px] font-medium outline-none text-[#111111] placeholder:text-[#999999]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && query.trim() && onGenerate()}
          />
          <button 
            onClick={() => onGenerate()}
            disabled={isLoading || !query.trim()}
            className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-[#111111] text-white rounded-full hover:bg-[#333333] transition-colors disabled:opacity-50 mx-1"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <ArrowRight size={20} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Upload & Presets */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#888888] uppercase tracking-wider">
            Or try these topics
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div 
            onClick={onFileUpload}
            className="group flex flex-col justify-between bg-white border border-[#e5e5e5] rounded-[24px] p-5 cursor-pointer hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all h-[140px]"
          >
            <div className="w-10 h-10 bg-[#f5f5f5] rounded-full flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
              <Upload size={18} />
            </div>
            <div className="font-medium text-[15px] text-[#111111]">
              Upload local<br/>document
            </div>
          </div>

          {PRESET_TOPICS.slice(0, 5).map(topic => (
            <div 
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="group flex flex-col justify-between bg-white border border-[#e5e5e5] rounded-[24px] p-5 cursor-pointer hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all h-[140px]"
            >
              <div className="text-2xl">
                {topic.icon}
              </div>
              <div className="font-medium text-[15px] text-[#111111] leading-tight">
                {topic.title.replace(/[^a-zA-Z\s]/g, '').trim()}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default TopicChooser;
