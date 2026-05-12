'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Trophy, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  TrendingUp,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import Button from '../ui/Button';

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counters, setCounters] = useState({
    projects: 0,
    families: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    if (inView) {
      const targetValues = {
        projects: 150,
        families: 2000,
        years: 15,
        satisfaction: 98
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const incrementCounters = () => {
        let currentStep = 0;
        
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setCounters({
            projects: Math.floor(targetValues.projects * progress),
            families: Math.floor(targetValues.families * progress),
            years: Math.floor(targetValues.years * progress),
            satisfaction: Math.floor(targetValues.satisfaction * progress)
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setCounters(targetValues);
          }
        }, stepDuration);
      };

      incrementCounters();
    }
  }, [inView]);

  const stats = [
    {
      icon: Trophy,
      value: counters.projects,
      label: 'Projects Delivered',
      suffix: '+',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: counters.families,
      label: 'Happy Families',
      suffix: '+',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Years of Excellence',
      suffix: '+',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: counters.satisfaction,
      label: 'Customer Satisfaction',
      suffix: '%',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'RERA Approved Projects',
      description: 'All our projects are fully compliant with RERA regulations, ensuring complete transparency and legal protection for our clients.',
      highlight: '100% Compliant'
    },
    {
      icon: TrendingUp,
      title: 'Appreciation Guarantee',
      description: 'Our properties consistently show 20-30% annual appreciation, making them excellent investment opportunities.',
      highlight: 'High ROI'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'ISO certified construction processes with premium materials and 3-year warranty on all structural elements.',
      highlight: 'Premium Quality'
    },
    {
      icon: MessageCircle,
      title: '24/7 Customer Support',
      description: 'Dedicated relationship managers and round-the-clock support for all your queries and service requests.',
      highlight: 'Always Available'
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917620773007?text=Hi%2C%20I%27m%20interested%20in%20knowing%20more%20about%20why%20I%20should%20choose%20LeadWebsites.in%20for%20my%20real%20estate%20needs.', '_blank');
  };

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Trophy className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-blue-600 font-medium text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The LeadWebsites.in
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Advantage
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of families trust us to build their dream homes with 
            unmatched quality, transparency, and customer satisfaction.
          </p>
        </motion.div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium text-sm">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted & Certified
            </h3>
            <p className="text-gray-600">
              We're proud to be associated with leading industry organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'RERA Certified', status: 'Verified' },
              { name: 'ISO 9001:2015', status: 'Certified' },
              { name: 'IGBC Platinum', status: 'Rated' },
              { name: 'Bank Approved', status: 'Partner' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900">{badge.name}</div>
                <div className="text-sm text-blue-600">{badge.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied families who have found their dream homes with us. 
              Schedule a consultation today and take the first step towards luxury living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Projects
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="text-gray-400 text-sm">
            Excellence in Real Estate by <span className="text-blue-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
