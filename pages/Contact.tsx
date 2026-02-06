import React, { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-thin mb-8">Get in Touch</h1>
      <p className="text-zinc-500 mb-12 font-light text-lg">
        For contact or technical support email <a href={`mailto:${CONTACT_EMAIL}`} className="text-zinc-900 underline underline-offset-4 decoration-1">{CONTACT_EMAIL}</a>
      </p>

      <div className="bg-white p-8 md:p-12 border border-zinc-200 shadow-sm relative overflow-hidden">
        <AnimatePresence mode="wait">
          {formState === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="flex justify-center mb-6 text-green-500">
                <CheckCircle size={64} strokeWidth={1} />
              </div>
              <h2 className="text-2xl font-light mb-2">Message Saved</h2>
              <p className="text-zinc-400">Thank you for your feedback. This is a demo form, data has been saved locally.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-sm uppercase tracking-widest border-b border-zinc-300 pb-1 hover:border-zinc-900"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Name</label>
                    <input required type="text" className="w-full border-b border-zinc-200 py-2 outline-none focus:border-zinc-900 transition-colors bg-transparent" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Email</label>
                    <input required type="email" className="w-full border-b border-zinc-200 py-2 outline-none focus:border-zinc-900 transition-colors bg-transparent" placeholder="john@example.com" />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Subject</label>
                 <select className="w-full border-b border-zinc-200 py-2 outline-none focus:border-zinc-900 transition-colors bg-transparent text-zinc-600">
                    <option>General Feedback</option>
                    <option>Technical Support</option>
                    <option>Unit Content Query</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-xs uppercase font-bold tracking-widest text-zinc-400">Message</label>
                 <textarea required rows={4} className="w-full border-b border-zinc-200 py-2 outline-none focus:border-zinc-900 transition-colors bg-transparent resize-none" placeholder="Your message here..." />
              </div>

              <button 
                disabled={formState === 'submitting'}
                className="w-full bg-zinc-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-zinc-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? 'Sending...' : <>Send Message <Send size={16} /></>}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        
        {/* Fallback info */}
        <div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-400">
           <AlertCircle size={14} />
           <span>Technical Support Fallback: {CONTACT_EMAIL}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;