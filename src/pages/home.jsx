import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Certification from "../components/sections/Certification";

export default function Home() {
  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "skills", component: <Skills /> },
    { id: "experience", component: <Experience /> },
    { id: "certification", component: <Certification /> },
    // { id: "education", component: <Education /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-hidden">
      <Navbar />

      <main className="flex-1">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index === 0 ? 0 : 0.08,
              ease: "easeOut",
            }}
          >
            {section.component}
          </motion.div>
        ))}
      </main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}