import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, ArrowRight } from 'lucide-react';

const restaurants = [
  {
    name: 'Lumière',
    cuisine: 'Modern French',
    seats: '40 guests',
    description: 'A symphony of French culinary artistry with breathtaking ocean vistas and rare vintage pairings.',
    image: 'https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1920',
    featured: true,
  },
  {
    name: 'Akira',
    cuisine: 'Contemporary Japanese',
    seats: '30 guests',
    description: 'Omakase excellence featuring sustainably-sourced seafood and artisan sake selections.',
    image: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=1920',
    featured: false,
  },
  {
    name: 'Terra',
    cuisine: 'Mediterranean',
    seats: '50 guests',
    description: 'Farm-to-table philosophy celebrating local ingredients through Mediterranean tradition.',
    image: 'https://images.pexels.com/photos/3575738/pexels-photo-3575738.jpeg?auto=compress&cs=tinysrgb&w=1920',
    featured: false,
  },
];

const specials = [
  { title: 'Seasonal Tasting Menu', subtitle: 'Seven courses of discovery' },
  { title: 'Chef\'s Table Experience', subtitle: 'Interactive culinary journey' },
  { title: 'Private Wine Cellar', subtitle: 'Rare vintages & bespoke pairings' },
];

export default function Dining() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="dining"
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
            Gastronomic Excellence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-ivory leading-tight">
            Culinary
            <br />
            <span className="italic text-gold">Masterpieces</span>
          </h2>
        </motion.div>

        {/* Featured Restaurant - Large */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={restaurants[0].image}
                alt={restaurants[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />

            <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <Star className="w-4 h-4 text-gold fill-gold" />
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-gold text-xs tracking-wide ml-2">MICHELIN RATED</span>
              </div>

              <span className="text-gold/80 text-xs tracking-ultra-wide-sm uppercase mb-3">
                {restaurants[0].cuisine} • {restaurants[0].seats}
              </span>

              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-4">
                {restaurants[0].name}
              </h3>

              <p className="text-ivory/70 text-base md:text-lg max-w-xl leading-relaxed mb-6">
                {restaurants[0].description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-gold text-xs tracking-ultra-wide-sm uppercase transition-colors hover:text-white w-fit"
              >
                Reserve a Table
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Grid of other restaurants */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {restaurants.slice(1).map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 gradient-dark" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-gold/80 text-xs tracking-ultra-wide-sm uppercase mb-2">
                    {restaurant.cuisine} • {restaurant.seats}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                    {restaurant.name}
                  </h3>

                  <p className="text-ivory/70 text-sm mb-4 max-w-md">
                    {restaurant.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gold text-xs tracking-ultra-wide-sm uppercase transition-colors hover:text-white"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-ivory/10 pt-16"
        >
          <h4 className="text-ivory font-serif text-xl md:text-2xl text-center mb-12">
            Signature Culinary Experiences
          </h4>

          <div className="grid md:grid-cols-3 gap-8">
            {specials.map((special, index) => (
              <motion.div
                key={special.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group text-center p-8 border border-ivory/10 hover:border-gold/40 transition-all duration-300"
              >
                <h5 className="font-serif text-lg md:text-xl text-ivory mb-2 group-hover:text-gold transition-colors">
                  {special.title}
                </h5>
                <p className="text-ivory/60 text-sm">
                  {special.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
