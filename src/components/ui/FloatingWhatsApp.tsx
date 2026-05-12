'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20projects.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+917620773007');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="mb-4 space-y-3"
        >
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleCallClick}
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium">Call Now</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium">Chat on WhatsApp</span>
          </motion.button>
        </motion.div>
      )}

      {/* Main WhatsApp Button */}
      <motion.div className="relative">
        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 text-white" />
              {/* Notification Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
              />
            </>
          )}
        </motion.button>

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
          >
            Chat with us!
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-900 -ml-2"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Branding */}
      <div className="text-center mt-2">
        <span className="text-xs text-gray-400">by LeadWebsites.in</span>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
