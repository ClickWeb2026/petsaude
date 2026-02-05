import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary:
    'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 shadow-lg shadow-teal-500/20',
    secondary:
    'bg-amber-400 text-teal-900 hover:bg-amber-500 focus:ring-amber-400',
    outline:
    'border-2 border-teal-500 text-teal-600 hover:bg-teal-50 focus:ring-teal-500'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {children}
    </motion.button>);

}