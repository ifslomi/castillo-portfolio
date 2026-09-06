import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Images, Monitor, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

type Project = typeof PORTFOLIO_DATA.projects[0];

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"images" | "live">("images");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (project) {
      setActiveTab("images");
      setActiveImageIndex(0);
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex h-[min(90vh,900px)] max-h-[calc(100dvh-1.5rem)] w-[min(95vw,1600px)] max-w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
          >
            <div className="flex shrink-0 flex-col gap-4 border-b border-border/50 bg-card/50 p-4 backdrop-blur sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 pr-2">
                  <h2 className="text-lg font-bold text-foreground sm:text-xl">{project.title}</h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="Close project preview"
                >
                  <X className="h-5 w-5" />
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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
                  >
                    Visit Site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-muted/30">
              {activeTab === "images" ? (
                <div className="flex h-full w-full items-center justify-center p-3 sm:p-6">
                  <div className="flex h-full min-h-0 w-full max-w-6xl flex-col gap-3 sm:gap-4">
                    <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-background/70 p-2 sm:p-4">
                      <img
                        src={project.imageGallery[activeImageIndex]}
                        alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                      {project.imageGallery.length > 1 && (
                        <>
                          <button
                            onClick={() => setActiveImageIndex((index) => (index - 1 + project.imageGallery.length) % project.imageGallery.length)}
                            className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background sm:left-3"
                            aria-label="Previous project image"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setActiveImageIndex((index) => (index + 1) % project.imageGallery.length)}
                            className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-md backdrop-blur transition-colors hover:bg-background sm:right-3"
                            aria-label="Next project image"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                    {project.imageGallery.length > 1 && (
                      <div className="flex shrink-0 gap-2 overflow-x-auto pb-1" aria-label="Project screenshots">
                        {project.imageGallery.map((image, index) => (
                          <button
                            key={image}
                            onClick={() => setActiveImageIndex(index)}
                            className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-colors sm:h-20 sm:w-32 ${index === activeImageIndex ? "border-primary" : "border-border/60 hover:border-border"}`}
                            aria-label={`View project image ${index + 1}`}
                          >
                            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : project.link && !(project as any).hideIframe ? (
                <iframe
                  src={project.link}
                  title={project.title}
                  className="h-full w-full border-none bg-background"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-card p-6 text-center text-muted-foreground">
                  <ExternalLink className="mb-2 h-10 w-10 opacity-20" />
                  <h3 className="font-semibold text-foreground">Preview Not Available</h3>
                  <p className="max-w-sm text-sm">This website has security policies that prevent it from being previewed here. Please click the button above to visit the live site directly.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
