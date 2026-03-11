import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Activity, Heart, Shield, Search } from 'lucide-react';
import { PRESET_TOPICS } from '../data/presetTopics';

const TopicChooser = ({ query, setQuery, onGenerate, onSelectTopic, onFileUpload, isLoading }) => (
  <div className="absolute inset-0 bg-[#fdfdff]/90 backdrop-blur-xl z-[1000] overflow-y-auto pt-24 pb-32 flex flex-col items-center">
    <div className="w-full max-w-[1200px] px-10 animate-premium-in">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-bold tracking-[0.2em] uppercase mb-8">
          <Sparkles size={14} className="animate-pulse" />
          Nirogyam Care Intelligence
        </div>
        
        <h1 className="text-[80px] font-extrabold text-[#0f172a] leading-[1] tracking-[-0.04em] mb-8">
          The Hub of <span className="text-violet-600">Kidney Knowledge.</span>
        </h1>
        
        <p className="text-xl text-slate-500 font-medium max-w-[700px] leading-relaxed mb-12">
          Transform complex medical data into interactive visual maps. Grounded in clinical research, designed for patient empowerment.
        </p>

        {/* Big Search Entry */}
        <div className="w-full max-w-2xl relative group mb-16">
          <div className="absolute inset-0 bg-violet-600/10 blur-2xl rounded-3xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center bg-white border-2 border-slate-100 group-focus-within:border-violet-600 rounded-3xl p-2 transition-all duration-300 shadow-xl shadow-slate-200/50">
            <Search className="ml-4 text-slate-400" size={24} />
            <input 
              type="text" 
              placeholder="Ask anything about kidney health..."
              className="flex-1 px-4 py-4 text-lg font-medium outline-none text-slate-800 placeholder:text-slate-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onGenerate()}
            />
            <button 
              onClick={() => onGenerate()}
              disabled={isLoading || !query.trim()}
              className="bg-[#0f172a] hover:bg-violet-600 text-white p-4 rounded-2xl transition-all duration-300 disabled:opacity-50"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRESET_TOPICS.map((topic) => (
          <div 
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="topic-card premium-shadow group bg-white rounded-3xl p-8 border border-slate-100 cursor-pointer relative overflow-hidden"
          >
            {/* Hover Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-[3]" />
            
            <div className="relative z-10">
              <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                {topic.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{topic.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                {topic.description}
              </p>
              
              <div className="flex items-center gap-2 text-violet-600 font-bold text-sm uppercase tracking-wider">
                Begin Mapping <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}

        {/* Upload Custom Card */}
        <div 
          onClick={onFileUpload}
          className="topic-card premium-shadow group bg-slate-50 rounded-3xl p-8 border-2 border-dashed border-slate-200 hover:border-violet-600 transition-all cursor-pointer flex flex-col justify-center items-center text-center"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
             <Heart className="text-violet-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Your Own</h3>
          <p className="text-slate-500 text-sm font-medium">Add PDF reports or Lab Images to start a personalized session.</p>
        </div>
      </div>
    </div>
  </div>
);

export default TopicChooser;
