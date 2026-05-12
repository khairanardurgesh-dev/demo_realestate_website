'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play, MapPin, Phone } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20projects.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
        <motion.div
          style={{ y }}
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
            {/* Simple background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-30 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Pre-heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-white/90 text-sm font-medium">Premium Locations • Exclusive Living</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Luxury Living</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Redefined
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the pinnacle of sophistication with our exclusive collection of luxury residences, 
            where architectural excellence meets unparalleled comfort in the most coveted locations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="gold"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">50+</div>
              <div className="text-white/70 text-sm">Luxury Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">2000+</div>
              <div className="text-white/70 text-sm">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">15+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 right-4 z-30"
      >
        <div className="text-white/50 text-xs">
          by <span className="text-yellow-500 font-semibold">LeadWebsites.in</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
