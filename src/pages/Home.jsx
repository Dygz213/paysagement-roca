import React, { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import RealizationsSection from '@/components/landing/RealizationsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  useEffect(() => {
    document.title = "Pavé Uni Montréal, Laval & Rive-Sud | Expert Pavé Uni | Paysagement Roca";
    document.documentElement.lang = 'fr-CA';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RealizationsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
