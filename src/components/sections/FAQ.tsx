'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MessageCircle,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import Button from '../ui/Button';

const FAQ: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the typical timeline for project completion?',
      answer: 'Our projects typically take 24-36 months for completion, depending on the size and complexity. We provide regular updates and adhere to strict timelines with buffer periods for unforeseen delays.',
      category: 'General',
      icon: Clock
    },
    {
      question: 'Are your projects RERA registered?',
      answer: 'Yes, all our projects are fully RERA registered and compliant. We provide complete transparency with all legal documents, project details, and progress updates available on the RERA portal.',
      category: 'Legal',
      icon: HelpCircle
    },
    {
      question: 'What financing options are available?',
      answer: 'We have partnerships with leading banks and financial institutions offering home loans at competitive rates. Our team assists with the entire loan application process and documentation.',
      category: 'Finance',
      icon: HelpCircle
    },
    {
      question: 'Do you offer customizations in the apartments?',
      answer: 'Yes, we offer limited customization options for pre-launch bookings. This includes flooring choices, kitchen layouts, and wall colors. Customizations are subject to technical feasibility and approval.',
      category: 'Customization',
      icon: HelpCircle
    },
    {
      question: 'What is the maintenance charge after possession?',
      answer: 'Maintenance charges vary by project and typically range from ₹8-15 per sq.ft. per month. This includes security, housekeeping, landscaping, and common area maintenance.',
      category: 'Costs',
      icon: HelpCircle
    },
    {
      question: 'Is parking included with the apartments?',
      answer: 'Yes, each apartment comes with designated parking spaces. The number of parking slots depends on the apartment size - 2BHK gets 1 slot, 3BHK gets 2 slots, and larger units get additional slots.',
      category: 'Amenities',
      icon: HelpCircle
    },
    {
      question: 'What amenities are included in your projects?',
      answer: 'Our projects include swimming pools, gyms, clubhouses, children\'s play areas, landscaped gardens, 24/7 security, power backup, and rainwater harvesting systems.',
      category: 'Amenities',
      icon: HelpCircle
    },
    {
      question: 'How can I schedule a site visit?',
      answer: 'You can schedule a site visit by calling us at +91 76207 73007, messaging on WhatsApp, or filling the contact form on our website. Our team will coordinate the visit at your convenience.',
      category: 'Visit',
      icon: HelpCircle
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = ['General', 'Legal', 'Finance', 'Customization', 'Costs', 'Amenities', 'Visit'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20projects%20and%20would%20like%20to%20speak%20with%20an%20expert.', '_blank');
  };

  return (
    <section ref={ref} id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200 mb-6">
            <HelpCircle className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-purple-600 font-medium text-sm">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions?
            <span className="block bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mt-2">
              We Have Answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our projects, processes, and services. 
            Can't find what you're looking for? We're here to help!
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-xs text-purple-600 font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed pl-13">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you with any queries you might have. 
            Reach out to us through any of the following channels.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MessageCircle className="w-8 h-8 text-white mb-3 mx-auto" />
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-white/80 text-sm mb-3">
                Get instant responses on WhatsApp
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                Chat Now
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-white/80 text-sm mb-3">
                Speak with our property experts
              </p>
              <a
                href="tel:+917620773007"
                className="block w-full text-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                +91 76207 73007
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="w-8 h-8 text-white mb-3 mx-auto" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-white/80 text-sm mb-3">
                Send us your detailed queries
              </p>
              <a
                href="mailto:info@leadwebsites.in"
                className="block w-full text-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="text-sm text-white/80">
            <Clock className="w-4 h-4 inline mr-2" />
            Available 24/7 for emergency queries | Mon-Sat: 9AM-8PM for general inquiries
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
            Customer Support by <span className="text-purple-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
