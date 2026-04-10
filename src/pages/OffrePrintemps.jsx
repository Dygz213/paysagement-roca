import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Star, Shield, Award, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubmissionForm from '@/components/landing/SubmissionForm';

const features = [
  "Entrées de garage en pavé uni",
  "Patios et terrasses extérieures",
  "Allées piétonnes et escaliers",
  "Bordures et finitions soignées",
  "Préparation et compactage du sol",
  "Rejointement au sable polymère"
];

const testimonials = [
  { name: "Sam Zahnoun", location: "Laval", text: "Ils sont très respectueux et sérieux au travail. La job était finie en moins de temps que prévu. Je recommande fortement!", rating: 5 },
  { name: "Nader Sassi", location: "Montréal", text: "Service d'une qualité professionnelle et irréprochable. Je suis pleinement satisfait du travail réalisé.", rating: 5 },
  { name: "Carlos Hernandez", location: "Longueuil", text: "Très professionnel du début à la fin. L'équipe est arrivée à l'heure chaque jour. Mon patio est magnifique!", rating: 5 }
];

const faqs = [
  { q: "Comment fonctionne le rabais de 10%?", a: "Le rabais de 10% s'applique sur le coût total de votre projet de pavé uni. L'offre est limitée aux 5 premiers clients qui la confirment et est disponible jusqu'au 30 avril 2026. Remplissez le formulaire dès maintenant pour ne pas la manquer!" },
  { q: "Quelle est la durée de vie du pavé uni?", a: "Lorsque la fondation est bien faite et l'entretien adéquat, le pavé uni peut durer jusqu'à 25 ans. En général, il faut compter environ 10 ans avant de devoir effectuer des réparations d'affaissement." },
  { q: "Est-ce que le pavé uni résiste aux hivers québécois?", a: "Absolument. Lorsque l'excavation est bien faite et que la compaction de la fondation l'est aussi, le pavé uni résiste très bien aux cycles de gel-dégel." },
  { q: "Combien de temps dure l'installation?", a: "Une entrée de garage standard prend généralement 3 à 5 jours. Un patio ou une terrasse compte de 5 à 7 jours, et pour les projets plus complexes, il faut prévoir 10 jours et plus." }
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0E3A0E] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{a}</div>}
    </div>
  );
}

export default function OffrePrintemps() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = "10% de rabais sur votre projet de pavé uni | Paysagement Roca";
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <a href="/" aria-label="Retour à l'accueil">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/7de09ded3_1.png"
              alt="Paysagement Roca"
              className={`h-32 transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>
          <a href="tel:+14383891872">
            <Button className={`rounded-full gap-2 transition-all ${isScrolled ? 'bg-[#0E3A0E] hover:bg-[#0a2a0a] text-white' : 'bg-white/20 hover:bg-white/30 text-white border border-white/40'}`}>
              <Phone className="w-4 h-4" />
              (438) 389-1872
            </Button>
          </a>
        </div>
      </header>

      <section className="relative bg-[#111] overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url("https://media.base44.com/images/public/69892eeaa1717acc20cbfd63/2497f0929_generated_image.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#0E3A0E] font-bold rounded-full px-5 py-2 text-sm mb-6 shadow-lg">
                🎉 Offre de printemps limitée
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Obtenez <span className="text-yellow-400">10% de rabais</span> sur votre projet de pavé uni!
              </h1>
              <p className="text-white/80 text-xl mb-8 leading-relaxed">
                Profitez de notre offre printanière et transformez votre entrée de garage ou patio avec des experts du pavé uni dans le Grand Montréal.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ icon: Award, label: "5+ ans d'expérience" }, { icon: Shield, label: "Licencié & assuré" }, { icon: Clock, label: "Soumission 24h" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white/80 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <SubmissionForm variant="compact" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Ce que nous réalisons</h2>
            <p className="text-gray-500 mt-2">Tous nos travaux de pavé uni sont couverts par l'offre</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[#0E3A0E] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Nos réalisations</h2>
            <p className="text-gray-500 mt-2">Des projets réels réalisés par notre équipe</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/1e5f5a295_photopav.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/ab780b8e8_PHOTOPAV2.png",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/53361418b_IMG_2191.jpg",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/4c5560d16_IMG_2421.jpg",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/5765720f8_IMG_2131.jpg",
              "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/5731a05ba_IMG_1603.jpg"
            ].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={src} alt={`Réalisation pavé uni ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Ce que disent nos clients</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0E3A0E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à profiter de l'offre?</h2>
          <p className="text-white/80 mb-8 text-lg">Remplissez le formulaire ci-haut ou appelez-nous directement.</p>
          <a href="tel:+14383891872">
            <Button size="lg" className="bg-white text-[#0E3A0E] hover:bg-gray-100 font-bold px-10 py-6 text-lg rounded-xl gap-2">
              <Phone className="w-5 h-5" />
              (438) 389-1872
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Paysagement Roca – Tous droits réservés · Entreprise licenciée RBQ
      </footer>
    </div>
  );
}
