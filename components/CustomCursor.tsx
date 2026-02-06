import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot bg-zinc-900 w-2 h-2 fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="cursor-outline border border-zinc-900 w-8 h-8 fixed pointer-events-none z-[9998] rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? "2px" : "1px",
          backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;