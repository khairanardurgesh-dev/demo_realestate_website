'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Download, 
  Mail, 
  Phone, 
  User, 
  Home,
  CheckCircle,
  MessageCircle,
  FileText,
  TrendingUp
} from 'lucide-react';
import Button from '../ui/Button';

const LeadCapture: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '3bhk',
    budget: '2-3cr'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Send WhatsApp message with lead details
      const message = `Hi%2C%20I%27m%20${encodeURIComponent(formData.name)}%2C%20interested%20in%20${encodeURIComponent(formData.propertyType)}%20property%20with%20budget%20${encodeURIComponent(formData.budget)}.%20Phone%3A%20${encodeURIComponent(formData.phone)}%2C%20Email%3A%20${encodeURIComponent(formData.email)}`;
      window.open(`https://wa.me/917620773007?text=${message}`, '_blank');
    }, 1500);
  };

  const benefits = [
    {
      icon: FileText,
      title: 'Exclusive Property Guide',
      description: 'Complete catalog of luxury properties with detailed specifications'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis Report',
      description: 'Latest trends and price analysis for Hyderabad real estate'
    },
    {
      icon: Home,
      title: 'Virtual Tour Access',
      description: 'Priority access to new virtual tours before public release'
    },
    {
      icon: MessageCircle,
      title: 'Expert Consultation',
      description: 'Free 30-minute consultation with our property experts'
    }
  ];

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your information and our expert will contact you shortly. 
              Your exclusive property guide has been sent to your email.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://wa.me/917620773007', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Expert Now
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

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
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full border border-orange-200 mb-6">
            <Download className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-orange-600 font-medium text-sm">Exclusive Resources</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
              Property Investment Guide
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download our comprehensive guide and get exclusive access to premium properties 
            before they hit the market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
            
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Trust Indicators */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">10,000+</div>
                  <div className="text-sm text-gray-600">Happy Investors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">₹500Cr+</div>
                  <div className="text-sm text-gray-600">Properties Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Download Your Guide</h3>
            
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Property Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
                >
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
                >
                  <option value="1-2cr">₹1 - 2 Crore</option>
                  <option value="2-3cr">₹2 - 3 Crore</option>
                  <option value="3-5cr">₹3 - 5 Crore</option>
                  <option value="5cr+">₹5+ Crore</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                size="lg"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Get Free Guide & WhatsApp Updates
                  </>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive WhatsApp updates. 
                We respect your privacy and won't share your data.
              </p>
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
            Lead Generation System by <span className="text-orange-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
