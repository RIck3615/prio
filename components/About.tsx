"use client";

import { motion } from "framer-motion";
import { Palette, Image, Globe, Code, Layers, Brush, Briefcase, Users, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Palette,
    title: "Adobe Creative Suite",
    description: "Photoshop (avancé), Illustrator (avancé), InDesign (intermédiaire)",
  },
  {
    icon: Image,
    title: "Retouche Photo",
    description: "Retouche professionnelle et optimisation d'images, traitement sur fond vert",
  },
  {
    icon: Layers,
    title: "Branding & Identité",
    description: "Création de logos, identités visuelles et chartes graphiques",
  },
  {
    icon: Globe,
    title: "Design Web",
    description: "Conception de sites web professionnels, interfaces modernes et responsives",
  },
  {
    icon: Brush,
    title: "Mise en Page",
    description: "Affiches, flyers, catalogues et supports marketing",
  },
  {
    icon: Code,
    title: "Préproduction Numérique",
    description: "Traitement de données, vérification qualité et coordination de projets",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">À propos de moi</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-foreground leading-relaxed font-medium">
                  Designer graphique <span className="text-primary font-bold">polyvalent</span> avec plus de{" "}
                  <span className="text-primary font-bold">3 ans d'expérience</span> en création visuelle, 
                  retouche photo, conception de supports marketing et design web.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Créatif, structuré et orienté résultats</span>, 
                  je conçois des visuels adaptés aux besoins des entreprises et aux tendances actuelles.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Créatif
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Structuré
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Orienté résultats
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Tendances actuelles
                </span>
              </div>
            </motion.div>

            {/* Right Side - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-card border-2 border-primary/20 p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mon approche</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Chaque projet est une opportunité de créer quelque chose d'unique qui 
                        reflète parfaitement votre identité tout en captivant votre audience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background/50 border border-primary/10">
                      <p className="text-2xl font-bold text-primary mb-1">3+</p>
                      <p className="text-xs text-muted-foreground">Années d'expérience</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-primary/10">
                      <p className="text-2xl font-bold text-primary mb-1">100%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction client</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden bg-gradient-to-br from-card to-card/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/0 transition-all duration-500" />
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary mb-4 shadow-lg"
            >
              <Briefcase className="h-8 w-8" />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Mon parcours professionnel</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Magic Touch Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 via-primary/5 to-card border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-md"
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Magic Touch
                      </h4>
                      <p className="text-sm text-muted-foreground">Designer Graphique</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    J'ai créé des supports visuels pour des campagnes internes et externes, 
                    incluant affiches, catalogues, visuels web et retouches photo professionnelles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Santech Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 via-primary/5 to-card border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-md"
                    >
                      <Globe className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        Santech
                      </h4>
                      <p className="text-sm text-muted-foreground">Designer Web</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    J'ai conçu et développé plusieurs sites web professionnels pour des PME, 
                    de la maquette jusqu'à la mise en ligne, avec interfaces modernes et responsives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Card with Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-card via-primary/5 to-card border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary"
                  >
                    <Target className="h-5 w-5" />
                  </motion.div>
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Mes atouts
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5"
                      >
                        <Users className="h-4 w-4" />
                      </motion.div>
                      <div>
                        <p className="font-semibold mb-1">Travail en équipe</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Capacité à travailler de manière autonome et en collaboration
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5"
                      >
                        <Palette className="h-4 w-4" />
                      </motion.div>
                      <div>
                        <p className="font-semibold mb-1">Maîtrise des outils</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Adobe (Photoshop, Illustrator) et Canva - niveau avancé
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5"
                      >
                        <Target className="h-4 w-4" />
                      </motion.div>
                      <div>
                        <p className="font-semibold mb-1">Qualité & Délais</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Livraison de projets de qualité respectant les délais
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-0.5"
                      >
                        <Sparkles className="h-4 w-4" />
                      </motion.div>
                      <div>
                        <p className="font-semibold mb-1">Tendances actuelles</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Design adapté aux besoins clients et aux tendances du marché
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

