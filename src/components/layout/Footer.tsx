'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Users, 
  Camera,
  Video,
  Building,
  Home,
  Award,
  Shield
} from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20projects%20and%20would%20like%20more%20information.', '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.svg" 
                alt="LeadWebsites.in Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">LeadWebsites.in</h3>
                <p className="text-sm text-gray-400">Premium Real Estate</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building dreams since 2009. We deliver luxury residential and commercial 
              properties with unmatched quality and customer satisfaction.
            </p>
            
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Video className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Home className="w-4 h-4 text-yellow-500" />
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Residential Properties
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-yellow-500" />
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Commercial Spaces
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Investment Advisory
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-yellow-500" />
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Property Management
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-yellow-500" />
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Virtual Tours
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a href="https://wa.me/917620773007" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    +91 76207 73007
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+917620773007" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    +91 76207 73007
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@leadwebsites.in" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    info@leadwebsites.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-gray-300">
                    Banjara Hills, Hyderabad<br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Button
                variant="gold"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Quick WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} LeadWebsites.in. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Building dreams, delivering excellence since 2009
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                RERA Compliance
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Sitemap
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="border-t border-gray-800 bg-gray-900/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>RERA Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Home className="w-4 h-4 text-yellow-500" />
              <span>150+ Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-purple-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
