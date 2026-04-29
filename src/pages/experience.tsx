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
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold mb-8 text-foreground">
              Experience
            </motion.h2>
            <div className="space-y-8 border-l border-border/60 pl-6 ml-1.5">
              {PORTFOLIO_DATA.experience.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  key={item.id}
                  className="relative group"
                >
                  {/* Timeline Box */}
                  <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-[2px] border-[1.5px] border-foreground transition-colors duration-300 ${index === 0 ? 'bg-foreground' : 'bg-background group-hover:bg-foreground/20'}`} />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-[17px] text-foreground leading-snug">{item.title}</h3>
                    <span className="text-[13px] font-medium text-muted-foreground whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-[14px] text-foreground/80 mb-3">{item.company}</p>

                  {item.description && item.description.length > 0 && (
                    <ul className="space-y-2 mt-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground/90 leading-relaxed flex items-start gap-2.5">
                          <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                          <span className="text-[13.5px]">{desc}</span>
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
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-bold mb-8 text-foreground">
              Education
            </motion.h2>
            <div className="space-y-8 border-l border-border/60 pl-6 ml-1.5">
              {PORTFOLIO_DATA.education.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  key={item.id}
                  className="relative group"
                >
                  {/* Timeline Box */}
                  <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-[2px] border-[1.5px] border-foreground transition-colors duration-300 ${index === 0 ? 'bg-foreground' : 'bg-background group-hover:bg-foreground/20'}`} />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-1">
                    <h3 className="font-semibold text-[16px] text-foreground leading-snug">{item.title}</h3>
                    <span className="text-[13px] font-medium text-muted-foreground whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-[14px] text-foreground/80">{item.company}</p>
                  {item.note && <p className="text-[13px] text-muted-foreground mt-1.5">{item.note}</p>}
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
