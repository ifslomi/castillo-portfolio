import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const { footer } = PORTFOLIO_DATA;

  return (
    <footer className="relative pt-6 pb-8">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
          <p className="text-[11px] text-muted-foreground/70 font-mono">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
