'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  MessageCircle,
  Users,
  Home
} from 'lucide-react';
import Button from '../ui/Button';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Solutions',
      location: 'Banjara Hills',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'LeadWebsites.in delivered exactly what they promised - a luxurious 3BHK apartment with premium finishes and excellent amenities. The entire process was smooth and transparent.',
      project: 'Skyline Heights',
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Doctor',
      location: 'Jubilee Hills',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'I\'m extremely happy with my independent villa. The quality of construction, attention to detail, and after-sales service exceeded my expectations. Highly recommended!',
      project: 'Green Valley Villas',
      date: '3 months ago'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Investment Banker',
      location: 'Gachibowli',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'The duplex penthouse is absolutely stunning! The panoramic views, modern amenities, and prime location make it the perfect home. The team was professional throughout.',
      project: 'Royal Residences',
      date: '1 month ago'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Architect',
      location: 'Madhapur',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'As an architect myself, I appreciate the attention to detail and quality of materials used. The sea view apartment is exactly what I wanted. Thank you LeadWebsites.in!',
      project: 'Sunset Boulevard',
      date: '4 months ago'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Business Owner',
      location: 'Kukatpally',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      testimonial: 'Excellent investment opportunity! The property value has already appreciated by 25% in just 6 months. The team\'s market insights are invaluable.',
      project: 'Heritage Gardens',
      date: '6 months ago'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const currentTestimonial = testimonials[activeIndex];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27ve%20read%20your%20testimonials%20and%20would%20like%20to%20know%20more%20about%20your%20properties.', '_blank');
  };

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
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200 mb-6">
            <Quote className="w-4 h-4 text-yellow-500 mr-2" />
            <span className="text-yellow-600 font-medium text-sm">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              Happy Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear directly from our satisfied clients 
            who have found their dream homes with us.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-yellow-200">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                  "{currentTestimonial.testimonial}"
                </p>
              </motion.div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-600">{currentTestimonial.role}</p>
                    <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-2 text-blue-500" />
                    {currentTestimonial.project}
                  </div>
                  <div>{currentTestimonial.date}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-yellow-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.project}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-3">
                {testimonial.testimonial}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Satisfied Family
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to write your own success story? Get in touch with us today 
            and find your dream home.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Share Your Experience
          </Button>
        </motion.div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="text-gray-400 text-sm">
            Trusted by Families by <span className="text-yellow-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
