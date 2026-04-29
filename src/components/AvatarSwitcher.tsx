import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

/**
 * Profile picture that crossfades smoothly whenever the user toggles
 * between light and dark mode.
 */
export function AvatarSwitcher({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const { avatarLight, avatarDark, name } = PORTFOLIO_DATA.personal;

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = !mounted
    ? avatarLight
    : resolvedTheme === "dark"
      ? avatarDark
      : avatarLight;

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        <motion.img
          key={src}
          src={src}
          alt={name}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover rounded-inherit"
        />
      </AnimatePresence>
    </div>
  );
}
