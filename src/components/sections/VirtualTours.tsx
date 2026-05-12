'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Volume2, 
  VolumeX,
  MessageCircle,
  Home,
  Camera,
  Eye
} from 'lucide-react';
import Button from '../ui/Button';

const VirtualTours: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedTour, setSelectedTour] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const virtualTours = [
    {
      id: 1,
      title: 'Skyline Heights - 3BHK Luxury Apartment',
      type: '360° Virtual Tour',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop',
      videoUrl: '#',
      features: ['Living Room', 'Master Bedroom', 'Kitchen', 'Balcony', 'Bathroom'],
      views: '2.3k',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Green Valley Villas - Independent House',
      type: 'Video Walkthrough',
      duration: '8:45',
      thumbnail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=450&fit=crop',
      videoUrl: '#',
      features: ['Garden', 'Living Room', 'Kitchen', 'Bedrooms', 'Terrace'],
      views: '1.8k',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Sunset Boulevard - Sea View Apartments',
      type: '360° Virtual Tour',
      duration: '7:20',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-e6296ab3f027?w=800&h=450&fit=crop',
      videoUrl: '#',
      features: ['Sea View', 'Living Room', 'Master Bedroom', 'Kitchen', 'Balcony'],
      views: '4.2k',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Royal Residences - Duplex Penthouse',
      type: '360° Virtual Tour',
      duration: '6:15',
      thumbnail: 'https://images.unsplash.com/photo-1600607687946-4a8c2b8f5a7c?w=800&h=450&fit=crop',
      videoUrl: '#',
      features: ['Rooftop Terrace', 'Living Area', 'Master Suite', 'Kitchen', 'Study'],
      views: '3.1k',
      rating: 4.7
    }
  ];

  const handleTourSelect = (index: number) => {
    setSelectedTour(index);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleWhatsAppClick = () => {
    const tourTitle = virtualTours[selectedTour].title;
    window.open(`https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(tourTitle)}%20and%20would%20like%20to%20schedule%20a%20physical%20tour.`, '_blank');
  };

  const currentTour = virtualTours[selectedTour];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200 mb-6">
            <Camera className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-purple-600 font-medium text-sm">Virtual Tours</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Properties
            <span className="block bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mt-2">
              From Anywhere
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take immersive 360° virtual tours and video walkthroughs of our luxury properties 
            from the comfort of your home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail/Player */}
              <div className="relative aspect-video">
                <img 
                  src={currentTour.thumbnail}
                  alt={currentTour.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayPause}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-gray-900" />
                      ) : (
                        <Play className="w-8 h-8 text-gray-900 ml-1" />
                      )}
                    </motion.button>
                  </div>

                  {/* Top Controls */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <span className="text-white text-sm font-medium">
                        {currentTour.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {currentTour.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span>{currentTour.duration}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {currentTour.views} views
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        {currentTour.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Tabs */}
              <div className="bg-white p-4 border-t">
                <div className="flex flex-wrap gap-2">
                  {currentTour.features.map((feature, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors"
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tour List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Available Tours</h3>
            
            {virtualTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => handleTourSelect(index)}
                className={`bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedTour === index ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="flex space-x-4 p-4">
                  <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {tour.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                      <span>{tour.type}</span>
                      <span>•</span>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm mt-1">
                      <div className="flex items-center text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        {tour.views}
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-gray-600">{tour.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-2">Ready for a Physical Tour?</h4>
              <p className="text-white/90 text-sm mb-4">
                Schedule an in-person visit and experience these luxury properties firsthand.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Schedule Visit
              </Button>
            </div>

            {/* Benefits */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Tour Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Save time with virtual pre-screening
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Explore properties from anywhere
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Get detailed room measurements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Share with family for decision making
                </li>
              </ul>
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
            Virtual Tours by <span className="text-purple-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTours;
