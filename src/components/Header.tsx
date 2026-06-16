import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Stay', href: '#stay' },
  { label: 'Suites', href: '#suites' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-luxury py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
              <span className={`font-serif text-lg font-semibold ${isScrolled ? 'text-white' : 'text-charcoal'}`}>A</span>
            </div>
            <span className={`font-serif text-xl md:text-2xl tracking-ultra-wide-sm ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              AURUM
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className={`text-xs tracking-ultra-wide-sm uppercase transition-colors duration-300 ${
                      isScrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reserve CTA */}
          <div className="flex items-center gap-6 z-10">
            <motion.a
              href="#booking"
              className={`hidden md:block px-6 py-3 text-xs tracking-ultra-wide-sm uppercase transition-all duration-300 ${
                isScrolled
                  ? 'bg-charcoal text-ivory hover:bg-gold hover:text-white'
                  : 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white hover:text-charcoal'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reserve Now
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-serif text-ivory/90 hover:text-gold transition-colors tracking-wide"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navItems.length }}
                  className="mt-4"
                >
                  <a
                    href="#booking"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-4 bg-gold text-white text-sm tracking-ultra-wide-sm uppercase hover:bg-gold-dark transition-colors"
                  >
                    Reserve Now
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
