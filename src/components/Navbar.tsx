import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center pr-4 group">
          <div className="flex flex-col items-center justify-center mr-4 border-r border-slate-200 pr-4">
            <div className="flex items-baseline -mb-1">
              <span className="text-4xl font-heading font-medium text-enora-gold" style={{letterSpacing: '-0.08em'}}>M</span>
              <span className="text-4xl font-heading font-medium text-enora-blue" style={{letterSpacing: '-0.08em', marginLeft: '-0.1em'}}>A</span>
            </div>
            <span className="text-[9px] font-heading font-semibold text-enora-blue tracking-[0.2em] uppercase border-t border-enora-blue/80 pt-[2px] mt-1 w-full text-center">
              Mathe Advisory
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-2xl font-heading font-extrabold text-enora-blue leading-none tracking-widest">
              ENORA
            </span>
            <span className="text-[10px] font-medium text-slate-500 tracking-wide mt-1">La solution pour vos sinistres</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-enora-green' : 'text-slate-600 hover:text-enora-blue'}`}>Accueil</Link>
          <Link to="/expertise" className={`text-sm font-medium transition-colors ${isActive('/expertise') ? 'text-enora-green' : 'text-slate-600 hover:text-enora-blue'}`}>Notre Expertise</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-enora-green' : 'text-slate-600 hover:text-enora-blue'}`}>Contact</Link>
        </nav>

        <div className="hidden md:flex">
          <Link to="/contact" className="bg-enora-green hover:bg-enora-green-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
            Demander un Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-100"
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              <Link to="/" onClick={closeMenu} className={`font-medium ${isActive('/') ? 'text-enora-green' : 'text-slate-600'}`}>Accueil</Link>
              <Link to="/expertise" onClick={closeMenu} className={`font-medium ${isActive('/expertise') ? 'text-enora-green' : 'text-slate-600'}`}>Notre Expertise</Link>
              <Link to="/contact" onClick={closeMenu} className={`font-medium ${isActive('/contact') ? 'text-enora-green' : 'text-slate-600'}`}>Contact</Link>
              <Link to="/contact" onClick={closeMenu} className="text-enora-green font-semibold">Demander un Audit</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
