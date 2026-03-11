import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && mobile.trim()) {
      onLogin(name);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white flex items-center justify-center p-6 animate-fade-in">
      <div className="max-w-[440px] w-full bg-white border border-gray-100 rounded-[40px] p-10 shadow-2xl">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-100">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-[32px] font-extrabold text-black mb-2">Nirogyam AI</h2>
          <p className="text-gray-500 font-medium">Enter your credentials to access the Medical Mindmap.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest pl-2">Name</label>
            <input 
              className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:border-[#7c3aed]/20 focus:bg-white transition-all text-[16px] font-semibold" 
              placeholder="e.g. opduser"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest pl-2">Mobile Number</label>
            <input 
              className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 outline-none focus:border-[#7c3aed]/20 focus:bg-white transition-all text-[16px] font-semibold" 
              placeholder="e.g. 0987654321"
              type="tel"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#7c3aed] text-white rounded-2xl py-5 font-bold text-[18px] flex items-center justify-center gap-2 hover:bg-[#6d28d9] transition-all transform hover:scale-[1.02] shadow-xl shadow-purple-100 active:scale-[0.98]"
          >
            Access Board <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
            By continuing, you agree to Nirogyam's educational terms. <br/>
            Your medical data stays private and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
