  import { motion } from "framer-motion";
  import {
    GraduationCap,
    Award,
    Sparkles,
    CalendarDays,
    Brain,
    MessageCircle,
    Clock,
    Target,
  } from "lucide-react";

export default function Education() {
  const education = [
    {
      school: "Creative Design & Multimedia Institute, Surat",
      degree: "Frontend JS Development (React.js)",
      year: "2022",
      icon: <Award className="h-6 w-6" />,
    },
    {
      school: "Mahavir Swami College of Polytechnic, Surat",
      degree: "Diploma in Electrical Engineering",
      year: "2017",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      school: "Gujarat Board",
      degree: "Secondary School Certificate (SSC)",
      year: "2014",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  const softSkills = [
    { name: "Strong Communication", icon: MessageCircle },
    { name: "Problem-solving", icon: Brain },
    { name: "Time Management", icon: Clock },
    { name: "Ownership Mindset", icon: Target },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-24"
    >
      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], y: [0, -45, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.08]" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
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
              Learning Journey
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Academic background and professional learning that shaped my
              frontend development journey.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 md:flex"
                  >
                    {item.icon}
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-background/75 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20" />

                    <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary md:hidden"
                        >
                          {item.icon}
                        </motion.div>

                        <div>
                          <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                            {item.degree}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {item.school}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="flex w-max items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                      >
                        <CalendarDays className="h-4 w-4" />
                        {item.year}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Soft Skills
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The collaborative foundation of my technical work.
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:w-auto">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -5, scale: 1.04 }}
                      className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-background/80 px-4 py-3 text-sm font-medium shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}