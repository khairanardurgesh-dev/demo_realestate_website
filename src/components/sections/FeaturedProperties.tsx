'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Phone } from 'lucide-react';
import Button from '../ui/Button';
import PropertyCard from '../ui/PropertyCard';

const FeaturedProperties: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const properties = [
    {
      id: '1',
      title: 'Skyline Heights - 3BHK Luxury Apartment',
      location: 'Banjara Hills, Hyderabad',
      price: '₹2.8 Cr',
      type: '3 BHK Luxury Apartment',
      area: '2,450 sq.ft.',
      bedrooms: 3,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1600607687946-4a8c2b8f5a7c?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: '2',
      title: 'Green Valley Villas - Independent House',
      location: 'Gachibowli, Hyderabad',
      price: '₹4.5 Cr',
      type: '4 BHK Villa',
      area: '3,800 sq.ft.',
      bedrooms: 4,
      bathrooms: 4,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '3',
      title: 'Royal Residences - Duplex Penthouse',
      location: 'Jubilee Hills, Hyderabad',
      price: '₹6.2 Cr',
      type: '5 BHK Duplex',
      area: '4,200 sq.ft.',
      bedrooms: 5,
      bathrooms: 5,
      image: 'https://images.unsplash.com/photo-1600585154340-e6296ab3f027?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '4',
      title: 'Sunset Boulevard - Sea View Apartments',
      location: 'Madhapur, Hyderabad',
      price: '₹3.1 Cr',
      type: '3 BHK Premium',
      area: '2,200 sq.ft.',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600566753376-12c8687c8db0?w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: '5',
      title: 'Heritage Gardens - Gated Community',
      location: 'Kukatpally, Hyderabad',
      price: '₹1.8 Cr',
      type: '2 BHK Apartment',
      area: '1,650 sq.ft.',
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      featured: false
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20projects.', '_blank');
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
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
            <MessageCircle className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-yellow-600 font-medium text-sm">Featured Properties</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              Premium Properties
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handpicked selection of luxury homes and apartments 
            in Hyderabad's most sought-after locations.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Schedule a visit or get in touch with our property experts 
              to explore these exclusive properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('tel:+917620773007')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              
              <Button
                variant="primary"
                size="lg"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
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
            Premium Properties Curated by <span className="text-yellow-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
