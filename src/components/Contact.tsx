import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: '1 Sanctuary Lane, Paradise Island',
    subtitle: 'Caribbean Archipelago',
  },
  {
    icon: Phone,
    title: 'Reservations',
    content: '+1 (555) AURUM-LUX',
    subtitle: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'reservations@aurum.resort',
    subtitle: 'Concierge inquiries welcome',
  },
  {
    icon: Clock,
    title: 'Reception',
    content: '24 Hour Service',
    subtitle: 'Always at your service',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-gradient-to-b from-ivory to-beige py-24 md:py-32 lg:py-40"
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
            Connect With Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight">
            Your Journey
            <br />
            <span className="italic text-gold"> Begins Here</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-charcoal font-serif text-lg mb-1">
                        {info.title}
                      </h4>
                      <p className="text-charcoal text-sm mb-1">
                        {info.content}
                      </p>
                      <p className="text-stone text-xs">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.icon.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal text-xs tracking-ultra-wide-sm uppercase mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-transparent border border-charcoal/20 focus:border-gold outline-none text-charcoal placeholder:text-stone/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-charcoal text-xs tracking-ultra-wide-sm uppercase mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-transparent border border-charcoal/20 focus:border-gold outline-none text-charcoal placeholder:text-stone/50 transition-colors"
                    placeholder="Surname"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal text-xs tracking-ultra-wide-sm uppercase mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-transparent border border-charcoal/20 focus:border-gold outline-none text-charcoal placeholder:text-stone/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-charcoal text-xs tracking-ultra-wide-sm uppercase mb-3">
                  Inquiry Type
                </label>
                <select className="w-full px-5 py-4 bg-transparent border border-charcoal/20 focus:border-gold outline-none text-charcoal transition-colors appearance-none">
                  <option value="">Select inquiry type</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Private Events</option>
                  <option value="corporate">Corporate Retreat</option>
                  <option value="special">Special Requests</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-charcoal text-xs tracking-ultra-wide-sm uppercase mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-4 bg-transparent border border-charcoal/20 focus:border-gold outline-none text-charcoal placeholder:text-stone/50 transition-colors resize-none"
                  placeholder="Share your vision for an extraordinary experience..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-5 bg-charcoal text-ivory text-xs tracking-ultra-wide-sm uppercase transition-all duration-300 hover:bg-gold hover:text-white"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-beige">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/10" />

            {/* Decorative map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mb-4 mx-auto" />
                <p className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
                  Discover Our Location
                </p>
                <p className="text-stone text-sm mb-6">
                  1° 8' 23.5" N | 115° 32' 41.2" W
                </p>
                <button className="px-6 py-3 border border-gold text-gold text-xs tracking-ultra-wide-sm uppercase hover:bg-gold hover:text-white transition-colors">
                  Open in Google Maps
                </button>
              </div>
            </div>

            {/* Decorative grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A46A" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
