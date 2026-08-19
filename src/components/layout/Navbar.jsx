import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "border-primary/10 bg-background/75 shadow-lg shadow-primary/5 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2" data-testid="link-home">
          <motion.div
            className="relative flex items-center"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 4 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.04 }}
          >
            <motion.span
              animate={{ rotate: [0, 30, -20, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2 flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary"
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>

            <span className="relative text-xl font-bold uppercase tracking-widest">
              {"Portfolio".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  style={{
                    background:
                      i < 4
                        ? "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))"
                        : "hsl(var(--foreground))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            <motion.span
              className="absolute -bottom-1 left-10 h-[2px] rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "calc(100% - 2.5rem)" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.06 }}
              >
                <motion.a
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="group relative rounded-full px-4 py-2 transition-colors hover:text-primary"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ rotate: 12, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary"
                data-testid="btn-theme-toggle"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    >
                      <Sun className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    >
                      <Moon className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                data-testid="btn-hire-me"
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.div whileHover={{ rotate: 12, scale: 1.08 }} whileTap={{ scale: 0.94 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary"
              data-testid="btn-theme-toggle-mobile"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span
                    key="mobile-sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="mobile-moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full text-foreground hover:bg-primary/10 hover:text-primary"
              data-testid="btn-mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 top-16 w-full overflow-hidden border-b border-primary/10 bg-background/90 px-4 py-5 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="block rounded-2xl py-3 text-lg font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-4 flex justify-center"
            >
              <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}