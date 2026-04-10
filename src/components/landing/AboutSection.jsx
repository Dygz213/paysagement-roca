import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, ThumbsUp, CalendarCheck } from 'lucide-react';

const features = [
  { icon: MapPin, title: "Basés à Montréal", description: "Entreprise locale desservant le Grand Montréal avec fierté." },
  { icon: Users, title: "Équipe qualifiée", description: "Professionnels passionnés, licenciés et formés aux meilleures pratiques." },
  { icon: ThumbsUp, title: "Travail soigné", description: "Finitions impeccables et matériaux de qualité pour des résultats durables." },
  { icon: CalendarCheck, title: "Respect des engagements", description: "Délais respectés et budget transparent, sans mauvaises surprises." }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/e5a2e56c2_image.png"
                alt="Équipe professionnelle de Paysagement Roca"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0E3A0E]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#0E3A0E]">5+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Années</p>
                    <p className="text-sm text-gray-500">d'expérience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1B4332]/10 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0E3A0E] font-semibold text-sm uppercase tracking-wider">À propos de nous</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Pourquoi choisir{' '}
              <span className="text-[#0E3A0E]">Paysagement Roca</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 5 ans, notre équipe passionnée transforme les espaces extérieurs
              des résidents du Grand Montréal. Notre engagement : un travail soigné, des matériaux
              de qualité et une satisfaction client totale.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0E3A0E]/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#0E3A0E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
