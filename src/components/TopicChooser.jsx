import React from 'react';
import { RefreshCw, ArrowUpCircle, MessageSquare } from 'lucide-react';
import { PRESET_TOPICS } from '../data/presetTopics';

const TopicChooser = ({ query, setQuery, onGenerate, onSelectTopic, onFileUpload, isLoading }) => (
  <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] z-50 overflow-y-auto pt-24 pb-32 animate-fade-in">
    <div className="max-w-[1000px] mx-auto px-8">
      <div className="flex flex-col mb-16 text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#7c3aed] text-white px-4 py-1.5 rounded-full text-[12px] font-bold tracking-widest uppercase">Nirogyam Care</div>
        </div>
        <h1 className="text-[64px] font-[800] text-black leading-tight tracking-tight mb-6">Patient Education Canvas.</h1>
        <p className="text-[20px] text-gray-500 font-medium max-w-[600px] leading-relaxed">
          Select a clinical module below to begin visual mapping. Our AI is grounded in the Nirogyam medical knowledge repository.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-16">
        {PRESET_TOPICS.map(topic => (
          <div 
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="group bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-[32px] mb-6 group-hover:bg-purple-50 transition-colors">
              {topic.icon}
            </div>
            <h3 className="text-[22px] font-bold text-black mb-3 text-left">{topic.title}</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed text-left">{topic.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border-2 border-gray-100 p-3 pl-8 rounded-[32px] shadow-2xl flex items-center transition-all duration-300 focus-within:border-[#7c3aed]/30">
        <input 
          type="text" 
          placeholder="Ask Albus something custom..." 
          className="flex-1 text-2xl font-mono outline-none py-6 placeholder-gray-300" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && onGenerate()} 
        />
        <button 
          onClick={() => onGenerate()} 
          className="w-[64px] h-[64px] bg-[#7c3aed] text-white rounded-[24px] flex items-center justify-center hover:bg-[#6d28d9] transition-all transform hover:scale-105 shadow-lg shadow-purple-200"
        >
          <RefreshCw size={32} className={isLoading ? 'animate-spin' : ''} />
        </button>
      </div>
      
      <div className="mt-12 flex gap-4">
        <button onClick={onFileUpload} className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-[20px] text-[15px] font-bold hover:bg-gray-50 transition-colors shadow-sm">
          <ArrowUpCircle size={20} className="text-[#7c3aed]" />
          Upload documents
        </button>
        <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-[20px] text-[15px] font-bold hover:bg-gray-50 transition-colors shadow-sm">
          <MessageSquare size={20} className="text-[#7c3aed]" />
          Start a conversation
        </button>
      </div>
    </div>
  </div>
);

export default TopicChooser;
