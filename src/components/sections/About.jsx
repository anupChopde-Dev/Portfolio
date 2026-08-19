import { motion } from "framer-motion";
import { LayoutGrid, Zap, Layers, ShieldCheck } from "lucide-react";

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
   const getExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();

  const monthDifference = today.getMonth() - start.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < start.getDate())
  ) {
    years--;
  }

  return years;
};

  const valueProps = [
    {
      title: "Frontend Architecture",
      description:
        "Designing scalable React applications with reusable components, clean architecture, and maintainable code that grows with the product.",
      icon: <LayoutGrid className="h-6 w-6 text-primary" />,
    },
    {
      title: "Performance & UX",
      description:
        "Creating fast, responsive interfaces with optimized rendering, efficient state management, lazy loading, and thoughtful user experiences.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "API & System Integration",
      description:
        "Connecting frontend applications with REST APIs, authentication systems, role-based workflows, dashboards, and complex business logic.",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "Reliable Applications",
      description:
        "Building production-ready interfaces with strong form validation, predictable state management, reusable patterns, and error handling.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4"
              >
                <span className="w-12 h-[2px] bg-primary block" />
                About Me
              </motion.h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <motion.p variants={itemVariants}>
                  I'm a Frontend Developer with {getExperience("2022-06-01")} years of experience
                  building scalable, responsive, and high-performance web
                  applications with React.js, JavaScript, and modern frontend
                  technologies. I focus on creating clean UI architectures,
                  reusable components, efficient state management, and
                  intuitive user experiences.
                </motion.p>

                <motion.p variants={itemVariants}>
                  My experience spans healthcare, retail, hospitality, and
                  enterprise applications, where I've worked on complex
                  dashboards, admin portals, role-based systems, e-commerce
                  platforms, and API-driven applications. I enjoy turning
                  business requirements into reliable, maintainable products
                  that are both visually polished and technically solid.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I'm also expanding my full-stack capabilities with Node.js,
                  Express.js, MongoDB, and PostgreSQL while exploring Next.js,
                  TypeScript, shadcn/ui, and modern component-driven
                  architecture.
                </motion.p>
              </div>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {prop.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {prop.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}