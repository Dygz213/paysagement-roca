import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0E3A0E] via-[#1a4f1a] to-[#0a2a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Vous avez un projet d'aménagement extérieur?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Faites confiance à Paysagement Roca pour transformer votre espace.
            Obtenez une soumission gratuite dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="bg-white text-[#0E3A0E] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Soumission gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all bg-transparent"
              asChild
            >
              <a href="tel:+14383891872">
                <Phone className="mr-2 w-5 h-5" />
                Nous appeler
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
