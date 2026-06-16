import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Resort aerial view', category: 'Property' },
  { src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Architecture detail', category: 'Property' },
  { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Presidential suite', category: 'Rooms' },
  { src: 'https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Fine dining', category: 'Dining' },
  { src: 'https://images.pexels.com/photos/3757655/pexels-photo-3757655.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Luxury spa', category: 'Wellness' },
  { src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Ocean villa', category: 'Rooms' },
  { src: 'https://images.pexels.com/photos/163192/whiskey-alcohol-party-group-163192.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Yacht excursion', category: 'Experiences' },
  { src: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Japanese cuisine', category: 'Dining' },
  { src: 'https://images.pexels.com/photos/3227130/pexels-photo-3227130.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Sky penthouse', category: 'Rooms' },
  { src: 'https://images.pexels.com/photos/3757651/pexels-photo-3757651.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Spa treatment', category: 'Wellness' },
  { src: 'https://images.pexels.com/photos/3937/helicopter-sea-summed-vehicle.jpg?auto=compress&cs=tinysrgb&w=1920', alt: 'Helicopter tour', category: 'Experiences' },
  { src: 'https://images.pexels.com/photos/1707210/pexels-photo-1707210.jpeg?auto=compress&cs=tinysrgb&w=1920', alt: 'Cultural journey', category: 'Experiences' },
];

const categories = ['All', 'Property', 'Rooms', 'Dining', 'Wellness', 'Experiences'];

export default function Gallery() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative bg-ivory py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Visual Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight">
            Captured
            <br />
            <span className="italic text-gold">Moments</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs tracking-ultra-wide-sm uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-charcoal text-ivory'
                  : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group cursor-pointer overflow-hidden ${
                  index % 5 === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-full min-h-[200px] md:min-h-[250px]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-1">
                        {image.category}
                      </p>
                      <p className="text-ivory text-sm font-serif">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-ivory p-2 hover:text-gold transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 text-ivory p-2 hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 text-ivory p-2 hover:text-gold transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
