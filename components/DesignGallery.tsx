"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const designs = [
  {
    id: 1,
    title: "Visuels Conférence 2025",
    description: "Création de visuels promotionnels pour une conférence 2025",
    image: "/images/designs/Conference-2025-1-scaled.webp",
    category: "Événement",
  },
  {
    id: 2,
    title: "Visuels Séminaire",
    description: "Conception de supports visuels pour un séminaire",
    image: "/images/designs/Seminaire-1.webp",
    category: "Séminaire",
  },
  {
    id: 3,
    title: "Formation Professionnelle",
    description: "Création de visuels pour une formation professionnelle",
    image: "/images/designs/formation ok.png",
    category: "Formation",
  },
  {
    id: 4,
    title: "Design Créatif 1",
    description: "Visuel créatif démontrant la polyvalence en design",
    image: "/images/designs/1.jpg",
    category: "Créatif",
  },
  {
    id: 5,
    title: "Design Créatif 2",
    description: "Visuel créatif avec maîtrise des outils Adobe",
    image: "/images/designs/2.jpg",
    category: "Créatif",
  },
  {
    id: 6,
    title: "Design Créatif 3",
    description: "Visuel créatif pour différents projets",
    image: "/images/designs/3.jpg",
    category: "Créatif",
  },
  {
    id: 7,
    title: "Design Créatif 4",
    description: "Visuel créatif avec design moderne",
    image: "/images/designs/4.jpg",
    category: "Créatif",
  },
  {
    id: 8,
    title: "Design Créatif 5",
    description: "Visuel créatif avec identité visuelle cohérente",
    image: "/images/designs/5.jpg",
    category: "Créatif",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function DesignGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openImage = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % designs.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + designs.length) % designs.length);
    }
  };

  return (
    <section id="design-gallery" className="py-16 sm:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Galerie de Visuels</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explorez ma collection de visuels créés pour différents projets. 
            Cliquez sur une image pour la voir en grand format.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              className="group relative"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer aspect-square">
                <div
                  onClick={() => openImage(index)}
                  className="relative h-full w-full"
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground shadow-lg"
                    >
                      <Maximize2 className="h-6 w-6" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">{design.title}</p>
                    <p className="text-white/80 text-xs">{design.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal pour voir l'image en grand */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none overflow-hidden">
            {selectedImage !== null && (
              <div className="relative w-full h-[90vh] flex items-center justify-center">
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center p-8"
                  >
                    <Image
                      src={designs[selectedImage].image}
                      alt={designs[selectedImage].title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {designs[selectedImage].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-2">
                    {designs[selectedImage].description}
                  </p>
                  <p className="text-white/60 text-xs">
                    {selectedImage + 1} / {designs.length}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

