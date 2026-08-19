import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      company: "Shruntech Solutions",
      role: "Frontend Developer",
      period: "May 2023 — Apr 2026",
      location: "Ahmadabad, India",
      projects: [
        {
          name: "Abdali Hospital: Centralized Scheduling & Operations Platform",
          description:
            "A centralized hospital scheduling and operations platform with secure, role-based access control. Real-time dashboards for Nursing and Emergency units, comprehensive records of patient and staff activity.",
          tech: [
            "React.js",
            "JavaScript",
            "SCSS",
            "shadcn/ui",
            "Radix UI",
            "Redux Toolkit",
            "React Hook Form",
            "Zod",
            "Axios",
            "Chart.js",
          ],
          highlights: [
            "Built role-based dashboards for nursing and emergency units, improving real-time data visibility",
            "Implemented dynamic chart visualizations using Chart.js for hospital management insights",
            "Developed reusable, accessible UI components using shadcn/ui and Radix UI",
            "Integrated React Hook Form with Zod for complex multi-step patient and scheduling forms",
            "Collaborated with backend teams to integrate RESTful APIs for live patient data and reporting",
          ],
        },
        {
          name: "Delmonte: Internal Operations Management",
          description:
            "A scalable, type-safe web application for internal operations management with modules for Managers and Directors, integrated with SAP backend services.",
          tech: [
            "React.js",
            "JavaScript",
            "React Router",
            "Bootstrap",
            "Redux Toolkit",
            "React Hook Form",
            "Yup",
            "Chart.js",
            "SAP APIs",
          ],
          highlights: [
            "Designed and developed the frontend admin panel using React.js",
            "Integrated SAP backend APIs to retrieve, transform, and display role-based operational data",
            "Built distinct Manager and Director modules with permission-controlled features",
            "Implemented form validation using React Hook Form and Yup across all data-entry workflows",
          ],
        },
        {
          name: "Digi POS: Restaurant Management Admin Panel",
          description:
            "Feature-rich restaurant management admin panel for real-time control of orders, payments, tables, and Kitchen Order Tickets (KOT).",
          tech: [
            "React.js",
            "JavaScript",
            "React Router",
            "Bootstrap",
            "Redux Toolkit",
            "Formik",
            "Chart.js",
          ],
          highlights: [
            "Designed and implemented the frontend for restaurant order and table management",
            "Integrated RESTful APIs for real-time order tracking, table status, and KOT generation",
            "Built form-driven workflows for order creation and payment processing",
            "Delivered a responsive, mobile-friendly layout for desktop and tablet POS usage",
          ],
        },
      ],
    },
    {
      company: "Sarvadhi Solutions Pvt. Ltd.",
      role: "Frontend Developer",
      period: "June 2022 — April 2023",
      location: "Surat, India",
      projects: [
        {
          name: "Pure You: Jewelry E-Commerce Platform",
          description:
            "A full-featured jewelry e-commerce platform with Admin Portal, Vendor Portal, and Customer-Facing Website. Supports end-to-end product lifecycle management.",
          tech: [
            "React.js",
            "JavaScript",
            "React Router",
            "Redux Toolkit",
            "Material UI",
            "Minimal UI Kit",
            "Postman",
          ],
          highlights: [
            "Designed and implemented frontend for all three portals using React.js",
            "Built admin features for product management, vendor onboarding, and banner uploads",
            "Created vendor module for product listings and order management",
            "Integrated RESTful APIs using Axios across all three modules",
            "Performed API testing using Postman and tracked issues using Zoho",
          ],
        },
      ],
    },
  ];

  const [expandedCompanies, setExpandedCompanies] = useState({});

  const toggleCompany = (companyIndex) => {
    setExpandedCompanies((prev) => ({
      ...prev,
      [companyIndex]: !prev[companyIndex],
    }));
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      {/* Background Animation */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Professional Journey
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Work{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Building scalable, responsive and user-friendly frontend products
              with modern React.js ecosystem.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" />

            <div className="space-y-10">
              {experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: expIndex * 0.15 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 md:flex"
                  >
                    <BriefcaseBusiness className="h-5 w-5" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <Card className="group overflow-hidden border border-primary/10 bg-background/75 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                      <CardHeader
                        onClick={() => toggleCompany(expIndex)}
                        className="cursor-pointer p-6"
                      >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-primary" />
                              <p className="text-sm font-medium text-primary">
                                {exp.role}
                              </p>
                            </div>

                            <CardTitle className="text-2xl transition-colors group-hover:text-primary md:text-3xl">
                              {exp.company}
                            </CardTitle>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5">
                              <Calendar className="h-4 w-4 text-primary" />
                              {exp.period}
                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-secondary/60 px-3 py-1.5">
                              <MapPin className="h-4 w-4 text-primary" />
                              {exp.location}
                            </div>

                            <motion.div
                              animate={{
                                rotate: expandedCompanies[expIndex] ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="rounded-full bg-primary/10 p-2 text-primary"
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.div>
                          </div>
                        </div>
                      </CardHeader>

                      <AnimatePresence>
                        {expandedCompanies[expIndex] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: "easeInOut" }}
                          >
                            <CardContent className="px-6 pb-6 pt-0">
                              <div className="grid gap-5">
                                {exp.projects.map((project, pIndex) => (
                                  <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.4,
                                      delay: pIndex * 0.12,
                                    }}
                                    onClick={() => {
                                      if (project.name.includes('Pure')) {
                                        window.open('https://pureyou.jewelry/', '_blank', 'noopener,noreferrer');
                                      }
                                    }}
                                    whileHover={{ scale: 1.015 }}
                                    className="relative overflow-hidden rounded-2xl border bg-card/70 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.03]"
                                  >
                                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10"  />

                                    <div className="relative">
                                      <div className="mb-3 flex items-start justify-between gap-4">
                                        <h4 className="text-lg font-semibold md:text-xl">
                                          {project.name}
                                        </h4>

                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary"
                                          />
                                      </div>

                                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                      </p>

                                      <div className="mb-5 flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                          <motion.div
                                            key={t}
                                            whileHover={{ y: -3, scale: 1.05 }}
                                          >
                                            <Badge
                                              variant="secondary"
                                              className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs text-foreground hover:bg-primary hover:text-primary-foreground"
                                            >
                                              {t}
                                            </Badge>
                                          </motion.div>
                                        ))}
                                      </div>

                                      <ul className="space-y-2.5">
                                        {project.highlights.map(
                                          (highlight, hIndex) => (
                                            <motion.li
                                              key={hIndex}
                                              initial={{ opacity: 0, x: -15 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{
                                                delay:
                                                  pIndex * 0.1 + hIndex * 0.05,
                                              }}
                                              className="flex items-start gap-3 text-sm text-muted-foreground"
                                            >
                                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow shadow-primary" />
                                              <span>{highlight}</span>
                                            </motion.li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}