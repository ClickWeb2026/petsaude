import { motion } from 'framer-motion';
import { Award, Heart } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

export function Team() {
  const { t } = useLanguage();

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

            {t.team.badge}
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

            {t.team.heading} <br />
            {t.team.headingContinue}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.team.members.map((member, index) =>
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
                src={(member as any).image || '/placeholder.jpg'}
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
                      <span className="font-semibold">{t.team.specialtyLabel}</span>{' '}
                      {member.specialty}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-teal-700 bg-amber-50 p-3 rounded-xl">
                    <Heart className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-semibold">{t.team.funFactLabel}</span>{' '}
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