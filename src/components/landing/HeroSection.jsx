import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock } from 'lucide-react';
import SubmissionForm from './SubmissionForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#111] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://media.base44.com/images/public/69892eeaa1717acc20cbfd63/3a604cf15_generated_image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Entreprise licenciée RBQ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experts en{' '}
              <span style={{color: '#4a9e4a'}}>aménagement paysager</span>{' '}
              et pavé uni dans le Grand Montréal
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Plus de 5 ans d'expérience en pavé uni, terrassement et aménagement extérieur.
              Transformez votre espace avec des experts passionnés.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { icon: Award, label: "5+ ans d'expérience" },
                { icon: Shield, label: "Licencié & assuré" },
                { icon: Clock, label: "Soumission 24h" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-[#0E3A0E]/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <SubmissionForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
