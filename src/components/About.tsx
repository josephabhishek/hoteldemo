import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const stats = [
  { number: '50', label: 'Luxury Suites' },
  { number: '3', label: 'Signature Restaurants' },
  { number: '∞', label: 'Private Beach Access' },
  { number: '5★', label: 'Award-Winning Spa' },
];

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-ivory py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Luxury architectural detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-dark opacity-20" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border border-gold/30" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:pl-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gold text-xs tracking-ultra-wide uppercase mb-6"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-8"
            >
              A Legacy of
              <br />
              <span className="italic">Extraordinary Hospitality</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-stone text-base md:text-lg leading-relaxed-lg mb-8"
            >
              Nestled along pristine shores, Aurum embodies the pinnacle of luxury hospitality.
              Every architectural element, every curated experience, reflects our unwavering
              commitment to excellence. From hand-selected materials to bespoke services,
              we craft moments that transcend the ordinary.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-stone text-base md:text-lg leading-relaxed-lg mb-16"
            >
              Our heritage spans decades of innovation in hospitality, where traditional
              craftsmanship meets contemporary elegance. Here, privacy becomes an art form,
              and service transforms into an experience unlike any other.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-8 md:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-l border-gold/40 pl-6"
                >
                  <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-2">
                    {stat.number}
                  </p>
                  <p className="text-stone text-xs tracking-ultra-wide-sm uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
