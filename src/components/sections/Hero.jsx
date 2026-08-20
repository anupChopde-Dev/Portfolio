import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ArrowRight,
  Linkedin,
  Code2,
  Sparkles,
  Layers,
  MonitorSmartphone,
  Database,
  Download,
  Github
} from "lucide-react";

function NetworkBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];

    const readThemeColor = (cssVar, fallback) => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar)
        .trim();
      return raw ? `hsl(${raw})` : fallback;
    };

    const getColors = () => ({
      primary: readThemeColor("--primary", "hsl(250 84% 60%)"),
      foreground: readThemeColor("--foreground", "hsl(240 10% 4%)"),
    });

    let colors = getColors();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      const linkDist = Math.min(140, Math.max(90, width / 10));
      const mouseDist = 170;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < mouseDist) {
            const pull = (1 - d / mouseDist) * 0.02;
            p.vx += dx * pull * 0.02;
            p.vy += dy * pull * 0.02;
          }
          const speed = Math.hypot(p.vx, p.vy);
          const maxSpeed = 0.6;
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            ctx.globalAlpha = (1 - d / linkDist) * 0.75;
            ctx.strokeStyle = colors.foreground;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        const dMouse = Math.hypot(mouse.current.x - p.x, mouse.current.y - p.y);
        if (dMouse < mouseDist) {
          ctx.globalAlpha = (1 - dMouse / mouseDist) * 0.85;
          ctx.strokeStyle = colors.foreground;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }

        ctx.globalAlpha = 0.8;
        ctx.fillStyle = colors.foreground;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(step);
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    const themeObserver = new MutationObserver(() => {
      colors = getColors();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const roles = [
    "MERN Stack Developer",
    "Frontend Engineer",
    "React.js Developer",
    "Next.js Developer",
    "Angular Developer",
    "UI Architect",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 90]);
  const textY = useTransform(scrollY, [0, 500], [0, -40]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0.3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anupchopde06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background pt-20"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.12]" />

      {/* Interactive node-network canvas — theme aware, reacts to mouse move */}
      <NetworkBackground />

      {/* Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-120px] top-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-140px] right-[-120px] -z-10 h-[460px] w-[460px] rounded-full bg-purple-500/20 blur-[130px]"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid min-h-[calc(100dvh-80px)] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div style={{ y: textY, opacity }} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 text-5xl font-bold tracking-tight md:text-7xl xl:text-8xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Anup
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 flex h-14 items-center justify-center overflow-hidden lg:justify-start md:h-20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ y: 45, opacity: 0, rotateX: -60 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -45, opacity: 0, rotateX: 60 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="font-mono text-3xl font-bold text-primary md:text-5xl"
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0"
            >
              I build fast, responsive and modern web applications using React.js,
              Next.js and clean UI architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button
                  size="lg"
                  className="group h-12 w-full rounded-full px-8 text-base shadow-lg shadow-primary/20 sm:w-auto"
                  asChild
                >
                  <a href="#experience">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group h-12 w-full rounded-full px-8 text-base bg-background/70 backdrop-blur sm:w-auto"
                  asChild
                >
                  <a href="/Anup_Chopde_CV.pdf" download="Anup_Chopde_CV.pdf">
                    Download CV
                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Button>
              </motion.div>

              <div className="flex items-center gap-3">
                <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/70 backdrop-blur"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/anup-chopde-559400233/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-background/70 backdrop-blur"
                    asChild
                  >
                    <a
                      href="https://github.com/anupChopde-Dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                </motion.div>

                <div className="relative">
                  <motion.div whileHover={{ y: -4, scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full bg-background/70 backdrop-blur"
                      onClick={handleCopyEmail}
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Copy email</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={
                      copied
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 8, scale: 0.9 }
                    }
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                  >
                    Copied
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative hidden min-h-[520px] items-center justify-center lg:flex"
          >
            {/* Main Glass Card */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="relative w-[390px] overflow-hidden rounded-[2rem] border bg-background/70 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4">
                <div className="h-5 w-3/4 rounded-full bg-primary/30" />
                <div className="h-4 w-full rounded-full bg-secondary" />
                <div className="h-4 w-5/6 rounded-full bg-secondary" />
                <div className="h-4 w-2/3 rounded-full bg-secondary" />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, label: "React.js" },
                    { icon: Layers, label: "UI Design" },
                    { icon: Database, label: "APIs" },
                    { icon: MonitorSmartphone, label: "Responsive" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -6, scale: 1.04 }}
                      className="rounded-2xl border bg-card/80 p-4 shadow-sm"
                    >
                      <item.icon className="mb-3 h-6 w-6 text-primary" />
                      <p className="text-sm font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            {[
              { text: "React.js", top: "8%", left: "10%" },
              { text: "Shadcn/UI", top: "1%", left: "40%" },
              { text: "MongoDB", top: "1%", left: "70%" },
              { text: "Next.js", top: "20%", right: "5%" },
              { text: "Node.js", top: "50%", right: "2%" },
              { text: "Express.js", top: "40%", left: "2%" },
              { text: "Tailwind", bottom: "18%", left: "3%" },
              { text: "MERN Stack", bottom: "10%", right: "4%" },
              { text: "MUI", top: "95%", right: "30%" },
              { text: "Bootstrap", top: "95%", right: "60%" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { delay: 0.8 + index * 0.1 },
                  scale: { delay: 0.8 + index * 0.1 },
                  y: {
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.15, rotate: 4 }}
                className="absolute rounded-full border bg-background/80 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur"
                style={badge}
              >
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
