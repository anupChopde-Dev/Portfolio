import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiReactquery,
  SiAxios,
  SiReacthookform,
  SiGit,
  SiPostman,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiMongoose,
} from "react-icons/si";
import { Code2, Sparkles, Zap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: null },
        { name: "SCSS", icon: <SiSass /> },
      ],
    },
    {
      title: "Frameworks & State",
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux Toolkit", icon: <SiRedux /> },
        { name: "Zustand", icon: null },
        { name: "React Context", icon: <SiReact /> },
        { name: "Recoil", icon: <SiReact /> },
      ],
    },
    {
      title: "MERN Stack",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "REST API Design", icon: null },
      ],
    },
    {
      title: "UI & Styling",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "shadcn/ui", icon: null },
        { name: "Radix UI", icon: null },
        { name: "Material UI", icon: <SiMui /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      title: "Data & Forms",
      skills: [
        { name: "TanStack Query", icon: <SiReactquery /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "RESTful APIs", icon: null },
        { name: "React Hook Form", icon: <SiReacthookform /> },
        { name: "Zod / Yup", icon: null },
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "VS Code", icon: null },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Chart.js / Recharts", icon: null },
      ],
    },
  ];

  const strengths = [
    "Responsive Design",
    "Performance Optimization",
    "Accessibility",
    "Component Architecture",
    "Clean Code",
    "API Integration",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-24"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.08]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              My Development Toolkit
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Technologies and tools I use to build scalable, responsive and
              production-ready web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: catIndex * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-background/75 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20" />

                <div className="relative mb-6 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                  >
                    <Code2 className="h-5 w-5" />
                  </motion.div>

                  <h3 className="font-mono text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="relative flex flex-col gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: catIndex * 0.08 + index * 0.05,
                      }}
                      whileHover={{ x: 8, scale: 1.03 }}
                      className="group/item flex items-center gap-3 rounded-2xl border border-transparent bg-secondary/50 p-3 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-background text-xl text-primary shadow-sm"
                      >
                        {skill.icon || (
                          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        )}
                      </motion.div>

                      <span className="text-sm font-medium text-foreground transition-colors group-hover/item:text-primary">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">
                    Core Strengths
                  </h4>
                </div>

                <p className="text-sm text-muted-foreground">
                  The principles driving my frontend engineering process.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:justify-end">
                {strengths.map((strength, index) => (
                  <motion.span
                    key={strength}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4, scale: 1.06 }}
                    className="rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur hover:bg-primary hover:text-primary-foreground"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}