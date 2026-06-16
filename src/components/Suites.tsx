import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const suites = [
  {
    name: 'Presidential Suite',
    description: 'Unparalleled opulence with panoramic ocean views and private butler service.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
    size: '450 sqm',
    price: '$12,500',
    amenities: ['Private Pool', 'Butler Service', 'Ocean View'],
  },
  {
    name: 'Ocean Villa',
    description: 'Beachfront elegance with direct access to pristine sands and personal infinity pool.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920',
    size: '380 sqm',
    price: '$8,500',
    amenities: ['Private Beach Access', 'Infinity Pool', 'Chapman Service'],
  },
  {
    name: 'Sky Penthouse',
    description: 'Cloud-level luxury embracing the horizon with exclusive rooftop sanctuary.',
    image: 'https://images.pexels.com/photos/3227130/pexels-photo-3227130.jpeg?auto=compress&cs=tinysrgb&w=1920',
    size: '520 sqm',
    price: '$15,000',
    amenities: ['Rooftop Terrace', 'Private Spa', 'Helipad Access'],
  },
  {
    name: 'Garden Residence',
    description: 'Botanical retreat blending indoor elegance with lush private gardens.',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920',
    size: '350 sqm',
    price: '$7,000',
    amenities: ['Private Garden', 'Outdoor Pavilion', 'Chef Kitchen'],
  },
];

export default function Suites() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="suites"
      ref={ref}
      className="relative bg-charcoal py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Accommodations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory leading-tight">
            Exceptional
            <br />
            <span className="italic text-gold">Living Spaces</span>
          </h2>
        </motion.div>

        {/* Suites Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0 image-zoom">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gold text-xs tracking-ultra-wide-sm uppercase">
                        {suite.size}
                      </span>
                      <span className="text-gold/40">•</span>
                      <span className="text-gold/80 text-xs tracking-ultra-wide-sm uppercase">
                        FROM {suite.price}/Night
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory mb-2">
                      {suite.name}
                    </h3>

                    <p className="text-ivory/70 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
                      {suite.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {suite.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 text-xs tracking-wide text-gold border border-gold/30 uppercase"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="group/btn flex items-center gap-2 text-gold text-xs tracking-ultra-wide-sm uppercase transition-colors hover:text-white"
                    >
                      Explore Suite
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
