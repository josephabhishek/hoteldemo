import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Sparkles } from 'lucide-react';

const treatments = [
  { name: 'Signature Aurum Massage', duration: '90 min', description: 'A bespoke journey combining ancient techniques with modern therapeutic science.' },
  { name: 'Crystal Healing Ritual', duration: '120 min', description: 'Energy balancing using precious stones and healing essential oils.' },
  { name: 'Ocean Wave Therapy', duration: '75 min', description: 'Hydrotherapy experience inspired by the rhythms of the sea.' },
  { name: 'Meditative Silence', duration: '60 min', description: 'Guided mindfulness in our private meditation pavilion.' },
];

export default function Wellness() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="wellness"
      ref={ref}
      className="relative bg-gradient-to-b from-ivory to-beige py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2">
        <div className="absolute inset-0 bg-gold/5 rounded-bl-[200px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3757655/pexels-photo-3757655.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Wellness spa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ivory/10" />
              </div>

              {/* Secondary Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 md:-right-16 w-1/2 aspect-square overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/3757651/pexels-photo-3757651.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Spa treatment"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-gold p-4 shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
              Wellness & Spa
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-8">
              Sanctuary of
              <br />
              <span className="italic text-gold">Inner Peace</span>
            </h2>

            <p className="text-stone text-base md:text-lg leading-relaxed-lg mb-8">
              Our award-winning spa transcends traditional wellness, offering
              transformative journeys that harmonize body, mind, and spirit.
              Experience world-class treatments surrounded by serene natural beauty.
            </p>

            <p className="text-stone text-base md:text-lg leading-relaxed-lg mb-12">
              Each treatment is carefully curated by our master therapists,
              blending ancient healing traditions with innovative wellness science.
            </p>

            {/* Treatments List */}
            <div className="space-y-4 mb-12">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="group flex items-start gap-6 p-4 border-b border-stone/20 hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors">
                        {treatment.name}
                      </h4>
                      <span className="text-xs text-stone tracking-wide">
                        {treatment.duration}
                      </span>
                    </div>
                    <p className="text-stone/70 text-sm">
                      {treatment.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-gold mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-charcoal text-ivory text-xs tracking-ultra-wide-sm uppercase transition-all duration-300 hover:bg-gold hover:text-white"
            >
              Book Wellness Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
