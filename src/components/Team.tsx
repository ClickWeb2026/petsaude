import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart } from 'lucide-react';
const team = [
{
  name: 'Dr. Sarah Miller',
  role: 'Medical Director',
  image:
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
  funFact: 'Has a three-legged cat named Tripod who rules her house.',
  specialty: 'Internal Medicine'
},
{
  name: 'Dr. James Chen',
  role: 'Senior Veterinarian',
  image:
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
  funFact: 'Sings opera to calm nervous dogs (it actually works!).',
  specialty: 'Surgery'
},
{
  name: 'Dr. Emily Rodriguez',
  role: 'Exotic Pet Specialist',
  image:
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop',
  funFact: 'Once performed a checkup on a baby kangaroo.',
  specialty: 'Exotics'
}];

export function Team() {
  return (
    <section
      id="our-team"
      className="py-24 bg-teal-50 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            className="text-teal-600 font-semibold tracking-wider uppercase text-sm">

            Meet the Experts
          </motion.span>
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
            className="text-4xl font-bold text-teal-900 mt-2 mb-4">

            Passionate about pets, <br />
            obsessed with care.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) =>
          <motion.div
            key={member.name}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            whileHover={{
              scale: 1.02
            }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-teal-900/5 group">

              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-teal-900/0 transition-colors z-10" />
                <motion.img
                whileHover={{
                  scale: 1.1
                }}
                transition={{
                  duration: 0.6
                }}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover" />

              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-teal-900">
                    {member.name}
                  </h3>
                  <p className="text-teal-500 font-medium">{member.role}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-teal-700 bg-teal-50 p-3 rounded-xl">
                    <Award className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-semibold">Specialty:</span>{' '}
                      {member.specialty}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-teal-700 bg-amber-50 p-3 rounded-xl">
                    <Heart className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-semibold">Fun Fact:</span>{' '}
                      {member.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}