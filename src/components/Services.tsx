import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Scissors,
  HeartPulse,
  Syringe,
  Dog,
  Calendar } from
'lucide-react';
const services = [
{
  icon: Stethoscope,
  title: 'Wellness Exams',
  description:
  'Comprehensive nose-to-tail checkups to keep your best friend happy and healthy.',
  color: 'bg-blue-100 text-blue-600'
},
{
  icon: Syringe,
  title: 'Vaccinations',
  description:
  "Essential protection against common diseases, tailored to your pet's lifestyle.",
  color: 'bg-rose-100 text-rose-600'
},
{
  icon: Scissors,
  title: 'Grooming & Spa',
  description:
  'Gentle baths, trims, and nail care. We make them look good and feel great.',
  color: 'bg-purple-100 text-purple-600'
},
{
  icon: HeartPulse,
  title: 'Surgery & Dental',
  description:
  'Advanced care with state-of-the-art monitoring for safety and comfort.',
  color: 'bg-amber-100 text-amber-600'
},
{
  icon: Dog,
  title: 'Puppy Training',
  description:
  'Positive reinforcement classes to help your new family member learn the ropes.',
  color: 'bg-teal-100 text-teal-600'
},
{
  icon: Calendar,
  title: 'Senior Care',
  description:
  'Specialized attention for our golden oldies to ensure comfort in their later years.',
  color: 'bg-indigo-100 text-indigo-600'
}];

export function Services() {
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

            Everything they need to thrive
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

            From routine checkups to specialized treatments, we're here for
            every stage of your pet's life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
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
                {service.title}
              </h3>
              <p className="text-teal-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}