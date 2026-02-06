import React from 'react';
import { motion } from 'framer-motion';

const Theme: React.FC = () => {
  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-zinc-200 to-transparent rounded-full blur-3xl"
         />
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, filter: 'blur(10px)' }}
           animate={{ opacity: 1, filter: 'blur(0px)' }}
           transition={{ duration: 1 }}
        >
          <span className="block text-center text-xs font-bold tracking-[0.3em] text-zinc-400 mb-8">THEME ESSAY</span>
          <h1 className="text-5xl md:text-7xl font-thin text-center mb-16 leading-tight">
            Human <br /> <span className="italic font-serif">versus</span> <br /> Machine?
          </h1>

          <div className="prose prose-lg prose-zinc mx-auto font-light text-justify">
            <p>
              In the context of modern BTEC IT studies, the boundary between human operator and machine output is increasingly blurred. We no longer just "use" computers; we collaborate with them.
            </p>
            <p>
              This project explores the synergy—not the conflict. Our database schemas (Unit 2) structure human knowledge. Our web interfaces (Unit 6) interpret human intent. Our social media strategies (Unit 3) analyze human behavior through algorithmic lenses.
            </p>
            <blockquote className="border-l-2 border-zinc-900 pl-6 italic text-2xl my-12 text-zinc-600">
              "The machine does not isolate us from the great problems of nature but plunges us more deeply into them."
            </blockquote>
            <p>
              Throughout this exhibition, notice how the "chaos" of the design interacts with the "order" of the code. This tension represents the Human × Machine dynamic: emotional, unpredictable creativity powered by rigid, logical infrastructure.
            </p>
          </div>

          <div className="mt-24 border border-zinc-200 p-12 text-center">
             <p className="font-mono text-sm text-zinc-400 mb-4">INTERACTIVE SYNERGY DEMO</p>
             <div className="h-64 flex items-center justify-center gap-2">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-4 bg-zinc-900"
                    animate={{ height: ["20%", "80%", "20%"] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
             </div>
             <p className="text-xs mt-4 text-zinc-400">Audio Visualization Placeholder</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Theme;