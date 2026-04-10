import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, LayoutGrid, Wrench, Square, Mountain, Leaf, Layers, Route } from 'lucide-react';

const services = [
  { icon: TreePine, title: "Aménagement paysager", slug: "amenagement-paysager", description: "Conception et réalisation d'espaces verts sur mesure qui subliment votre propriété." },
  { icon: LayoutGrid, title: "Installation de pavé uni", slug: "installation-pave-uni", description: "Entrées de garage, patios et allées en pavé uni de qualité supérieure." },
  { icon: Wrench, title: "Réparation de pavé uni", slug: "reparation-pave-uni", description: "Remise à niveau, remplacement et restauration de pavé uni existant." },
  { icon: Square, title: "Béton", slug: "beton", description: "Dalles, bordures et surfaces en béton pour des fondations solides et durables." },
  { icon: Mountain, title: "Terrassement", slug: "terrassement", description: "Préparation et nivellement de terrain pour vos projets d'aménagement." },
  { icon: Leaf, title: "Pose de tourbe", slug: "pose-de-tourbe", description: "Installation professionnelle de gazon en plaques pour une pelouse impeccable." },
  { icon: Layers, title: "Murets de soutènement", slug: "murets-de-soutenement", description: "Construction de murets esthétiques et fonctionnels pour structurer votre terrain." },
  { icon: Route, title: "Asphalte", slug: "asphalte", description: "Entrées de cour et stationnements en asphalte de qualité commerciale." }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0E3A0E] font-semibold text-sm uppercase tracking-wider">Nos expertises</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Nos services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services d'aménagement extérieur pour transformer et valoriser votre propriété.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0E3A0E]/30 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-[#0E3A0E]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0E3A0E]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#0E3A0E]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0E3A0E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-1 mt-4 text-[#0E3A0E] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
