import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UNITS } from '../constants';
import UnitCard from '../components/UnitCard';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <motion.div 
           style={{ y: y1, opacity }}
           className="max-w-4xl z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-thin uppercase mb-6 tracking-widest text-zinc-800"
          >
            Human <span className="font-bold">×</span> Machine
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl font-light text-zinc-500 max-w-2xl mx-auto"
          >
            A student-built group showcase demonstrating BTEC IT skills through interactive features and unit content.
          </motion.p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-20 text-zinc-400"
        >
          <ChevronDown size={32} />
        </motion.div>
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-200 rounded-full opacity-30 dashed-border" 
            />
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-300 rounded-full opacity-20" 
            />
        </div>
      </section>

      {/* Units Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-4"
        >
           <h2 className="text-4xl font-thin uppercase tracking-widest">Core Units</h2>
           <span className="text-zinc-400 font-mono">01 — 04</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {UNITS.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <UnitCard unit={unit} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Module */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-zinc-900 text-white p-12 md:p-24 overflow-hidden relative group">
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-thin mb-6">Minimalist Chaos</h2>
                <p className="text-zinc-400 font-light mb-8">
                  Experience the "Overdrive" design philosophy. Move your cursor, scroll rapidly, and interact with the digital artifacts.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center animate-pulse">
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center animate-bounce">
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 h-[300px] w-full bg-zinc-800/50 backdrop-blur-sm relative border border-white/10 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  {/* Grid lines */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  <motion.div 
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    className="absolute top-1/2 left-1/2 w-32 h-32 bg-white mix-blend-overlay cursor-grab active:cursor-grabbing flex items-center justify-center"
                    style={{ x: "-50%", y: "-50%" }}
                  >
                    <span className="text-black font-bold uppercase tracking-widest text-xs">Drag Me</span>
                  </motion.div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;