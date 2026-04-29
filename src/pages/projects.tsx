import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA.projects[0] | null>(null);

  return (
    <PageTransition className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-5 pt-8 pb-16 md:pt-14">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">All Projects</h1>
          </div>
          <ThemeToggle />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground max-w-2xl mb-8"
        >
          A comprehensive list of web applications, platforms, and tools I've built or contributed to.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <button onClick={() => setSelectedProject(project)} className="group block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                <div className="relative h-full rounded-xl bg-card p-5 border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-border overflow-hidden">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-5">{project.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {project.domain && (
                      <span className="inline-block bg-secondary text-secondary-foreground text-[10px] font-mono px-2.5 py-1 rounded-md">{project.domain}</span>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] text-muted-foreground border border-border/60 px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-[95vw] max-w-[1600px] h-[90vh] bg-card border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/50 shrink-0 bg-card/50 backdrop-blur z-10">
                <div className="pr-4">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">{selectedProject.title}</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Visit Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-muted/30 relative w-full h-full overflow-hidden">
                {selectedProject.link && !(selectedProject as any).hideIframe ? (
                  <iframe
                    src={selectedProject.link}
                    title={selectedProject.title}
                    className="w-full h-full border-none bg-background"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground flex-col gap-3 p-6 text-center bg-card">
                    <ExternalLink className="w-10 h-10 opacity-20 mb-2" />
                    <h3 className="font-semibold text-foreground">Preview Not Available</h3>
                    <p className="text-sm max-w-sm">This website has security policies that prevent it from being previewed here. Please click the button above to visit the live site directly.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
