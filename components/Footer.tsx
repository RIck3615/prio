"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Rick Samwanda Kasenga. Tous droits réservés.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            Designer Graphique Polyvalent | Gatineau, QC
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

