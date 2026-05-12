'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Building,
  Users
} from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Send WhatsApp message with contact details
      const message = `Hi%2C%20I%27m%20${encodeURIComponent(formData.name)}%2C%20interested%20in%20your%20properties.%20Subject%3A%20${encodeURIComponent(formData.subject)}%2C%20Phone%3A%20${encodeURIComponent(formData.phone)}%2C%20Email%3A%20${encodeURIComponent(formData.email)}%2C%20Message%3A%20${encodeURIComponent(formData.message)}`;
      window.open(`https://wa.me/917620773007?text=${message}`, '_blank');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 76207 73007',
      description: 'Instant responses available',
      action: 'Chat Now',
      href: 'https://wa.me/917620773007'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 76207 73007',
      description: 'Mon-Sat: 9AM-8PM',
      action: 'Call Now',
      href: 'tel:+917620773007'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@leadwebsites.in',
      description: 'We respond within 24 hours',
      action: 'Send Email',
      href: 'mailto:info@leadwebsites.in'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Hyderabad, India',
      description: 'Visit our showroom',
      action: 'Get Directions',
      href: '#'
    }
  ];

  const officeLocations = [
    {
      name: 'Head Office',
      address: 'Banjara Hills, Hyderabad',
      phone: '+91 76207 73007',
      email: 'hyderabad@leadwebsites.in',
      timing: 'Mon-Sat: 9AM-8PM'
    },
    {
      name: 'Sales Office',
      address: 'Gachibowli, Hyderabad',
      phone: '+91 76207 73007',
      email: 'sales@leadwebsites.in',
      timing: 'Mon-Sat: 10AM-7PM'
    }
  ];

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Thank You for Contacting Us!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and our team will get back to you within 24 hours. 
              For immediate assistance, feel free to call or WhatsApp us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('https://wa.me/917620773007', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
            <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-green-600 font-medium text-sm">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Your
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mt-2">
              Dream Home Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our properties? Want to schedule a visit? 
            Our team is here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Schedule Visit</option>
                      <option value="financing">Financing Information</option>
                      <option value="customization">Customization Options</option>
                      <option value="investment">Investment Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message via WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We'll send your message directly to our WhatsApp for instant response
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-600 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                        <a
                          href={info.href}
                          className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors"
                        >
                          {info.action} →
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-gray-900">Office Hours</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">By Appointment</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Emergency:</strong> Available 24/7 on WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Office Locations</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{office.name}</h4>
                    <div className="space-y-1 text-gray-600">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {office.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {office.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {office.email}
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        {office.timing}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="text-gray-400 text-sm">
            Premium Customer Service by <span className="text-green-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
