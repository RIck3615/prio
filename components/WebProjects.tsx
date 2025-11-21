"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const webProjects = [
  {
    id: 1,
    title: "Fondation FORA",
    description:
      "Site web complet pour la Fondation Les Rachetés FORA, incluant programme des cultes, événements, galerie, témoignages et gestion de dons. Design moderne avec section live pour les cultes dominical.",
    category: "Web Design",
    image: "/images/websites/010.png",
    tags: ["WordPress", "Responsive", "CMS"],
    url: "https://fondationfora.com",
  },
  {
    id: 2,
    title: "CAJJ RDC",
    description:
      "Site web professionnel pour CAJJ ASBL (Centre d&apos;Aide Juridico Judiciaire) avec interface moderne, navigation intuitive et design adapté aux besoins de l&apos;organisation. Focus sur la promotion et protection des droits humains.",
    category: "Web Design",
    image: "/images/websites/008.png",
    tags: ["Web Design", "Responsive", "Droits Humains"],
    url: "https://cajjrdc.com",
  },
  {
    id: 3,
    title: "Page Jaune CD",
    description:
      "Plateforme d&apos;annuaire en ligne pour la République Démocratique du Congo. Design professionnel avec recherche locale avancée, catégories populaires et historique des recherches.",
    category: "Web Design",
    image: "/images/websites/009.png",
    tags: ["Annuaire", "Recherche", "Listing"],
    url: "https://pagejaune.cd",
  },
  {
    id: 4,
    title: "Autres Sites Web Créés",
    description:
      "Portfolio de sites web professionnels créés pour diverses entreprises et organisations, de la conception à la mise en ligne.",
    category: "Web Design",
    image: "/images/websites/003.png",
    tags: ["Portfolio", "Multi-projets", "Développement"],
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

export default function WebProjects() {
  return (
    <section id="web-projects" className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Sites Web Créés</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez les sites web professionnels que j&apos;ai conçus et développés, 
            de la maquette jusqu&apos;à la mise en ligne.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {webProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/0 transition-all duration-500 z-0" />
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {project.url && (
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-xs font-semibold shadow-lg backdrop-blur-sm"
                      >
                        ⭐ En ligne
                      </motion.span>
                    )}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold shadow-lg backdrop-blur-sm"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-2 py-1 rounded-md bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-xs font-medium border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.url ? (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Visiter le site
                          </a>
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                          <span className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Voir le projet
                          </span>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

