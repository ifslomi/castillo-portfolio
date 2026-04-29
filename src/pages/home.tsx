import { useRef, useState, useEffect, useCallback } from "react";
import { PageTransition } from "@/components/PageTransition";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { AvatarSwitcher } from "@/components/AvatarSwitcher";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { RecommendationsSlider } from "@/components/RecommendationsSlider";
import { ContactBlock } from "@/components/ContactBlock";
import { Link } from "wouter";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  MapPin,
  Calendar,
  FileText,
  Trophy,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  BadgeCheck,
  X,
  ExternalLink,
} from "lucide-react";

function EngineerCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-[4/5] rounded-[1.75rem] bg-[#0a0a0a] text-white p-6 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl transition-shadow hover:shadow-2xl"
    >
      {/* Animated grid pattern inside the card */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-56 h-56 bg-purple-500/30 blur-[80px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex justify-between items-start">
        <div className="text-xl font-mono text-white/50 tracking-tighter">{">_"}</div>
        <div className="text-[9px] font-mono tracking-[0.2em] text-white/40 uppercase">ACCESS CARD</div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="relative z-10 flex-1 flex flex-col justify-center my-4">
        <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight">
          FULL STACK<br />ACCESS CARD
        </h3>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex justify-between items-end">
        <div>
          <div className="text-[9px] font-mono tracking-widest text-white/40 mb-1">FOUNDING MEMBER</div>
          <div className="text-base font-bold tracking-tight">JAMES</div>
          <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">DEVELOPER</div>
        </div>
        <div className="w-10 h-10 bg-white/10 rounded-md p-1 flex flex-wrap gap-0.5 opacity-80 mix-blend-overlay">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`w-[calc(25%-2px)] h-[calc(25%-2px)] ${Math.random() > 0.4 ? "bg-white" : "bg-transparent"}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function GalleryModal({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const item = PORTFOLIO_DATA.gallery[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.caption}
            className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
          />
          <div className="mt-4 text-center text-white/70 text-sm">
            <span className="font-mono mr-3 text-white/40">{String(index + 1).padStart(2, "0")} / {String(PORTFOLIO_DATA.gallery.length).padStart(2, "0")}</span>
            {item.caption}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA.projects[0] | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [githubIndex, setGithubIndex] = useState(0);

  const githubAccounts = ["ifjames", "ifslomi", "ifsunreal"];
  const currentGithub = githubAccounts[githubIndex];

  const nextGithub = () => setGithubIndex((prev) => (prev + 1) % githubAccounts.length);
  const prevGithub = () => setGithubIndex((prev) => (prev - 1 + githubAccounts.length) % githubAccounts.length);

  const { personal, highlightPill, about, techStack, projects, experience } = PORTFOLIO_DATA;

  const scrollGallery = (direction: "left" | "right") => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };

  const closeModal = useCallback(() => setModalIndex(null), []);
  const prevImage = useCallback(
    () => setModalIndex((i) => (i === null ? null : (i - 1 + PORTFOLIO_DATA.gallery.length) % PORTFOLIO_DATA.gallery.length)),
    [],
  );
  const nextImage = useCallback(
    () => setModalIndex((i) => (i === null ? null : (i + 1) % PORTFOLIO_DATA.gallery.length)),
    [],
  );

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <PageTransition className="relative min-h-screen bg-background">
      <BackgroundDecor />

      <div className="relative max-w-[1080px] mx-auto px-5 pt-6 pb-16">

        {/* Top bar */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* HEADER */}
        <header className="flex flex-col md:flex-row gap-6 md:gap-8 mb-14 relative">
          {/* Subtle glow behind avatar */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
          >
            <AvatarSwitcher className="w-full h-full" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 dark:ring-white/5 pointer-events-none" />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50">{personal.name}</h1>
                {personal.verified && <BadgeCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-500 shrink-0" />}
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground mb-3 font-medium">
                <MapPin className="w-4 h-4 text-primary/70" /> {personal.location}
              </div>
              <div className="text-sm md:text-base text-foreground/80 font-medium flex flex-wrap gap-2">
                {personal.roles.map((r, i) => (
                  <span key={r} className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs sm:text-sm shadow-sm backdrop-blur">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 rounded-full text-xs font-medium hover:bg-foreground/90 transition-colors shadow-sm">
                  <Calendar className="w-3.5 h-3.5" /> Schedule a Call
                </a>
                <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-1.5 bg-background/80 backdrop-blur border border-border text-foreground px-4 py-2 rounded-full text-xs font-medium hover:bg-secondary transition-colors">
                  <Mail className="w-3.5 h-3.5" /> Send Email
                </a>
                <button onClick={() => setShowResumeModal(true)} className="inline-flex items-center gap-1.5 bg-background/80 backdrop-blur border border-border text-foreground px-4 py-2 rounded-full text-xs font-medium hover:bg-secondary transition-colors">
                  <FileText className="w-3.5 h-3.5" /> View Resume
                </button>
              </div>

              <Link href={highlightPill.href} className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-600 px-3 py-2 rounded-full text-xs font-medium hover:bg-blue-500/20 transition-colors shrink-0 group">
                <Trophy className="w-3.5 h-3.5" /> {highlightPill.label}
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </header>

        {/* BODY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">

          {/* LEFT */}
          <div className="space-y-12">

            {/* About */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-5 border-l-2 border-border/50">
              <div className="absolute top-0 -left-[2px] w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              <h2 className="text-xl font-bold text-foreground mb-4 tracking-tight">About</h2>
              <div className="text-muted-foreground text-[15px] leading-relaxed space-y-4">
                {about.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.section>

            {/* Tech Stack */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-5 border-l-2 border-border/50">
              <div className="absolute top-0 -left-[2px] w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
              <h2 className="text-xl font-bold text-foreground mb-6 tracking-tight">Tech Stack</h2>
              <div className="space-y-6">
                {Object.entries(techStack).map(([category, items]) => (
                  <div key={category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest w-24 shrink-0">{category}</span>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span key={item} className="px-3 py-1.5 bg-secondary/50 backdrop-blur text-secondary-foreground text-xs font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md hover:bg-secondary border border-border/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Recent Projects */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Recent Projects</h2>
                <Link href="/projects" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                  View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative block p-4 rounded-xl bg-card/80 backdrop-blur border border-border/60 hover:border-border hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex justify-between items-start gap-2 mb-1.5">
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="relative text-xs text-muted-foreground line-clamp-1 mb-3">{project.description}</p>
                    {project.domain && (
                      <span className="relative text-[10px] font-mono bg-secondary px-2 py-0.5 rounded text-muted-foreground inline-block">
                        {project.domain}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.section>

            {/* Recent Certifications */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Recent Certifications</h2>
                <Link href="/certifications" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                  View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-2">
                {PORTFOLIO_DATA.certifications.slice(0, 4).map((cert) => (
                  <div key={cert.id} className="group p-3 rounded-lg bg-card/80 backdrop-blur border border-border/40 hover:bg-secondary/60 transition-colors flex items-center justify-between gap-2 relative overflow-hidden">
                    <div>
                      <div className="font-semibold text-foreground text-xs group-hover:translate-x-1 transition-transform">{cert.title}</div>
                      <div className="text-[11px] text-muted-foreground group-hover:translate-x-1 transition-transform delay-75">{cert.issuer}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block" />
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* RIGHT */}
          <div className="space-y-10">

            <div className="perspective-1000 hidden md:block">
              <EngineerCard />
            </div>

            {/* Experience */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Experience</h2>
                <Link href="/experience" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                  More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-4">
                {experience.map((item) => (
                  <div key={item.id} className="group flex gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-4 h-4 rounded bg-foreground text-background flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    </div>
                    <div className="flex-1 group-hover:translate-x-1 transition-transform">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-semibold text-foreground text-xs leading-tight">{item.title}</h4>
                        <span className="text-[10px] text-muted-foreground font-mono shrink-0">{item.period.split(" – ")[1] || item.period}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Education</h2>
                <Link href="/experience" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                  More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((item) => (
                  <div key={item.id} className="group flex gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="w-4 h-4 rounded bg-foreground text-background flex items-center justify-center shadow-sm">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    </div>
                    <div className="flex-1 group-hover:translate-x-1 transition-transform">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-semibold text-foreground text-xs leading-tight">{item.title}</h4>
                        <span className="text-[10px] text-muted-foreground font-mono shrink-0">{item.period.split(" – ")[1] || item.period}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommendations slider */}
            <RecommendationsSlider />

            {/* GitHub Contributions */}
            <section className="mt-8 pt-6 border-t border-border/30">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">GitHub Contributions</h2>
                <div className="flex items-center gap-1.5 bg-secondary/50 rounded-full p-1 border border-border/50">
                  <button onClick={prevGithub} className="w-6 h-6 rounded-full bg-background text-muted-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors shadow-sm">
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <a href={`https://github.com/${currentGithub}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono font-medium text-foreground hover:text-primary transition-colors flex items-center justify-center gap-1 w-[80px]">
                    @{currentGithub}
                  </a>
                  <button onClick={nextGithub} className="w-6 h-6 rounded-full bg-background text-muted-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur p-4 overflow-hidden hover:border-border hover:shadow-md transition-all relative min-h-[160px]">
                <a href={`https://github.com/${currentGithub}`} target="_blank" rel="noopener noreferrer" className="block focus:outline-none h-full">
                  <div className="w-full h-full overflow-x-auto no-scrollbar flex items-center group">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={currentGithub}
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.3 }}
                        src={`https://ghchart.rshah.org/${currentGithub}`} 
                        alt={`${currentGithub}'s GitHub Contribution Graph`} 
                        className="min-w-[700px] w-full object-contain dark:invert dark:hue-rotate-180 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </AnimatePresence>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Gallery */}
        <section className="mt-16 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Gallery</h2>
            <div className="flex gap-1.5">
              <button onClick={() => scrollGallery("left")} className="w-7 h-7 rounded-full border border-border bg-background/60 backdrop-blur flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => scrollGallery("right")} className="w-7 h-7 rounded-full border border-border bg-background/60 backdrop-blur flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div ref={galleryRef} className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3">
            {PORTFOLIO_DATA.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setModalIndex(i)}
                className="w-[240px] sm:w-[300px] shrink-0 snap-start rounded-xl overflow-hidden border border-border/50 group focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Contact Block */}
        <ContactBlock />

      </div>

      <Footer />

      {/* Project Modal */}
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

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowResumeModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-[95vw] max-w-[1000px] h-[90vh] bg-card border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border/50 shrink-0 bg-card/50 backdrop-blur z-10">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">Resume</h2>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <a
                    href={personal.resumeUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                  >
                    Download PDF <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-muted/30 relative w-full h-full overflow-hidden">
                <iframe
                  src={`${personal.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="w-full h-full border-none bg-background"
                  title="Resume"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalIndex !== null && (
          <GalleryModal index={modalIndex} onClose={closeModal} onPrev={prevImage} onNext={nextImage} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

function ArrowUpRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
