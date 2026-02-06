import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Unit } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface UnitCardProps {
  unit: Unit;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full cursor-pointer perspective-1000"
    >
      <Link to={`/units/${unit.id}`} className="block h-full w-full">
        <div 
          className="absolute inset-0 bg-white border border-zinc-200 shadow-sm overflow-hidden group transition-all duration-500 hover:shadow-xl hover:border-zinc-400"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Image Background with Parallax hint */}
          <div className="absolute inset-0 overflow-hidden">
             <motion.img 
               src={unit.imageUrl} 
               alt={unit.title} 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-8 text-white transform translate-z-20 w-full">
             <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-2xl font-light mb-1">{unit.title}</h3>
                    <p className="text-zinc-300 text-sm font-light max-w-[250px]">{unit.shortDescription}</p>
                </div>
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight size={20} />
                </div>
             </div>
          </div>
          
          {/* Overlay content revealing on hover */}
          <div className="absolute inset-0 bg-zinc-900/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
             {/* Intentionally left blank for minimalist chaos style - the image change is enough */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default UnitCard;