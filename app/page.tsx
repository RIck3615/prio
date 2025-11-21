import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WebProjects from "@/components/WebProjects";
import WebGallery from "@/components/WebGallery";
import DesignGallery from "@/components/DesignGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <WebProjects />
      <WebGallery />
      <DesignGallery />
      <Contact />
      <Footer />
    </main>
  );
}

