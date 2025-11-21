"use client";

import { motion } from "framer-motion";
import { Image, Globe, Palette, FileText } from "lucide-react";

const stats = [
  {
    icon: Palette,
    number: "3+",
    label: "Années d'expérience",
    description: "En design graphique et création visuelle",
  },
  {
    icon: Globe,
    number: "20+",
    label: "Sites web créés",
    description: "De la maquette jusqu'à la mise en ligne",
  },
  {
    icon: Image,
    number: "200+",
    label: "Retouches photo",
    description: "Traitement professionnel d'images",
  },
  {
    icon: FileText,
    number: "50+",
    label: "Visuels créés",
    description: "Pour réseaux sociaux et supports marketing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 text-primary mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-primary/20"
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <motion.h3
                  className="text-4xl sm:text-5xl font-bold gradient-text mb-2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

