import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Rick Samwanda Kasenga | Designer Graphique Polyvalent",
  description:
    "Portfolio professionnel de Rick Samwanda Kasenga, designer graphique polyvalent avec plus de 3 ans d'expérience en création visuelle, retouche photo, conception de supports marketing et design web. Spécialisé en branding, identités visuelles et création de sites web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

