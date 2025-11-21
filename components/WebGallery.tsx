"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const websites = [
  {
    id: 1,
    title: "Fondation FORA",
    description: "Site web complet pour la Fondation Les Rachetés FORA avec programme des cultes, événements, galerie et témoignages",
    image: "/images/websites/010.png",
    url: "https://fondationfora.com",
    category: "Fondation",
  },
  {
    id: 2,
    title: "CAJJ RDC",
    description: "Site web professionnel pour CAJJ ASBL - Centre d'Aide Juridico Judiciaire",
    image: "/images/websites/008.png",
    url: "https://cajjrdc.com",
    category: "Droits Humains",
  },
  {
    id: 3,
    title: "Page Jaune CD",
    description: "Plateforme d'annuaire en ligne pour la République Démocratique du Congo avec recherche locale, catégories et historique des recherches",
    image: "/images/websites/009.png",
    url: "https://pagejaune.cd",
    category: "Annuaire",
  },
  {
    id: 4,
    title: "Site Web Professionnel",
    description: "Site web professionnel avec design moderne et responsive",
    image: "/images/websites/003.png",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Site Web Entreprise",
    description: "Conception et développement de site web professionnel",
    image: "/images/websites/004.png",
    category: "Web Design",
  },
  {
    id: 6,
    title: "Site Web Moderne",
    description: "Site web avec interface moderne et navigation intuitive",
    image: "/images/websites/005.png",
    category: "Web Design",
  },
  {
    id: 7,
    title: "Site Web Responsive",
    description: "Développement de site web responsive et optimisé",
    image: "/images/websites/006.png",
    category: "Web Design",
  },
  {
    id: 8,
    title: "Site Web Personnalisé",
    description: "Site web professionnel avec design adapté aux besoins clients",
    image: "/images/websites/007.png",
    category: "Web Design",
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

export default function WebGallery() {
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
      setSelectedImage((selectedImage + 1) % websites.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + websites.length) % websites.length);
    }
  };

  return (
    <section id="web-gallery" className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Galerie de Sites Web</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explorez toutes les captures de sites web que j'ai créés. 
            Cliquez sur une capture pour la voir en grand format et accéder au site.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              variants={itemVariants}
              className="group relative"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer aspect-[4/3]">
                <div
                  onClick={() => openImage(index)}
                  className="relative h-full w-full"
                >
                  <Image
                    src={website.image}
                    alt={website.title}
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
                    <p className="text-white text-sm font-semibold">{website.title}</p>
                    <p className="text-white/80 text-xs">{website.category}</p>
                    {website.url && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-yellow-500/90 text-white text-xs font-medium">
                        ⭐ En ligne
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal pour voir la capture en grand */}
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
                      src={websites[selectedImage].image}
                      alt={websites[selectedImage].title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {websites[selectedImage].title}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">
                        {websites[selectedImage].description}
                      </p>
                      <div className="flex items-center gap-3">
                        <p className="text-white/60 text-xs">
                          {selectedImage + 1} / {websites.length}
                        </p>
                        <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium border border-primary/30">
                          {websites[selectedImage].category}
                        </span>
                      </div>
                    </div>
                    {websites[selectedImage].url && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white"
                        >
                          <a
                            href={websites[selectedImage].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Visiter le site
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

