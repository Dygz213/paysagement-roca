import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SubmissionForm from '@/components/landing/SubmissionForm';
import { getServiceBySlug, servicesData } from '@/lib/servicesData';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0E3A0E] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{a}</div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) document.title = `${service.title} | Paysagement Roca`;
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">Service introuvable.</p>
        <Link to="/" className="text-[#0E3A0E] font-semibold underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-8 pb-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour aux services
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{service.title}</h1>
          <p className="text-white/80 mt-2 text-lg">{service.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de ce service</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ce que nous réalisons</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#0E3A0E] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="bg-[#0E3A0E]/5 border-l-4 border-[#0E3A0E] rounded-r-xl p-6">
                <h3 className="text-lg font-semibold text-[#0E3A0E] mb-2">Pourquoi choisir ce service?</h3>
                <p className="text-gray-700 leading-relaxed">{service.why}</p>
              </div>
            </motion.div>

            {service.faq && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
                <div className="space-y-3">
                  {service.faq.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
                </div>
              </motion.div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos autres services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {servicesData.filter(s => s.slug !== slug).slice(0, 4).map(s => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-[#0E3A0E]/40 hover:bg-[#0E3A0E]/5 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0E3A0E] flex-shrink-0" />
                    <span className="text-gray-800 group-hover:text-[#0E3A0E] font-medium transition-colors">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <SubmissionForm variant="compact" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
