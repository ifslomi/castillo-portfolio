import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, X, ExternalLink, Images, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA.projects[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "live">("images");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openProject = (project: typeof PORTFOLIO_DATA.projects[0]) => {
    setSelectedProject(project);
    setActiveTab("images");
    setActiveImageIndex(0);
  };

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
          A comprehensive list of web applications, platforms, and tools I've built or contributed to. If you'd like access to a private project, email me and I can let you try it.
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
              <button onClick={() => openProject(project)} className="group block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                <div className="relative h-full rounded-xl bg-card p-5 border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-border overflow-hidden">
                  {project.imageGallery.length > 0 && (
                    <div className="relative -mx-5 -mt-5 mb-5 aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={project.imageGallery[0]}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      {project.imageGallery.length > 1 && (
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                          <Images className="h-3 w-3" /> {project.imageGallery.length} images
                        </span>
                      )}
                    </div>
                  )}
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
              <div className="flex flex-col gap-4 p-4 sm:p-6 border-b border-border/50 shrink-0 bg-card/50 backdrop-blur z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">{selectedProject.title}</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0"
                    aria-label="Close project preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex rounded-lg border border-border/60 bg-secondary/50 p-1" role="tablist" aria-label="Project preview mode">
                    <button
                      onClick={() => setActiveTab("images")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "images" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                      role="tab"
                      aria-selected={activeTab === "images"}
                    >
                      <Images className="h-3.5 w-3.5" /> Images
                    </button>
                    <button
                      onClick={() => setActiveTab("live")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${activeTab === "live" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                      role="tab"
                      aria-selected={activeTab === "live"}
                    >
                      <Monitor className="h-3.5 w-3.5" /> Live
                    </button>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
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
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-muted/30 relative w-full h-full overflow-hidden">
                {activeTab === "images" ? (
                  <div className="h-full w-full overflow-y-auto p-4 sm:p-6">
                    <div className="mx-auto flex min-h-full max-w-6xl flex-col gap-4">
                      <div className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/70 p-2 sm:p-4">
                        <img
                          src={selectedProject.imageGallery[activeImageIndex]}
                          alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                          className="max-h-[58vh] w-full object-contain"
                        />
                        {selectedProject.imageGallery.length > 1 && (
                          <>
                            <button
                              onClick={() => setActiveImageIndex((index) => (index - 1 + selectedProject.imageGallery.length) % selectedProject.imageGallery.length)}
                              className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background"
                              aria-label="Previous project image"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setActiveImageIndex((index) => (index + 1) % selectedProject.imageGallery.length)}
                              className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background"
                              aria-label="Next project image"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                      {selectedProject.imageGallery.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Project screenshots">
                          {selectedProject.imageGallery.map((image, index) => (
                            <button
                              key={image}
                              onClick={() => setActiveImageIndex(index)}
                              className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-colors sm:h-20 sm:w-32 ${index === activeImageIndex ? "border-primary" : "border-border/60 hover:border-border"}`}
                              aria-label={`View project image ${index + 1}`}
                            >
                              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : selectedProject.link && !(selectedProject as any).hideIframe ? (
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
