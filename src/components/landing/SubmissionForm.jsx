import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  "Aménagement paysager",
  "Installation de pavé uni",
  "Réparation de pavé uni",
  "Béton",
  "Terrassement",
  "Pose de tourbe",
  "Murets de soutènement",
  "Asphalte",
  "Autre"
];

// ⚙️ REMPLACE PAR TON WEBHOOK URL GO HIGH LEVEL
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/VOTRE_WEBHOOK_ID/webhook-trigger/VOTRE_TRIGGER_ID";

export default function SubmissionForm({ variant = "default" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.service_type,
          message: formData.message,
          source: 'Site Web - Formulaire',
          tags: ['site-web', formData.service_type].filter(Boolean),
        })
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', address: '', service_type: '', message: '' });
      }, 4000);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCompact = variant === "compact";

  return (
    <div className={`bg-white rounded-2xl shadow-2xl ${isCompact ? 'p-6' : 'p-8'} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0E3A0E]" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 bg-[#0E3A0E]/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#0E3A0E]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Demande envoyée!</h3>
            <p className="text-gray-600">Nous vous contacterons sous peu.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className={`font-bold text-gray-900 ${isCompact ? 'text-xl' : 'text-2xl'}`}>
                Soumission gratuite
              </h3>
              <p className="text-gray-500 text-sm mt-1">Réponse rapide garantie</p>
            </div>

            <div className="space-y-4">
              <Input
                placeholder="Votre nom *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="h-12 border-gray-200 focus:border-[#1B4332] rounded-xl"
              />
              <Input
                type="tel"
                placeholder="Téléphone *"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="h-12 border-gray-200 focus:border-[#1B4332] rounded-xl"
              />
              <Input
                type="email"
                placeholder="Courriel *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="h-12 border-gray-200 focus:border-[#1B4332] rounded-xl"
              />
              <Input
                placeholder="Adresse / Ville"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="h-12 border-gray-200 focus:border-[#1B4332] rounded-xl"
              />
              <Select
                value={formData.service_type}
                onValueChange={(value) => setFormData({...formData, service_type: value})}
              >
                <SelectTrigger className="h-12 border-gray-200 rounded-xl">
                  <SelectValue placeholder="Type de service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Décrivez votre projet..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="min-h-[100px] border-gray-200 focus:border-[#1B4332] rounded-xl resize-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-[#0E3A0E] hover:bg-[#0a2a0a] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Recevoir ma soumission
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-400 mt-4">
              En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
