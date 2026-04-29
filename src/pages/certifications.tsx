import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <PageTransition className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-5 pt-8 pb-16 md:pt-14">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">All Certifications</h1>
          </div>
          <ThemeToggle />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground max-w-2xl mb-8"
        >
          Continuous learning and professional validation in cloud architecture, security, and modern development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              key={cert.id}
              className="group p-4 rounded-xl border border-border/60 bg-card hover:border-border hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-between gap-3 cursor-default"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">{cert.date}</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </PageTransition>
  );
}
