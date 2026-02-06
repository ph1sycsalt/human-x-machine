import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UNITS } from '../constants';
import { ArrowLeft, Code, Database, Share2, Layout as LayoutIcon, Download } from 'lucide-react';

const Units: React.FC = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const activeUnit = UNITS.find(u => u.id === unitId);

  // If we are at /units but no ID, show list
  if (!unitId) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl font-thin uppercase tracking-widest mb-16"
        >
          Unit Index
        </motion.h1>

        <div className="space-y-12">
          {UNITS.map((unit) => (
            <motion.div 
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-t border-zinc-200 pt-8 hover:border-zinc-900 transition-colors duration-500"
            >
              <Link to={`/units/${unit.id}`} className="block grid grid-cols-1 md:grid-cols-12 gap-8">
                 <div className="md:col-span-2 text-zinc-400 font-mono text-xl group-hover:text-zinc-900 transition-colors">
                    {unit.id.replace('unit-', '0')}
                 </div>
                 <div className="md:col-span-6">
                    <h2 className="text-4xl font-light mb-4 group-hover:translate-x-4 transition-transform duration-500">{unit.title}</h2>
                    <p className="text-zinc-500 font-light max-w-xl">{unit.fullDescription}</p>
                 </div>
                 <div className="md:col-span-4 flex items-center justify-end">
                    <span className="uppercase text-sm tracking-widest border border-zinc-200 px-6 py-3 rounded-full group-hover:bg-zinc-900 group-hover:text-white transition-all">
                      View Unit Artifacts
                    </span>
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Unit Detail View
  if (!activeUnit) {
    return <div className="p-12 text-center">Unit not found. <Link to="/units" className="underline">Return to index</Link></div>;
  }

  const getUnitIcon = (id: string) => {
    switch(id) {
        case 'unit-3': return <Share2 size={48} className="stroke-1" />;
        case 'unit-6': return <Code size={48} className="stroke-1" />;
        case 'unit-5': return <LayoutIcon size={48} className="stroke-1" />;
        case 'unit-2': return <Database size={48} className="stroke-1" />;
        default: return <Code />;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <button 
        onClick={() => navigate('/units')} 
        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 mb-12 uppercase text-xs tracking-widest transition-colors"
      >
        <ArrowLeft size={16} /> Back to Index
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-12">
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }}
             className="border-b border-zinc-200 pb-8"
           >
              <div className="mb-6 text-zinc-900">
                {getUnitIcon(activeUnit.id)}
              </div>
              <h1 className="text-5xl font-thin mb-4 leading-tight">{activeUnit.title}</h1>
              <p className="text-zinc-500">{activeUnit.fullDescription}</p>
           </motion.div>

           <div>
              <h3 className="uppercase text-xs font-bold tracking-widest mb-4 text-zinc-400">Learning Outcomes</h3>
              <ul className="space-y-3">
                 {activeUnit.learningOutcomes.map((lo, i) => (
                   <li key={i} className="flex gap-3 text-sm font-light">
                      <span className="text-zinc-300">0{i+1}</span>
                      {lo}
                   </li>
                 ))}
              </ul>
           </div>

           <div>
              <h3 className="uppercase text-xs font-bold tracking-widest mb-4 text-zinc-400">Technical Notes</h3>
              <div className="bg-zinc-100 p-6 rounded-sm text-xs font-mono text-zinc-600">
                 <p>Repository: /btec-expo/src/{activeUnit.id}</p>
                 <p className="mt-2">Last Updated: Oct 2024</p>
                 <p>Status: <span className="text-green-600">Verified</span></p>
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-24">
           {/* Dynamic Feature Sections */}
           {activeUnit.features.map((feature, i) => (
             <section key={i} className="group">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-[1px] bg-zinc-200 w-12 group-hover:w-24 transition-all" />
                   <h2 className="text-2xl font-light">{feature}</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 bg-zinc-50 p-6 border border-zinc-100 hover:border-zinc-300 transition-colors">
                  <div className="md:w-1/2 aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 bg-zinc-200">
                      <img 
                        src={`https://picsum.photos/seed/${activeUnit.id}${i}/800/600`} 
                        alt={feature}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6">
                        This artifact demonstrates the practical application of <strong>{feature}</strong> within the context of {activeUnit.title}. 
                        It highlights our ability to translate theoretical requirements into functional deliverables, ensuring industry standards are met through rigorous testing and design iteration.
                    </p>
                    <div className="mt-auto">
                        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Deliverables included</p>
                        <ul className="text-xs font-mono text-zinc-600 space-y-1">
                            <li>• Documentation.pdf</li>
                            <li>• Source_Code_v1.0.zip</li>
                            <li>• Diagram_Render.png</li>
                        </ul>
                    </div>
                  </div>
                </div>
             </section>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Units;