import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});


export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const handleCopy = async (index, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(-1), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  async function onSubmit(values) {
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": "",
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Form submit failed");
      }

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("Netlify form error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "anupchopde06@gmail.com",
      href: "mailto:anupchopde06@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+91 63544 28856",
      href: "tel:+916354428856",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Surat, Gujarat, India",
      href: "https://maps.google.com/?q=Surat,Gujarat,India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-24"
    >
      {/* Background Animation */}
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

      {/* IMPORTANT hidden form for Netlify detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

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
              Contact Me
            </div>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Currently open for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onClick={
                    index === 0 || index === 1
                      ? (e) => {
                        e.preventDefault();
                        handleCopy(index, info.value);
                      }
                      : undefined
                  }
                  initial={{ opacity: 0, x: -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-primary/10 bg-background/75 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20" />

                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.12 }}
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10"
                  >
                    {info.icon}
                  </motion.div>

                  <div className="relative flex-1">
                    <h3 className="mb-1 text-sm font-medium text-muted-foreground">
                      {info.label}
                    </h3>
                    <p className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {info.value}
                    </p>
                  </div>

                  {(index === 0 || index === 1) && (
                    <Copy className="relative mt-1 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                  )}

                  <AnimatePresence>
                    {index === copiedIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.9 }}
                        className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-3xl border border-primary/10 bg-background/75 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 lg:col-span-3"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/10" />

              <h3 className="relative mb-6 text-2xl font-bold text-foreground">
                Send a Message
              </h3>

              <Form {...form}>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="transition-all duration-300 focus-visible:scale-[1.01] focus-visible:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                              className="transition-all duration-300 focus-visible:scale-[1.01] focus-visible:border-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can I help you?"
                            className="min-h-[150px] transition-all duration-300 focus-visible:scale-[1.01] focus-visible:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <AnimatePresence>
                    {sent && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="group min-w-[200px] rounded-full shadow-lg shadow-primary/20"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}