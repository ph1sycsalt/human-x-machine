import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-8xl font-thin mb-12 tracking-tighter text-zinc-200">
          ABOUT <span className="text-zinc-900">BTEC IT</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg font-light leading-relaxed text-zinc-700">
          <div>
            <p className="mb-8">
              The BTEC Level 3 National Extended Diploma in Information Technology is a vocational qualification designed to provide specialist knowledge and skills for the IT sector. It emphasizes practical application over theory.
            </p>
            <p>
              This showcase represents the culmination of our group's effort, integrating multiple units into a singular, cohesive digital experience.
            </p>
          </div>
          <div>
             <h3 className="font-bold text-zinc-900 mb-4 uppercase tracking-widest text-sm">Core Skills</h3>
             <ul className="space-y-4 border-l border-zinc-200 pl-8">
                <li>
                  <strong className="block text-zinc-900">Systems Analysis</strong>
                  Understanding how complex information systems function and interact.
                </li>
                <li>
                  <strong className="block text-zinc-900">Full Stack Development</strong>
                  From database schema design to responsive frontend interfaces.
                </li>
                <li>
                  <strong className="block text-zinc-900">Digital Strategy</strong>
                  Leveraging social media and analytics for business growth.
                </li>
             </ul>
          </div>
        </div>

        {/* Timeline Interactive Element */}
        <div className="mt-32">
           <h2 className="text-3xl font-thin mb-12">Program Timeline</h2>
           <div className="space-y-0">
              {[1, 2, 3].map((year) => (
                <div key={year} className="group relative border-t border-zinc-200 py-12 hover:bg-zinc-100 transition-colors cursor-pointer px-4">
                   <div className="flex justify-between items-center">
                      <span className="text-6xl font-thin text-zinc-200 group-hover:text-zinc-900 transition-colors">YEAR 0{year}</span>
                      <span className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Expand Details</span>
                   </div>
                   <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                      <p className="pt-8 text-zinc-500 max-w-2xl">
                        Focus on foundation units, learning core programming concepts, and initial systems analysis projects. Introduction to database management and social media business integration.
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;