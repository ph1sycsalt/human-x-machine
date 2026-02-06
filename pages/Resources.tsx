import React from 'react';
import { RESOURCES } from '../constants';
import { FileText, Github, Code2 } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-thin mb-16 border-b border-zinc-200 pb-8">Resources & Tech Stack</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
         <div>
            <h2 className="text-2xl font-light mb-6">Build Notes</h2>
            <p className="text-zinc-500 mb-4 font-light">
              This site was constructed using React 18 and Tailwind CSS. The primary focus was to demonstrate advanced frontend capabilities including client-side routing, state management, and complex animation orchestration using Framer Motion.
            </p>
            <p className="text-zinc-500 font-light">
               Fallback behavior: In the event of API failures for dynamic content, local JSON constants are used to ensure the presentation remains functional during the expo.
            </p>
         </div>
         <div className="bg-zinc-900 text-zinc-400 p-8 font-mono text-sm overflow-x-auto rounded-sm">
{`// Dependency Graph
{
  "core": ["react", "react-dom"],
  "styling": ["tailwindcss"],
  "animation": ["framer-motion"],
  "routing": ["react-router-dom"],
  "icons": ["lucide-react"]
}`}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RESOURCES.map((resource, i) => (
          <div key={i} className="border border-zinc-200 p-8 hover:bg-white hover:shadow-lg transition-all group cursor-pointer">
             <div className="mb-6 text-zinc-400 group-hover:text-zinc-900 transition-colors">
               {resource.type === 'code' ? <Code2 size={32} /> : resource.type === 'repo' ? <Github size={32} /> : <FileText size={32} />}
             </div>
             <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
             <p className="text-zinc-500 text-sm mb-6">{resource.description}</p>
             <span className="text-xs uppercase tracking-widest font-bold text-zinc-300 group-hover:text-zinc-900">Download Asset</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;