import React from 'react';
import { UploadCloud, MessageSquare, Map, Plus } from 'lucide-react';
import { PRESET_TOPICS } from '../data/presetTopics';

const TopicChooser = ({ query, setQuery, onGenerate, onSelectTopic, onFileUpload, isLoading }) => (
  <div className="absolute top-0 left-0 w-full h-full bg-[#f2ede6] z-50 flex items-center justify-center font-sans tracking-tight">
    
    <div className="w-full max-w-[1100px] px-8 flex justify-between items-start">
      
      {/* Left Column: Greeting and Actions */}
      <div className="flex-1 max-w-[420px]">
        <h1 className="text-[56px] font-black text-[#111] leading-none mb-6 font-serif tracking-[-0.04em]">
          Hello Sachin.
        </h1>
        <p className="text-[18px] font-medium text-[#111] leading-snug mb-12 max-w-[360px]">
          Your boards and conversations are on the right. For an advanced speech assistant download our mobile application.
        </p>

        <div className="flex flex-col gap-4 w-[300px]">
          <button 
            onClick={onFileUpload}
            className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.7)] border border-[rgba(0,0,0,0.05)] rounded-[12px] px-5 py-3.5 text-[15px] font-bold text-[#111] transition-colors"
          >
            <UploadCloud size={18} strokeWidth={2.5} />
            Upload and index your files
          </button>

          <button 
            className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.7)] border border-[rgba(0,0,0,0.05)] rounded-[12px] px-5 py-3.5 text-[15px] font-bold text-[#111] transition-colors"
          >
            <MessageSquare size={18} strokeWidth={2.5} />
            Start a new conversation
          </button>

          <button 
            onClick={() => onGenerate("Start Blank Canvas")}
            className="flex items-center gap-3 bg-[rgba(255,255,255,0.4)] border border-[rgba(0,0,0,0.05)] hover:bg-[rgba(255,255,255,0.7)] rounded-[12px] px-5 py-3.5 text-[15px] font-bold text-[#111] transition-colors"
          >
            <Map size={18} strokeWidth={2.5} />
            Work on a new canvas
          </button>
        </div>
      </div>

      {/* Right Column: Topics / Lists */}
      <div className="flex gap-6 mt-4">
        
        {/* Conversations Column */}
        <div className="w-[300px] bg-[rgba(255,255,255,0.6)] rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} strokeWidth={2.5} className="text-[#111]" />
              <h3 className="text-[15px] font-bold text-[#111]">Conversations</h3>
            </div>
            <button className="text-[#111] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1">
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="py-3 px-2 border-b border-[rgba(0,0,0,0.05)] text-[14px] font-medium text-[#111] cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-md">
              Skincare for Lupus Nephritis
            </div>
            <div className="py-3 px-2 border-b border-[rgba(0,0,0,0.05)] text-[14px] font-medium text-[#111] cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-md">
              image
            </div>
            <div className="py-3 px-2 border-b border-[rgba(0,0,0,0.05)] text-[14px] font-medium text-[#111] cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-md">
              image
            </div>
          </div>
        </div>

        {/* Boards Column (Using Presets here) */}
        <div className="w-[300px] bg-[rgba(255,255,255,0.6)] rounded-[12px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Map size={16} strokeWidth={2.5} className="text-[#111]" />
              <h3 className="text-[15px] font-bold text-[#111]">Boards</h3>
            </div>
            <button className="text-[#111] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-1">
              <Plus size={16} />
            </button>
          </div>
          
          <div className="flex flex-col gap-1 overflow-y-auto max-h-[300px] scroll-elegant">
            {PRESET_TOPICS.map(topic => (
              <div 
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="py-3 px-2 border-b border-[rgba(0,0,0,0.05)] text-[14px] font-medium text-[#111] cursor-pointer hover:bg-[rgba(255,255,255,0.5)] rounded-md truncate"
              >
                {topic.title.replace(/[^a-zA-Z\s]/g, '').trim()} Canvas
              </div>
            ))}
          </div>
        </div>

      </div>
      
    </div>
  </div>
);

export default TopicChooser;
