import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="stay" className="relative h-screen overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-slow"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 gradient-dark-strong" />

        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-5xl"
        >
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gold text-xs md:text-sm tracking-ultra-wide uppercase mb-6"
          >
            An Exclusive Sanctuary
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6 text-shadow-lg"
          >
            Where Luxury Meets
            <br />
            <span className="italic text-gold">Timeless Serenity</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed-lg font-light"
          >
            An exclusive sanctuary designed for extraordinary journeys,
            where every moment becomes an unforgettable memory.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#booking"
              className="group flex items-center gap-3 px-8 py-4 bg-gold text-white text-xs tracking-ultra-wide-sm uppercase transition-all duration-500 hover:bg-white hover:text-charcoal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Stay
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#experiences"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white text-xs tracking-ultra-wide-sm uppercase backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore The Experience
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
