'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Waves, 
  Car, 
  Dumbbell, 
  Shield, 
  Trees, 
  Wifi,
  Camera,
  Utensils,
  Sparkles,
  Users,
  Wind,
  Droplets
} from 'lucide-react';

const Amenities: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const amenities = [
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Rooftop infinity pool with panoramic city views and temperature control',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Car,
      title: 'Smart Parking',
      description: 'Automated multi-level parking with EV charging stations',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Dumbbell,
      title: 'Modern Gym',
      description: 'State-of-the-art fitness center with personal trainers',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Advanced biometric security with CCTV surveillance',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Trees,
      title: 'Landscaped Gardens',
      description: 'Lush green spaces with meditation zones and walking trails',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Fiber optic connectivity throughout the premises',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Camera,
      title: 'Smart Home',
      description: 'Integrated IoT systems for automated living',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Utensils,
      title: 'Clubhouse',
      description: 'Exclusive clubhouse with restaurant and banquet facilities',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Sparkles,
      title: 'Spa & Wellness',
      description: 'Luxury spa with steam rooms and massage therapy',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Users,
      title: 'Community Hall',
      description: 'Multipurpose hall for events and social gatherings',
      color: 'from-teal-400 to-teal-600'
    },
    {
      icon: Wind,
      title: 'Central AC',
      description: 'Centralized air conditioning with climate control',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Droplets,
      title: 'Water Treatment',
      description: 'Advanced water purification and recycling systems',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="amenities" ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-yellow-600 font-medium text-sm">Premium Amenities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unmatched Luxury
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              At Your Fingertips
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience a lifestyle beyond compare with our world-class amenities designed to 
            elevate your everyday living to extraordinary heights.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${amenity.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience Luxury Living?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule a site visit today and witness firsthand the exceptional amenities 
                and lifestyle that await you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/917620773007?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20site%20visit.', '_blank')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule Site Visit
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-yellow-600 transition-all duration-300"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="text-gray-400 text-sm">
            Premium Amenities Designed by <span className="text-yellow-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
