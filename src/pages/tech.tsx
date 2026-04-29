import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <PageTransition className="min-h-screen bg-background flex flex-col">
      <div className="max-w-4xl mx-auto px-5 pt-8 pb-16 md:pt-14 flex-1 w-full">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">All Tech Stack</h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-10">
          {Object.entries(PORTFOLIO_DATA.allTechStack).map(([category, items], idx) => (
            <motion.section 
              key={category}
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.05 }}
            >
              <h2 className="text-lg font-bold text-foreground mb-4 tracking-tight">{category}</h2>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span key={item} className="px-3.5 py-1.5 bg-background text-foreground text-[13px] font-medium rounded-sm border border-border/80 shadow-sm hover:border-primary/50 hover:bg-secondary/30 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
