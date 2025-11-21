"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Palette, Code, Image as ImageIcon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Palette, label: "Design Graphique" },
  { icon: ImageIcon, label: "Retouche Photo" },
  { icon: Code, label: "Design Web" },
  { icon: Globe, label: "Branding" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background via-primary/5 to-primary/10"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/3 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 via-primary/3 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                <span className="text-sm font-medium">Designer Graphique Professionnel</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="block text-foreground mb-2">
                  RICK SAMWANDA
                </span>
                <span className="block gradient-text">
                  KASENGA
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-4">
                  Designer Graphique Polyvalent
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Plus de <span className="font-bold text-primary">3 ans d&apos;expérience</span> en création visuelle, 
                  retouche photo, conception de supports marketing et design web.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{skill.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" asChild className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    <a href="#web-projects">Voir mes projets</a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg px-8 py-6 border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <a href="#contact">Me contacter</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-xl"
                  animate={{
                    rotate: [0, 90, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"
                  animate={{
                    rotate: [360, 270, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <Palette className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Création Visuelle</h3>
                        <p className="text-sm text-muted-foreground">Designs percutants</p>
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-2xl font-bold text-primary mb-1">20+</p>
                        <p className="text-xs text-muted-foreground">Sites Web</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-2xl font-bold text-primary mb-1">200+</p>
                        <p className="text-xs text-muted-foreground">Retouches</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-2xl font-bold text-primary mb-1">50+</p>
                        <p className="text-xs text-muted-foreground">Visuels</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-2xl font-bold text-primary mb-1">3+</p>
                        <p className="text-xs text-muted-foreground">Années</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm font-medium">Découvrir</span>
              <ArrowDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

