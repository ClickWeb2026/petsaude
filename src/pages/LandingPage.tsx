import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-200 selection:text-teal-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-[60]"
        style={{
          scaleX
        }} />


      <Navbar />

      <main>
        <Hero />
        <Services />
        <Team />

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-teal-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />

            <motion.div
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
              className="relative z-10">

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to join the family?
              </h2>
              <p className="text-teal-100 text-xl mb-10 max-w-2xl mx-auto">
                Book your first appointment today and get 50% off your pet's
                first wellness exam.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-teal-50 transition-colors">

                Schedule Visit Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}