'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import Button from './Button';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  featured?: boolean;
  index?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  type,
  area,
  bedrooms,
  bathrooms,
  image,
  featured = false,
  index = 0
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+917620773007');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${
        featured 
          ? 'lg:col-span-2 lg:row-span-2' 
          : 'col-span-1'
      }`}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Featured
            </div>
          </div>
        )}

        {/* Like Button */}
        <motion.button
          className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </motion.button>

        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className={`${
            featured ? 'h-64 md:h-80 lg:h-96' : 'h-48 md:h-56'
          } relative`}>
            {/* Real Property Image */}
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Inquire Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price and Type */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">{price}</div>
              <div className="text-sm text-gray-500">{type}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-600">{area}</div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1 text-yellow-500" />
            <span className="text-sm">{location}</span>
          </div>

          {/* Features */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Bed className="w-4 h-4 mr-1" />
                <span className="text-sm">{bedrooms} Beds</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Bath className="w-4 h-4 mr-1" />
                <span className="text-sm">{bathrooms} Baths</span>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Square className="w-4 h-4 mr-1" />
              <span className="text-sm">{area}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCallClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Branding */}
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          by LeadWebsites.in
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
