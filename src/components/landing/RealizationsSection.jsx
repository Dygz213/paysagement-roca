import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const projects = [
  { id: 1, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/1e5f5a295_photopav.png", title: "Entrée de garage", category: "Pavé uni" },
  { id: 2, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/ab780b8e8_PHOTOPAV2.png", title: "Entrée complète", category: "Pavé uni" },
  { id: 3, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/53361418b_IMG_2191.jpg", title: "Allée en pavé", category: "Pavé uni" },
  { id: 4, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/4c5560d16_IMG_2421.jpg", title: "Entrée de cour", category: "Pavé uni" },
  { id: 5, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/8afac4c26_IMG_2063.jpg", title: "Pose de tourbe", category: "Tourbe" },
  { id: 6, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/5765720f8_IMG_2131.jpg", title: "Allée latérale", category: "Pavé uni" },
  { id: 7, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/5731a05ba_IMG_1603.jpg", title: "Terrasse moderne", category: "Pavé uni" },
  { id: 8, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/e2cdb9b83_IMG_1188.jpg", title: "Patio contemporain", category: "Pavé uni" },
  { id: 9, image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69892eeaa1717acc20cbfd63/0acacd69d_IMG_0665.jpg", title: "Pavé naturel", category: "Pavé uni" },
];

export default function RealizationsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-white" id="realisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1B4332] font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents réalisés avec soin pour nos clients satisfaits.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} par Paysagement Roca`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white text-sm font-medium">{project.category}</span>
                  <h3 className="text-white text-lg font-semibold mt-1">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-white text-sm">{selectedImage.category}</span>
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
