import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  external = false,
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg';
  
  const variants = {
    primary: 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-black hover:bg-gray-100 shadow-md hover:shadow-lg',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    gold: 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:from-yellow-700 hover:to-yellow-600 shadow-lg hover:shadow-xl'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : ''}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      className={buttonClasses}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </MotionButton>
  );
};

export default Button;
