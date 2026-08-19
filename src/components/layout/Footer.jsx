import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear() || 2026;

  return (
    <footer className="bg-card border-t border-border py-4">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">

          {/* <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center group">
              <motion.div className="relative flex items-center">
                <span className="font-bold text-xl tracking-widest uppercase">
                  {"Portfolio".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      style={{
                        background: i < 4
                          ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))"
                          : "hsl(var(--foreground))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.div>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building precise, high-performance web applications.
            </p>
          </div> */}

          <div className="flex justify-center m-auto items-center gap-5">
            <a
              href="https://www.linkedin.com/in/anup-chopde-559400233/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:anupchopde06@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/anupChopde-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              data-testid="link-footer-github"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>

        </div>

        {/* <div className="mt-8 pt-6 border-t border-border flex justify-center flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Anup Chopde. All rights reserved.</p>
          <p>
            Designed & Built with <span className="text-primary">React Vite</span> + <span className="text-primary">Tailwind</span> + <span className="text-primary">Motion</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
}
