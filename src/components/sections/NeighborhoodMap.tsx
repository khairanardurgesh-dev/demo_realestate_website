'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  School, 
  ShoppingBag, 
  Stethoscope, 
  Train, 
  Coffee,
  Dumbbell,
  TreePine,
  MessageCircle,
  Navigation,
  Home
} from 'lucide-react';
import Button from '../ui/Button';

const NeighborhoodMap: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Amenities', icon: MapPin, color: 'from-gray-500 to-gray-600' },
    { id: 'education', name: 'Education', icon: School, color: 'from-blue-500 to-blue-600' },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag, color: 'from-purple-500 to-purple-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'from-red-500 to-red-600' },
    { id: 'transport', name: 'Transport', icon: Train, color: 'from-green-500 to-green-600' },
    { id: 'lifestyle', name: 'Lifestyle', icon: Coffee, color: 'from-orange-500 to-orange-600' }
  ];

  const amenities = [
    {
      id: 1,
      name: 'International School',
      category: 'education',
      distance: '0.5 km',
      rating: 4.8,
      description: 'IB curriculum with world-class facilities',
      icon: School
    },
    {
      id: 2,
      name: 'Phoenix Mall',
      category: 'shopping',
      distance: '1.2 km',
      rating: 4.6,
      description: 'Premium shopping and entertainment complex',
      icon: ShoppingBag
    },
    {
      id: 3,
      name: 'Apollo Hospital',
      category: 'healthcare',
      distance: '2.0 km',
      rating: 4.9,
      description: 'Multi-specialty hospital with emergency care',
      icon: Stethoscope
    },
    {
      id: 4,
      name: 'Metro Station',
      category: 'transport',
      distance: '0.8 km',
      rating: 4.5,
      description: 'Direct connectivity to city center',
      icon: Train
    },
    {
      id: 5,
      name: 'Starbucks Reserve',
      category: 'lifestyle',
      distance: '0.3 km',
      rating: 4.7,
      description: 'Premium coffee and workspace',
      icon: Coffee
    },
    {
      id: 6,
      name: 'Elite Fitness Club',
      category: 'lifestyle',
      distance: '0.6 km',
      rating: 4.8,
      description: '24/7 gym with personal training',
      icon: Dumbbell
    },
    {
      id: 7,
      name: 'Central Park',
      category: 'lifestyle',
      distance: '1.0 km',
      rating: 4.9,
      description: 'Green space with jogging tracks',
      icon: TreePine
    },
    {
      id: 8,
      name: 'Tech University',
      category: 'education',
      distance: '3.5 km',
      rating: 4.7,
      description: 'Leading engineering and business school',
      icon: School
    }
  ];

  const filteredAmenities = selectedCategory === 'all' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === selectedCategory);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20the%20neighborhood%20amenities%20around%20your%20properties.', '_blank');
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
            <Navigation className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-600 font-medium text-sm">Prime Location</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mt-2">
              Within Reach
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of urban convenience and serene living with 
            premium amenities just steps away from your luxury home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 lg:h-full min-h-[400px] relative overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20viewBox%3D%220%200%20800%20600%22%3E%3Crect%20fill%3D%22%23f3f4f6%22%20width%3D%22800%22%20height%3D%22600%22%2F%3E%3Cpath%20fill%3D%22%23d1d5db%22%20d%3D%22M0%2C300%20L200%2C200%20L400%2C300%20L600%2C200%20L800%2C300%20L800%2C600%20L0%2C600%20Z%22%2F%3E%3Ccircle%20fill%3D%22%2310b981%22%20cx%3D%22400%22%20cy%3D%22250%22%20r%3D%2220%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22255%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%20font-size%3D%2212%22%3EYou%3C%2Ftext%3E%3C%2Fsvg%3E')] bg-cover bg-center opacity-50"></div>
              
              {/* Location Pins */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <School className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Train className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Coffee className="w-4 h-4 text-white" />
              </div>

              {/* Center Location */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div className="text-center mt-2 bg-white px-2 py-1 rounded-lg shadow-md">
                  <span className="text-xs font-semibold">Your Home</span>
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
              <div className="text-sm font-medium text-gray-700 mb-2">Legend</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Education</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Shopping</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Transport</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Amenities List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Amenities List */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {filteredAmenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <motion.div
                    key={amenity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${
                          amenity.category === 'education' ? 'from-blue-500 to-blue-600' :
                          amenity.category === 'shopping' ? 'from-purple-500 to-purple-600' :
                          amenity.category === 'healthcare' ? 'from-red-500 to-red-600' :
                          amenity.category === 'transport' ? 'from-green-500 to-green-600' :
                          'from-orange-500 to-orange-600'
                        } rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{amenity.description}</p>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {amenity.distance}
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="text-sm text-gray-600 ml-1">{amenity.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Explore the Neighborhood</h3>
              <p className="text-white/90 mb-4">
                Schedule a site visit and experience the convenience of this prime location firsthand.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Neighborhood Tour
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="text-gray-400 text-sm">
            Interactive Maps by <span className="text-green-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeighborhoodMap;
