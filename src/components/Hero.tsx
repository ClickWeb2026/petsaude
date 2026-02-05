import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../i18n/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left">

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-teal-600 font-medium text-sm mb-6 shadow-sm border border-teal-100">

              <Heart size={16} className="text-amber-400 fill-amber-400" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-teal-900 leading-tight mb-6">

              {t.hero.title}{' '}
              <span className="text-teal-500 relative inline-block">
                {t.hero.titleHighlight}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-amber-400"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">

                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none" />

                </svg>
              </span>{' '}
              {t.hero.titleEnd}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-teal-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">

              {t.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Button variant="primary" className="text-lg px-8">
                {t.hero.bookAppointment}
              </Button>
              <Button variant="outline" className="text-lg px-8 group">
                {t.hero.meetTeam}{' '}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.5
            }}
            className="relative hidden lg:block">

            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-teal-200/50 border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f3e?q=80&w=2070&auto=format&fit=crop"
                alt="Happy dog at the vet"
                className="w-full h-auto object-cover" />

            </div>

            {/* Decorative blobs */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-amber-300 rounded-full opacity-50 blur-2xl z-0" />

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-300 rounded-full opacity-50 blur-2xl z-0" />

          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <motion.svg
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white">
          </path>
        </motion.svg>
      </div>
    </section>);

}