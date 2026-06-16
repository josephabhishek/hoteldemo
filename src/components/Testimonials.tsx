import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "An experience that transcends the definition of luxury. Every moment was curated with such precision and elegance that we've yet to find its equal anywhere in the world.",
    author: "Victoria Chen-Hansen",
    role: "CEO, Nordic Ventures",
    rating: 5,
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "Aurum redefined our understanding of hospitality. The attention to detail, the privacy, and the bespoke experiences created memories that will last a lifetime.",
    author: "James Montgomery III",
    role: "Private Investor",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote: "From the moment we arrived, we felt transported to another realm. This is not a hotel—it's a sanctuary that understands the true meaning of luxury.",
    author: "Amara Okonkwo",
    role: "Architect & Designer",
    rating: 5,
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-beige py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Guest Experiences
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
            Voices of
            <br />
            <span className="italic text-gold">Distinction</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-gold/20 mx-auto mb-8" />

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed mb-10 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 ring-2 ring-gold/30">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">&#9733;</span>
                  ))}
                </div>

                <p className="text-charcoal font-serif text-lg mb-1">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-stone text-sm tracking-wide">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-stone/30 hover:bg-stone/50 rounded-full'
                } ${index === activeIndex ? '' : 'rounded-full'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
