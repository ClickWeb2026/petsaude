import {
  PawPrint,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail } from
'lucide-react';
import { useLanguage } from '../i18n/useLanguage';

export function Footer() {
  const { t } = useLanguage();

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
              {t.footer.description}
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
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {t.footer.quickLinkItems.map((item) =>
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
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-teal-200">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: t.footer.address }} />
              </li>
              <li className="flex items-center gap-3 text-teal-200">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-teal-200">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.footer.hours}</h4>
            <ul className="space-y-3 text-teal-200">
              <li className="flex justify-between">
                <span>{t.footer.mondayFriday}</span>
                <span className="font-medium text-white">
                  {t.footer.time1}
                </span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.saturday}</span>
                <span className="font-medium text-white">
                  {t.footer.time2}
                </span>
              </li>
              <li className="flex justify-between">
                <span>{t.footer.sunday}</span>
                <span className="font-medium text-amber-400">
                  {t.footer.closed}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-800 pt-8 text-center text-teal-400 text-sm">
          <p>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>);

}