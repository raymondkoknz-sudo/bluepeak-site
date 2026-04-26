import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, BookOpen, Share2, MapPin, Mail, Newspaper, FileText, Megaphone } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-background">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 text-center lg:text-left"
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                The BluePeak™ Home Service Growth System
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Grow your pipeline <br className="hidden lg:block"/>
                <span className="text-primary">without the stress</span> of marketing.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                We help home service companies grow with weekly content that builds trust and drives leads—without having to write anything themselves.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
                  View Our Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={teamImg}
                  alt="Home service professional team"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent"></div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-secondary">Zero Writing Required</p>
                    <p className="text-sm text-muted-foreground">100% Done-For-You</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Is BluePeak */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="container px-4 md:px-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Is BluePeak™?</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-8 mx-auto"></div>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed mb-8">
            BluePeak™ is a done-for-you content system built specifically for home service companies that want to grow without wasting time on marketing. We help businesses become more visible online, build trust locally, and stay top-of-mind with customers through strategic written content.
          </p>
          <p className="text-base md:text-lg text-secondary-foreground/70 leading-relaxed mb-8">
            Whether you run an HVAC company, plumbing business, roofing company, pest control service, landscaping team, electrical company, or another local service brand, BluePeak™ helps turn overlooked businesses into in-demand local names.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["HVAC", "Plumbing", "Roofing", "Pest Control", "Landscaping", "Electrical", "& More"].map((vertical) => (
              <span
                key={vertical}
                className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-white"
              >
                {vertical}
              </span>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-secondary-foreground/5 border border-white/10 text-center">
            <p className="text-lg text-secondary-foreground/90">
              We combine <span className="font-semibold text-white">AI-powered efficiency</span>, <span className="font-semibold text-white">expert-written content</span>, and <span className="font-semibold text-white">local-market strategy</span> to help you grow consistently—without having to write a single word yourself.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The 7-Layer Content Engine */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The 7 Levers of BluePeak™
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-6 mx-auto"></div>
            <p className="text-lg text-muted-foreground">
              Each lever is a content asset or distribution strategy designed to help home service companies become more visible, more trusted, and more booked in their local market—without having to create the marketing themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "1. The Expert Article Engine™",
                desc: "Weekly 500–800 word search-friendly articles built around real customer searches, local keywords, and high-intent questions.",
                packages: ["Core", "Authority", "Elite"],
                href: "/services#core"
              },
              {
                icon: <Share2 className="h-8 w-8" />,
                title: "2. Social Snippet Stack™",
                desc: "Each article broken into 4–6 educational social posts for Facebook, Instagram, or LinkedIn.",
                packages: ["Core", "Authority", "Elite"],
                href: "/services#core"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "3. Local SEO Asset Stack™",
                desc: "Geo-targeted pages and articles like 'Best [service] in [city]' designed to rank in your service areas.",
                packages: ["Core", "Authority", "Elite"],
                href: "/services#core"
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "4. Weekly Email Echo™",
                desc: "One weekly email that keeps leads warm and past customers engaged.",
                packages: ["Core", "Authority", "Elite"],
                href: "/services#core"
              },
              {
                icon: <Newspaper className="h-8 w-8" />,
                title: "5. Trust Builder Newsletter™",
                desc: "Branded monthly newsletters with tips, updates, seasonal advice, and featured content.",
                packages: ["Authority", "Elite"],
                href: "/services#authority"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "6. Lead Magnet Writer™",
                desc: "Downloadable PDFs and free guides (homeowner checklists, buying guides) to grow the email list.",
                packages: ["Elite"],
                href: "/services#elite"
              },
              {
                icon: <Megaphone className="h-8 w-8" />,
                title: "7. Authority Press Release™",
                desc: "Polished press releases distributed to 400+ media outlets and authority websites for credibility.",
                packages: ["Authority", "Elite"],
                href: "/services#authority"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground flex-1">{feature.desc}</p>
                <div className="mt-6 pt-6 border-t border-border w-full">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Included in</div>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {feature.packages.map((pkg) => (
                      <span
                        key={pkg}
                        className={
                          pkg === "Authority"
                            ? "inline-flex items-center rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-xs font-semibold"
                            : "inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-1 text-xs font-semibold"
                        }
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                  <Link href={feature.href} className="inline-flex items-center justify-center text-sm font-semibold text-primary hover:gap-2 gap-1 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why & How It Works */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Why It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-secondary mb-4">Why It Works</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-8 mx-auto"></div>
              <ul className="space-y-6 max-w-md mx-auto">
                {[
                  "Builds trust through consistent, professional content",
                  "Keeps your business visible on Google, in inboxes, and across social media",
                  "Requires zero writing, planning, or brainstorming from the client",
                  "Helps turn overlooked companies into trusted local names",
                  "Combines AI efficiency with expert polish and local-market strategy"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-left">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-secondary/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-secondary mb-4">How It Works</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-8 mx-auto"></div>
              <div className="space-y-8 max-w-md mx-auto">
                {[
                  { title: "Choose Your Package & Onboard", desc: "Select your plan and complete a short onboarding form" },
                  { title: "Writing & Delivery", desc: "We create and deliver your weekly and monthly content assets" },
                  { title: "Monthly Check-Ins", desc: "We review performance, refine strategy, and double down on what works" },
                  { title: "You Stay Focused on the Work", desc: "While BluePeak™ keeps your marketing moving consistently" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 text-left">
                    <div className="h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="container px-4 md:px-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to go from overlooked to in-demand?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            See our transparent pricing and choose the package that fits your growth goals.
          </p>
          <Link href="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors bg-white text-primary hover:bg-white/90 h-14 px-10">
            View Services & Pricing
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
