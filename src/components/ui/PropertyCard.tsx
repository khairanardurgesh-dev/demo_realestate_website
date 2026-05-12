'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import Button from './Button';

interface RealEstateProperty {
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
}

interface PropertyCardProps {
  property: RealEstateProperty;
  index?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  const { id, title, location, price, type, area, bedrooms, bathrooms, image, featured } = property;
  const [isLiked, setIsLiked] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * (index || 0) }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${featured ? 'ring-2 ring-yellow-500 ring-offset-2' : ''}`}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10"
        >
          Featured
        </motion.div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
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
          <div className="flex items-center text-gray-600">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{bathrooms} Bathrooms</span>
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
            onClick={() => window.open(`tel:+917620773007`)}
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

      {/* Footer */}
      <div className="px-6 pb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
          </button>
        </div>
        
        <div className="text-xs text-gray-400">
          by LeadWebsites.in
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
