import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <PageTransition className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-5 pt-8 pb-16 md:pt-14">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">Experience & Education</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-16">

          {/* Experience */}
          <section>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-lg font-bold mb-6 text-foreground">
              Experience
            </motion.h2>
            <div className="space-y-10 border-l border-border/60 pl-6 ml-2">
              {PORTFOLIO_DATA.experience.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  key={item.id}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-sm border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 mb-2">
                    <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-md w-fit">{item.period}</span>
                  </div>
                  <p className="text-sm text-foreground/80 font-medium mb-4">{item.company}</p>

                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                          <span className="text-[13px]">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg font-bold mb-6 text-foreground">
              Education
            </motion.h2>
            <div className="space-y-6 border-l border-border/60 pl-6 ml-2">
              {PORTFOLIO_DATA.education.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  key={item.id}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-sm border-2 border-border bg-background" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="font-semibold text-base text-foreground">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.company}</p>
                  {item.note && <p className="text-xs italic text-muted-foreground/70 mt-1">{item.note}</p>}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
