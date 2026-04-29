import { motion } from "framer-motion";
import { Link } from "wouter";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: typeof PORTFOLIO_DATA.projects[0];
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`#${project.id}`} className="group block h-full">
        <div className="relative h-full rounded-2xl bg-card p-6 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:border-border overflow-hidden">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
            {project.description}
          </p>
          <div className="mt-auto">
            {project.domain && (
              <span className="inline-block bg-secondary text-secondary-foreground text-[11px] font-mono px-2.5 py-1 rounded-md">
                {project.domain}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}