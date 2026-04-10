import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <a href="/" className="flex items-center" aria-label="Retour à l'accueil Paysagement Roca">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/7de09ded3_1.png"
                alt="Logo Paysagement Roca"
                className={`h-32 transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
                width="128"
                height="128"
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0E3A0E] ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#0E3A0E] hover:bg-[#0a2a0a] text-white font-semibold rounded-full px-6"
              >
                Soumission gratuite
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-white shadow-xl z-40 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-emerald-600 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full bg-[#0E3A0E] hover:bg-[#0a2a0a] text-white font-semibold rounded-xl py-6"
              >
                Soumission gratuite
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
