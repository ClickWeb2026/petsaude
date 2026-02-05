import { motion } from 'framer-motion';
import {
  Stethoscope,
  Scissors,
  HeartPulse,
  Syringe,
  Dog,
  Calendar } from
'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

const serviceIcons = {
  'wellnessExams': Stethoscope,
  'vaccinations': Syringe,
  'grooming': Scissors,
  'surgery': HeartPulse,
  'puppyTraining': Dog,
  'seniorCare': Calendar,
};

const serviceColors = {
  'wellnessExams': 'bg-blue-100 text-blue-600',
  'vaccinations': 'bg-rose-100 text-rose-600',
  'grooming': 'bg-purple-100 text-purple-600',
  'surgery': 'bg-amber-100 text-amber-600',
  'puppyTraining': 'bg-teal-100 text-teal-600',
  'seniorCare': 'bg-indigo-100 text-indigo-600',
};

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    { key: 'wellnessExams', icon: serviceIcons.wellnessExams, color: serviceColors.wellnessExams },
    { key: 'vaccinations', icon: serviceIcons.vaccinations, color: serviceColors.vaccinations },
    { key: 'grooming', icon: serviceIcons.grooming, color: serviceColors.grooming },
    { key: 'surgery', icon: serviceIcons.surgery, color: serviceColors.surgery },
    { key: 'puppyTraining', icon: serviceIcons.puppyTraining, color: serviceColors.puppyTraining },
    { key: 'seniorCare', icon: serviceIcons.seniorCare, color: serviceColors.seniorCare },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl font-bold text-teal-900 mb-4">

            {t.services.heading}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-teal-700">

            {t.services.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const serviceData = t.services.items[service.key as keyof typeof t.services.items];
            return (
            <motion.div
              key={service.key}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1
              }}
              whileHover={{
                y: -8
              }}
              className="group p-8 rounded-3xl bg-white border border-teal-50 shadow-lg shadow-teal-100/50 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-300 cursor-pointer">

                <motion.div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1
                }}
                transition={{
                  duration: 0.5
                }}>

                  <service.icon size={28} strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {serviceData.title}
                </h3>
                <p className="text-teal-700 leading-relaxed">
                  {serviceData.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>);

}