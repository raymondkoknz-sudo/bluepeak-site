import { Button } from "@/components/ui/button";
import { Target, Search, ArrowUpRight, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const t = window.setTimeout(tryScroll, 100);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-secondary text-secondary-foreground text-center overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center"
          >
            <div className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary-foreground border border-primary/30">
              Why We Exist
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Most home service companies are excellent at delivering results—but struggle to stay visible, build trust, or stand out online.
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              They're told to post on social media, figure out SEO, ask for reviews, and somehow market the business while still running jobs and managing staff. BluePeak™ exists to fix that. We help home service companies attract more customers with consistent, done-for-you content—so they grow their reputation and pipeline without the stress of doing marketing themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-20 bg-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="container px-4 md:px-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-secondary leading-snug">
            "We help home service companies attract more customers by writing the content they need to rank locally, stay top-of-mind, and build trust—without having to write a single word themselves."
          </h2>
        </motion.div>
      </section>

      {/* About Copy — what we deliver */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">What We Deliver</h2>
            <div className="h-1 w-16 bg-primary rounded-full !mt-3 mx-auto"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BluePeak™ is a done-for-you content system built specifically for home service companies such as HVAC, plumbing, roofing, pest control, landscaping, electrical, and cleaning businesses. We create <span className="font-semibold text-secondary">educational blog posts, local SEO pages, social content, emails, lead magnets, and website copy</span> that position you as the trusted expert in your market.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our 7-layer writing system is designed to help you rank locally, stay top-of-mind with prospects, and generate more booked jobs—without marketing guesswork or wasting time creating content yourself. <span className="font-semibold text-secondary">We write it all. You stay focused on running the business.</span>
            </p>
            <div className="pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Industries we serve</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {["HVAC", "Plumbing", "Roofing", "Pest Control", "Landscaping", "Electrical", "Cleaning", "& More"].map((vertical) => (
                  <span
                    key={vertical}
                    className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary"
                  >
                    {vertical}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UVP Grid */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Who it's for",
                desc: "Home service companies and local service-based businesses."
              },
              {
                icon: <Search className="h-8 w-8" />,
                title: "The Problem",
                desc: "Lack of visibility, inconsistent marketing, weak lead flow, and low local authority."
              },
              {
                icon: <ArrowUpRight className="h-8 w-8" />,
                title: "The Transformation",
                desc: "Go from overlooked to in-demand—with blog posts, SEO pages, social content, and emails that build trust and generate inbound leads."
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "What makes it different",
                desc: "A complete 7-layer writing system built exclusively for home service companies, combining AI efficiency with expert polish and local-market strategy."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="text-primary text-6xl font-serif mb-6">"</div>
          <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            We help home service companies grow with weekly content that builds trust and drives leads—without having to write anything themselves.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Let's talk about growing your business.
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground mb-10">
              Not sure which package fits? We'll gladly point you in the right direction.
              Send us an email and we'll get back to you shortly.
            </p>

            <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-sm inline-flex flex-col items-center gap-6 w-full max-w-xl">
              <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="h-7 w-7" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Email Us
                </p>
                <a
                  href="mailto:hello@bluepeakdigital.co"
                  className="text-2xl md:text-3xl font-bold text-primary hover:underline break-all"
                >
                  hello@bluepeakdigital.co
                </a>
              </div>

              <Button
                asChild
                className="h-12 px-8 text-base font-semibold"
              >
                <a href="mailto:hello@bluepeakdigital.co">
                  Send Us an Email
                </a>
              </Button>

              <p className="text-sm text-muted-foreground italic">
                We typically respond within 1 business day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
