import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight, Heart } from 'lucide-react';

const footerLinks = {
  stay: ['Rooms & Suites', 'Private Villas', 'Luxury Penthouses', 'Exclusive Offers'],
  experiences: ['Private Excursions', 'Wellness Programs', 'Culinary Journeys', 'Cultural Tours'],
  about: ['Our Story', 'Sustainability', 'Careers', 'Press Room'],
  legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Accessibility'],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };
  return (
    <footer className="relative bg-charcoal pt-20 md:pt-32 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 pb-20 md:pb-32 border-b border-ivory/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gold text-xs tracking-ultra-wide uppercase mb-6">
            Exclusive Updates
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
            Join Our <span className="italic">Privileged Circle</span>
          </h3>
          <p className="text-ivory/60 text-sm mb-8">
            Receive exclusive offers, curated experiences, and insights from our world.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border border-ivory/20 focus:border-gold outline-none text-ivory placeholder:text-ivory/40 transition-colors"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-8 py-4 bg-gold text-white text-xs tracking-ultra-wide-sm uppercase transition-all duration-300 hover:bg-gold-dark flex items-center justify-center gap-2"
            >
              {isSubscribed ? (
                <>
                  Subscribed
                  <Heart className="w-4 h-4" />
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-white">A</span>
                </div>
                <span className="font-serif text-xl text-ivory tracking-ultra-wide-sm">
                  AURUM
                </span>
              </div>
              <p className="text-ivory/50 text-sm leading-relaxed mb-6">
                Where luxury meets timeless serenity. An exclusive sanctuary designed for the extraordinary.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-6">Stay</h4>
            <ul className="space-y-3">
              {footerLinks.stay.map((link) => (
                <li key={link}>
                  <a href="#" className="text-ivory/60 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-6">Experiences</h4>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link}>
                  <a href="#" className="text-ivory/60 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a href="#" className="text-ivory/60 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-ultra-wide-sm uppercase mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-ivory/60 text-sm hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 pt-8 border-t border-ivory/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-ivory/40 text-xs">
          <p>2026 Aurum Resort. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-gold fill-gold" /> for extraordinary journeys
          </p>
        </div>
      </div>
    </footer>
  );
}
