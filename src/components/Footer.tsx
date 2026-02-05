import {
  PawPrint,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50 pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 p-2 rounded-xl text-white">
                <PawPrint size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Pawsitive<span className="text-teal-400">Care</span>
              </span>
            </div>
            <p className="text-teal-200 leading-relaxed">
              Making tails wag and purrs rumble since 2015. We treat your pets
              like our own family.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition-colors">

                  <Icon size={20} className="text-teal-200" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
              'About Us',
              'Services',
              'Our Team',
              'Pet Portal',
              'Careers'].
              map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="text-teal-200 hover:text-white transition-colors flex items-center gap-2">

                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-teal-200">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>
                  123 Wagging Tail Lane
                  <br />
                  Petville, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3 text-teal-200">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-teal-200">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>hello@pawsitivecare.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-teal-200">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-medium text-white">
                  8:00 AM - 7:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-white">
                  9:00 AM - 4:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-amber-400">
                  Emergency Only
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 text-center text-teal-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} PawsitiveCare Veterinary Clinic.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}