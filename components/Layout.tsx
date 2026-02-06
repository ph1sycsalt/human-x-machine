import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './CustomCursor';
import { Menu, X } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/units', label: 'Units' },
    { path: '/about', label: 'About' },
    { path: '/theme', label: 'Theme' },
    { path: '/resources', label: 'Resources' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden selection:bg-zinc-300">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <Link to="/" className="text-xl font-thin tracking-wider pointer-events-auto uppercase">
          BTEC Expo <span className="font-bold">H×M</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm tracking-widest hover:opacity-50 transition-opacity uppercase ${location.pathname === link.path ? 'border-b border-white' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden pointer-events-auto">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-900 text-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-light tracking-widest uppercase hover:text-zinc-400"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 min-h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="uppercase tracking-widest font-bold text-sm">BTEC IT Level 3</h3>
            <p className="text-zinc-500 text-sm mt-2">Student Showcase 2024</p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-zinc-500">
             {links.map(l => <Link key={l.path} to={l.path} className="hover:text-zinc-900 transition-colors">{l.label}</Link>)}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;