import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[52px] h-[28px]" />; // Placeholder to avoid layout shift

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-[28px] w-[52px] cursor-pointer active:scale-95 items-center rounded-sm bg-secondary transition-all focus:outline-none border border-border/60 hover:border-border overflow-hidden shadow-sm group"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          x: isDark ? 26 : 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex items-center justify-center h-[22px] w-[22px] rounded-[2px] bg-background shadow-sm border border-border/40 group-hover:shadow-md transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Moon className="h-3.5 w-3.5 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              <Sun className="h-3.5 w-3.5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}