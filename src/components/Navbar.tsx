import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-teal-500 p-2 rounded-xl text-white">
              <PawPrint size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-teal-900 tracking-tight">
              Pawsitive<span className="text-teal-500">Care</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Our Team', 'New Patients', 'Resources'].map(
              (item) =>
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-teal-700 hover:text-teal-500 font-medium transition-colors">

                  {item}
                </a>

            )}
            <Button variant="primary" className="px-5 py-2 text-sm">
              Book Visit
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>);

}