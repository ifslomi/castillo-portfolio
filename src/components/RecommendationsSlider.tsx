import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function RecommendationsSlider() {
  const items = PORTFOLIO_DATA.recommendations;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (items.length === 0) return null;

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + items.length) % items.length);
  };

  const item = items[index];

  return (
    <section className="relative p-5 rounded-2xl bg-secondary/60 border border-border/50 overflow-hidden">
      <div className="absolute top-3 left-4 text-3xl text-muted-foreground/30 font-serif leading-none">"</div>

      <div className="relative min-h-[170px] pt-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.blockquote
            key={item.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <p className="text-xs italic text-muted-foreground leading-relaxed mb-4 pl-3">
              {item.quote}
            </p>
            <footer className="pl-3">
              <div className="text-xs font-semibold text-foreground">{item.author}</div>
              {item.role && <div className="text-[11px] text-muted-foreground">{item.role}</div>}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/40">
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-foreground" : "w-1.5 bg-border hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to recommendation ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={() => goTo(index - 1)}
            className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Previous recommendation"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center hover:bg-background transition-colors"
            aria-label="Next recommendation"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
