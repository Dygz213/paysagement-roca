import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Sam Zahnoun", location: "Laval", rating: 5, text: "J'ai fait appel aux services de paysagement Roca récemment pour ma cour et je suis très impressionné par leur travail! Ils sont très respectueux et sérieux au travail. Ils respectent leurs heures et font du très bon travail. La job était finie en moins de temps que prévu et j'ai pu profiter de ma nouvelle cour assez rapidement! Je recommande fortement les services de paysagement Roca!", date: "Janvier 2025" },
  { id: 2, name: "Nader Sassi", location: "Montréal", rating: 5, text: "Le service fourni a été d'une qualité professionnelle et irréprochable. Les collaborateurs ont démontré une expertise approfondie dans leur domaine. Je suis pleinement satisfait du travail réalisé sur ma cour arrière et recommande vivement leurs services.", date: "Décembre 2024" },
  { id: 3, name: "Sophie Tremblay", location: "Brossard", rating: 5, text: "Excellente équipe! Ils ont transformé mon entrée de garage avec du pavé uni magnifique. Le travail est impeccable et ils ont respecté les délais promis. Je recommande sans hésitation!", date: "Octobre 2024" },
  { id: 4, name: "Carlos Hernandez", location: "Longueuil", rating: 5, text: "Très professionnel du début à la fin. La soumission était claire et détaillée. L'équipe est arrivée à l'heure chaque jour et a laissé le terrain propre. Mon patio est magnifique!", date: "Septembre 2024" },
  { id: 5, name: "Fatima Benali", location: "Laval", rating: 5, text: "Service exceptionnel! Ils ont fait notre terrassement et pose de tourbe. Le résultat dépasse nos attentes. Communication excellente tout au long du projet.", date: "Août 2024" },
  { id: 6, name: "Jean-François Dubois", location: "Saint-Laurent", rating: 5, text: "Après avoir magasiné plusieurs soumissions, j'ai choisi Paysagement Roca et je ne regrette rien. Qualité du travail impeccable, prix compétitif et équipe sympathique. Bravo!", date: "Juillet 2024" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="temoignages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0E3A0E] font-semibold text-sm uppercase tracking-wider">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Ce que disent nos clients</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-6 right-6 w-10 h-10 bg-[#0E3A0E]/5 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-[#0E3A0E]/40" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">"{testimonial.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
