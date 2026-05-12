'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calculator, Home, DollarSign, Percent, Calendar, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const MortgageCalculator: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    propertyPrice: '5000000',
    downPayment: '1000000',
    interestRate: '8.5',
    loanTerm: '20'
  });

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0
  });

  const calculateMortgage = () => {
    const principal = parseFloat(formData.propertyPrice) - parseFloat(formData.downPayment);
    const monthlyRate = parseFloat(formData.interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(formData.loanTerm) * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const monthlyPayment = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      setResults({
        monthlyPayment: Math.round(monthlyPayment),
        totalPayment: Math.round(totalPayment),
        totalInterest: Math.round(totalInterest)
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const message = `Hi%2C%20I%27m%20interested%20in%20a%20property%20worth%20%E2%82%B9${formData.propertyPrice}%20and%20would%20like%20to%20discuss%20financing%20options.`;
    window.open(`https://wa.me/917620773007?text=${message}`, '_blank');
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Calculator className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-blue-600 font-medium text-sm">Financial Planning</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Dream Home EMI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get instant estimates for your monthly payments and plan your luxury home purchase 
            with our advanced mortgage calculator.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Home className="w-6 h-6 text-blue-500 mr-3" />
              Property Details
            </h3>

            <div className="space-y-6">
              {/* Property Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Price (₹)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={formData.propertyPrice}
                    onChange={(e) => handleInputChange('propertyPrice', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="5000000"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment (₹)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    value={formData.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1000000"
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    step="0.1"
                    value={formData.interestRate}
                    onChange={(e) => handleInputChange('interestRate', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="8.5"
                  />
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (Years)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={formData.loanTerm}
                    onChange={(e) => handleInputChange('loanTerm', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="10">10 Years</option>
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="25">25 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>
              </div>

              {/* Calculate Button */}
              <Button
                variant="primary"
                size="lg"
                onClick={calculateMortgage}
                className="w-full"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate EMI
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Results Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Monthly Payment</h3>
              
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Monthly EMI</div>
                  <div className="text-3xl font-bold">
                    ₹{results.monthlyPayment.toLocaleString('en-IN')}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Total Amount</div>
                    <div className="text-xl font-semibold">
                      ₹{results.totalPayment.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Total Interest</div>
                    <div className="text-xl font-semibold">
                      ₹{results.totalInterest.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Capture */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Want Better Rates?
              </h4>
              <p className="text-gray-600 mb-4">
                Our financing partners offer exclusive rates for luxury properties. 
                Get a personalized consultation to explore your options.
              </p>
              <Button
                variant="gold"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuss Financing Options
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">4.5%</div>
                <div className="text-sm text-gray-600">Lowest Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">24hr</div>
                <div className="text-sm text-gray-600">Approval</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
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
            Premium Financial Tools by <span className="text-blue-500 font-semibold">LeadWebsites.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
