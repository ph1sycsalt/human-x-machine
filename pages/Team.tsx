import React from 'react';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
       <div className="text-center mb-24">
          <h1 className="text-6xl font-thin uppercase tracking-widest mb-4">The Team</h1>
          <p className="text-zinc-400">BTEC IT Level 3 Group Project</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
               <div className="w-48 h-48 bg-zinc-200 rounded-full mb-8 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={`https://picsum.photos/seed/${member.initials}/400/400`} 
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-white font-mono text-2xl">{member.initials}</span>
                  </div>
               </div>
               <h3 className="text-2xl font-light">{member.name}</h3>
               <p className="text-zinc-500 uppercase text-xs tracking-widest mt-2">{member.role}</p>
            </motion.div>
          ))}
       </div>

       <div className="mt-32 text-center border-t border-zinc-200 pt-12">
          <p className="text-zinc-400 text-sm">
            Content created specifically for BTEC Expo 2024.<br/>
            All work presented is original student coursework.
          </p>
       </div>
    </div>
  );
};

export default Team;