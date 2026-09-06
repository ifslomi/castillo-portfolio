import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA.projects[0] | null>(null);

  const openProject = (project: typeof PORTFOLIO_DATA.projects[0]) => {
    setSelectedProject(project);
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
      <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </PageTransition>
  );
}
