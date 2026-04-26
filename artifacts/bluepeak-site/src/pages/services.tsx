import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Star, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Services() {
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
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Done-for-you content that builds local trust, visibility, and booked jobs.
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80">
              We write the content. You run the business.
            </p>
            <p className="text-base md:text-lg text-secondary-foreground/70 max-w-3xl mx-auto pt-4 border-t border-white/10">
              All packages are powered by the BluePeak™ Home Service Growth System — a 7-lever content framework designed to build trust, visibility, and booked jobs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Core Visibility */}
            <motion.div 
              id="core"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col h-full p-8 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all scroll-mt-32 text-center items-center"
            >
              <div className="mb-6 w-full">
                <h3 className="text-2xl font-bold text-secondary mb-2">Core Visibility</h3>
                <div className="text-3xl font-bold text-primary mb-4">$1,500<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-muted-foreground min-h-[80px]">
                  Perfect for businesses that need a professional online presence without doing the work themselves.
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-1 w-full">
                <div className="font-semibold text-secondary">Features:</div>
                <ul className="space-y-3 max-w-xs mx-auto">
                  {[
                    { text: "2 Expert Articles per month (500–800 words)", label: "Expert Article Engine™" },
                    { text: "4 Social Media Posts per month", label: "Social Snippet Stack™" },
                    { text: "1 Local SEO Page per month", label: "Local SEO Asset Stack™" },
                    { text: "1 Email per month", label: "Weekly Email Echo™" },
                    { text: "Email Support", label: "Questions, updates, and revision requests via email" },
                    { text: "Monthly content delivery summary" }
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-left">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary/80">
                        {feature.text}
                        {feature.label && <span className="block italic text-xs text-muted-foreground mt-0.5">{feature.label}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-border w-full">
                <div className="font-semibold text-secondary mb-2">Best for:</div>
                <p className="text-sm text-muted-foreground">Smaller home-service businesses wanting consistent visibility and credibility.</p>
                <a href="https://forms.gle/WfkmVTEyeTw27LYdA" target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-primary text-primary hover:bg-primary/5 h-12 px-8">
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Authority Growth (Highlighted) */}
            <motion.div 
              id="authority"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full p-8 rounded-2xl border-2 border-primary bg-primary/5 shadow-xl relative transform lg:-translate-y-4 scroll-mt-32 text-center items-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Star className="w-4 h-4 fill-current" /> MOST POPULAR
              </div>
              <div className="mb-6 mt-4 w-full">
                <h3 className="text-2xl font-bold text-secondary mb-2">Authority Growth</h3>
                <div className="text-3xl font-bold text-primary mb-4">$2,500<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-secondary/80 min-h-[80px] font-medium">
                  Our most popular package for businesses ready to grow consistently and look like the trusted local leader.
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-1 w-full">
                <div className="font-semibold text-secondary">Features:</div>
                <ul className="space-y-3 max-w-xs mx-auto">
                  {[
                    { text: "4 Expert Articles per month (500–800 words)", label: "Expert Article Engine™" },
                    { text: "8 Social Media Posts per month", label: "Social Snippet Stack™" },
                    { text: "2 Local SEO Pages per month", label: "Local SEO Asset Stack™" },
                    { text: "2 Emails per month", label: "Weekly Email Echo™" },
                    { text: "1 Newsletter per month", label: "Trust Builder Newsletter™" },
                    { text: "1 Press Release per quarter (400+ site distribution)", label: "Authority Press Release™" },
                    { text: "Priority Email Support", label: "Faster responses for requests, updates, and content guidance" },
                    { text: "Monthly content recommendations" }
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-left">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary/90">
                        {feature.text}
                        {feature.label && <span className="block italic text-xs text-secondary/60 mt-0.5">{feature.label}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-primary/20 w-full">
                <div className="font-semibold text-secondary mb-2">Best for:</div>
                <p className="text-sm text-secondary/80">Growth-minded home-service businesses wanting stronger local presence and steady marketing momentum.</p>
                <a href="https://forms.gle/WfkmVTEyeTw27LYdA" target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Elite Growth */}
            <motion.div 
              id="elite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col h-full p-8 rounded-2xl border border-secondary/30 bg-card shadow-sm hover:shadow-md transition-all scroll-mt-32 relative text-center items-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <ArrowRight className="w-4 h-4" /> AUTHORITY + MORE
              </div>
              <div className="mb-6 mt-4 w-full">
                <h3 className="text-2xl font-bold text-secondary mb-2">Elite Growth</h3>
                <div className="text-3xl font-bold text-primary mb-4">$3,500<span className="text-lg text-muted-foreground font-normal">/month</span></div>
                <p className="text-muted-foreground min-h-[80px]">
                  Built for established businesses wanting premium visibility, authority, and hands-off marketing support.
                </p>
              </div>
              <div className="space-y-4 mb-8 flex-1 w-full">
                <div className="font-semibold text-secondary">Everything in Authority Growth, plus:</div>
                <ul className="space-y-3 max-w-xs mx-auto">
                  {[
                    { text: "1 Press Release per month (400+ media sites)", label: "Authority Press Release™" },
                    { text: "1 Lead Magnet per quarter", label: "Lead Magnet Writer™" },
                    { text: "4 additional Social Posts (12 total per month)", label: "Social Snippet Stack™" },
                    { text: "2 additional Marketing Emails (4 total per month)", label: "Weekly Email Echo™" },
                    { text: "VIP Priority Support", label: "Fastest response times, quicker revisions, and premium client priority" },
                    { text: "Optional monthly Google Meet for strategy/performance review (on request)" },
                    { text: "Monthly content growth plan + expansion recommendations" }
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-left">
                      <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary/80">
                        {feature.text}
                        {feature.label && <span className="block italic text-xs text-muted-foreground mt-0.5">{feature.label}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-6 border-t border-border w-full">
                <div className="font-semibold text-secondary mb-2">Best for:</div>
                <p className="text-sm text-muted-foreground">Established home-service businesses, multi-location companies, and local leaders ready to dominate their market.</p>
                <a href="https://forms.gle/WfkmVTEyeTw27LYdA" target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-primary text-primary hover:bg-primary/5 h-12 px-8">
                  Get Started
                </a>
              </div>
            </motion.div>

          </div>

          {/* Not sure which package fits */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl border border-border bg-card shadow-sm text-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-secondary">Not sure which package fits?</h3>
                <p className="text-muted-foreground mt-1">Tell us a bit about your business and we'll recommend the right tier for you.</p>
              </div>
              <a href="https://forms.gle/GJURFZs6afUKBjsp7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 shrink-0">
                Help Me Choose <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Packages */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Compare Packages</h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-4 mx-auto"></div>
            <p className="text-lg text-muted-foreground">A side-by-side look at exactly what you get in each tier.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto rounded-2xl border border-border shadow-sm"
          >
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="text-left px-4 md:px-6 py-4 font-semibold">Feature</th>
                  <th className="text-center px-4 md:px-6 py-4 font-semibold">
                    Core Visibility
                    <div className="text-xs font-normal text-white/70 mt-1">$1,500/mo</div>
                    <div className="text-xs font-normal italic text-white/60 mt-1">Best for: Solo operators &amp; smaller teams</div>
                  </th>
                  <th className="text-center px-4 md:px-6 py-4 font-semibold bg-primary">
                    Authority Growth
                    <div className="text-xs font-normal text-white/80 mt-1">$2,500/mo</div>
                    <div className="text-xs font-normal italic text-white/70 mt-1">Best for: Growth-minded businesses</div>
                  </th>
                  <th className="text-center px-4 md:px-6 py-4 font-semibold">
                    Elite Growth
                    <div className="text-xs font-normal text-white/70 mt-1">$3,500/mo</div>
                    <div className="text-xs font-normal italic text-white/60 mt-1">Best for: Established &amp; multi-location brands</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Expert Articles", brand: "Expert Article Engine™", core: "2 / mo", authority: "4 / mo", elite: "4 / mo" },
                  { feature: "Social Media Posts", brand: "Social Snippet Stack™", core: "4 / mo", authority: "8 / mo", elite: "12 / mo" },
                  { feature: "Local SEO Pages", brand: "Local SEO Asset Stack™", core: "1 / mo", authority: "2 / mo", elite: "2 / mo" },
                  { feature: "Marketing Emails", brand: "Weekly Email Echo™", core: "1 / mo", authority: "2 / mo", elite: "4 / mo" },
                  { feature: "Newsletter", brand: "Trust Builder Newsletter™", core: "—", authority: "1 / mo", elite: "1 / mo" },
                  { feature: "Press Release", brand: "Authority Press Release™", core: "—", authority: "1 / quarter", elite: "1 / mo" },
                  { feature: "Lead Magnet", brand: "Lead Magnet Writer™", core: "—", authority: "—", elite: "1 / quarter" },
                  { feature: "Email Support", core: "Standard", authority: "Priority", elite: "VIP Priority" },
                  { feature: "Strategy Call", core: "—", authority: "—", elite: "Monthly (on request)" },
                  { feature: "Monthly Reporting", core: "Delivery summary", authority: "Content recommendations", elite: "Growth plan + expansion" }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="px-4 md:px-6 py-4 text-secondary">
                      <div className="font-semibold">{row.feature}</div>
                      {row.brand && <div className="italic text-xs text-muted-foreground mt-0.5">{row.brand}</div>}
                    </td>
                    <td className="text-center px-4 md:px-6 py-4 text-secondary/80">
                      {row.core === "—" ? <span className="text-muted-foreground/50">—</span> : row.core}
                    </td>
                    <td className="text-center px-4 md:px-6 py-4 text-secondary/90 bg-primary/5 font-medium">
                      {row.authority === "—" ? <span className="text-muted-foreground/50">—</span> : row.authority}
                    </td>
                    <td className="text-center px-4 md:px-6 py-4 text-secondary/80">
                      {row.elite === "—" ? <span className="text-muted-foreground/50">—</span> : row.elite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-3">What's included in every package</h2>
            <div className="h-1 w-16 bg-primary rounded-full mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "A done-for-you content system that runs weekly and monthly",
              "High-quality content written by real humans (with AI-assisted efficiency)",
              "Simple onboarding and easy communication",
              "Clear deliverables, no guesswork, no fluff",
              "Content built specifically for home service businesses"
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center gap-4 bg-background p-6 rounded-xl border border-border">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3 text-center">How It Works</h2>
          <div className="h-1 w-16 bg-primary rounded-full mb-16 mx-auto"></div>
          <div className="space-y-12">
            {[
              { title: "Choose Your Package & Onboard", desc: "Select your plan and complete a short onboarding form. We learn your business, voice, and goals." },
              { title: "Content Creation", desc: "We get to work. Our team researches and writes your high-quality content optimized for local search and social engagement." },
              { title: "Monthly Check-Ins", desc: "We review what's working, discuss new services or seasonal offers, and adjust the strategy to maximize your results." },
              { title: "You Stay Focused on the Work", desc: "You run the business, serve your customers, and close the new leads while we handle your consistent marketing presence." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-secondary text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-lg">
                  {i + 1}
                </div>
                <div className="max-w-2xl">
                  <h4 className="text-2xl font-bold text-secondary mb-3">{step.title}</h4>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding & Delivery Timeline */}
      <section className="py-24 bg-secondary text-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Onboarding & Delivery Timeline</h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-4 mx-auto"></div>
            <p className="text-lg text-white/70">From sign-up to a full content engine running in the background — here's exactly what happens.</p>
          </motion.div>

          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary/30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {[
                {
                  marker: "Day 1",
                  title: "You sign up",
                  desc: "Choose a package and complete your onboarding form. Covers your services, voice, target areas, and goals."
                },
                {
                  marker: "Week 1",
                  title: "We build your content brief",
                  desc: "We research your market, plan your first month of topics, and lock in keywords for local search."
                },
                {
                  marker: "Week 2",
                  title: "First content goes live",
                  desc: "Articles, social posts, and SEO pages start publishing on your schedule — no extra input needed from you."
                },
                {
                  marker: "Ongoing",
                  title: "Monthly cadence + check-ins",
                  desc: "Consistent delivery, monthly reporting, and strategy adjustments based on what's driving results."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg mb-4 relative z-10 border-4 border-secondary">
                      {step.marker}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-[260px] md:max-w-none">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-primary rounded-full mb-4 mx-auto"></div>
            <p className="text-lg text-muted-foreground">Quick answers to what most home service owners ask before getting started.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              {
                q: "Is there a long-term contract?",
                a: "No. All packages are month-to-month. We earn your business every month with consistent content and results — not contracts."
              },
              {
                q: "How long until I see results?",
                a: "Most clients start seeing increased website traffic and engagement within 60–90 days. SEO and authority building compound over time, so the biggest gains usually show up in months 4–6."
              },
              {
                q: "How long does onboarding take?",
                a: "About one week. You fill out a simple onboarding form covering your services, voice, and target areas — no calls required — and we start publishing in your second week."
              },
              {
                q: "Do I have to write or approve every piece of content?",
                a: "No. That's the whole point — it's done-for-you. You'll get a simple monthly review so you can flag anything, but most clients let us run with it after the first month."
              },
              {
                q: "What if I want to cancel?",
                a: "Just let us know before your next billing date. No fees, no penalties. You keep all the content, pages, and assets we've created for you."
              },
              {
                q: "Can I switch packages later?",
                a: "Yes. You can upgrade or downgrade at any time as your business needs change."
              }
            ].map((item, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary text-lg">
                  {item.q}
                  <span className="ml-4 text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to dominate your local market?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Let's discuss which package is the right fit for your business goals.
          </p>
          <Link href="/about" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors bg-white text-primary hover:bg-white/90 h-14 px-10">
            Contact Us to Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
