import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/7de09ded3_1.png"
                alt="Logo Paysagement Roca"
                className="h-20 brightness-0 invert"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experts en aménagement paysager et pavé uni depuis plus de 5 ans.
              Nous transformons vos espaces extérieurs avec passion et professionnalisme.
            </p>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Équipe licenciée et assurée</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Grand Montréal</span>
              </div>
              <a href="tel:+14383891872" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(438) 389-1872</span>
              </a>
              <a href="mailto:info@paysagementroca.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@paysagementroca.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Nos services</h4>
            <ul className="space-y-3">
              {["Aménagement paysager", "Installation de pavé uni", "Réparation de pavé uni", "Terrassement", "Pose de tourbe", "Murets de soutènement"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {currentYear} Paysagement Roca – Tous droits réservés</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0E3A0E] rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#0E3A0E] rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
