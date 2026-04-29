import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ICONS = {
  linkedin: FaLinkedin,
  github: SiGithub,
  instagram: FaInstagram,
};

export function ContactBlock() {
  const { memberOf, socialLinks, quickLinks } = PORTFOLIO_DATA.contactBlock;

  return (
    <section className="mt-10">
      <div className="bg-card/40 border border-border/40 shadow-sm rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-10 justify-between relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        {/* Left Section: Affiliations & Socials */}
        <div className="flex-1 space-y-10 relative z-10">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">A member of</h4>
            <div className="flex flex-wrap gap-2.5">
              {memberOf.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-border/60 bg-background/40 hover:bg-background hover:text-foreground text-muted-foreground hover:border-border transition-all group"
                >
                  <span>{m.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border/60 bg-background/40 hover:bg-background hover:text-foreground text-muted-foreground hover:border-border transition-all hover:-translate-y-0.5 hover:shadow-sm"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section: Quick Links */}
        <div className="md:w-[22rem] w-full flex flex-col gap-3 relative z-10">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 md:hidden">Quick Links</h4>
          {quickLinks.map((q) => (
            <a
              key={q.label}
              href={q.href}
              {...(q.download ? { download: true } : {})}
              className="flex items-center justify-between p-4 rounded-2xl border border-border/60 bg-background/40 hover:bg-background hover:border-border transition-all group hover:shadow-sm"
            >
              <div className="flex flex-col overflow-hidden">
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">{q.subLabel}</span>
                <span className="text-sm font-medium text-foreground truncate">{q.value}</span>
              </div>
              <div className="w-9 h-9 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors ml-4">
                <ArrowUpRight className="w-4 h-4 text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
