import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Private Yacht Excursions',
    description: 'Sail the pristine waters aboard our fleet of luxury vessels, complete with professional crew and gourmet dining.',
    image: 'https://images.pexels.com/photos/163192/whiskey-alcohol-party-group-163192.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Adventure',
  },
  {
    title: 'Helicopter Tours',
    description: 'Witness breathtaking aerial perspectives of hidden lagoons and untouched wilderness from our private helicopters.',
    image: 'https://images.pexels.com/photos/3937/helicopter-sea-summed-vehicle.jpg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Discovery',
  },
  {
    title: 'Fine Dining Experiences',
    description: 'Indulge in culinary masterpieces crafted by world-renowned chefs, paired with rare vintages from our sommelier.',
    image: 'https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Culinary',
  },
  {
    title: 'Wellness Retreats',
    description: 'Transformative journeys combining ancient healing traditions with modern wellness science.',
    image: 'https://images.pexels.com/photos/3757655/pexels-photo-3757655.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Wellness',
  },
  {
    title: 'Cultural Journeys',
    description: 'Connect with local heritage through exclusive access to ancient sites, artisan workshops, and private ceremonies.',
    image: 'https://images.pexels.com/photos/1707210/pexels-photo-1707210.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Culture',
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative bg-ivory py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Curated Moments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight">
            Extraordinary
            <br />
            <span className="italic text-gold">Experiences</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                {/* Image with parallax */}
                <motion.div
                  style={{ y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
                  className="absolute inset-0"
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-4 block">
                      {experience.category}
                    </span>

                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ivory mb-4 max-w-2xl">
                      {experience.title}
                    </h3>

                    <p className="text-ivory/70 text-sm md:text-base lg:text-lg max-w-xl leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gold text-xs tracking-ultra-wide-sm uppercase transition-colors hover:text-white"
                    >
                      Discover More
                      <ArrowRight className="w-4 h-4" />
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
