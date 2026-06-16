import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Hidden Destinations: The World\'s Last Paradises',
    excerpt: 'Discover remote sanctuaries where luxury meets unspoiled nature, from private islands to mountain retreats.',
    image: 'https://images.pexels.com/photos/1707210/pexels-photo-1707210.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Travel',
    date: 'June 2026',
    readTime: '8 min read',
  },
  {
    title: 'The Art of Wellness: Ancient Traditions, Modern Science',
    excerpt: 'How we combine millennia of healing wisdom with cutting-edge wellness innovation.',
    image: 'https://images.pexels.com/photos/3757655/pexels-photo-3757655.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Wellness',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    title: 'Culinary Alchemy: Behind Our Signature Dishes',
    excerpt: 'Executive Chef Marie Laurent reveals the philosophy and craft behind our award-winning cuisine.',
    image: 'https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1920',
    category: 'Cuisine',
    date: 'May 2026',
    readTime: '10 min read',
  },
];

export default function Journal() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="journal"
      ref={ref}
      className="relative bg-ivory py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
              Stories & Insights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              The
              <br />
              <span className="italic text-gold">Journal</span>
            </h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-charcoal text-xs tracking-ultra-wide-sm uppercase mt-6 md:mt-0 hover:text-gold transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute inset-0 image-zoom">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-ivory/90 text-charcoal text-xs tracking-wide uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-stone text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-stone text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-gold text-xs tracking-ultra-wide-sm uppercase pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
