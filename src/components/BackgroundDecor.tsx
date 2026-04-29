export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Dynamic Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Floating Plus Accents */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-overlay">
        <div className="absolute top-20 left-[15%] text-foreground/50 text-xs font-mono tracking-widest">+</div>
        <div className="absolute top-40 right-[25%] text-foreground/50 text-xs font-mono tracking-widest">+</div>
        <div className="absolute top-[40%] left-[5%] text-foreground/50 text-xs font-mono tracking-widest">+</div>
        <div className="absolute bottom-[30%] right-[10%] text-foreground/50 text-xs font-mono tracking-widest">+</div>
        <div className="absolute bottom-20 left-[20%] text-foreground/50 text-xs font-mono tracking-widest">+</div>
      </div>

      {/* Static beautiful gradients for zero-lag background */}
      <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-blue-400/10 via-purple-400/5 to-transparent blur-[80px] dark:from-blue-600/10 dark:via-purple-600/5 rounded-full" />
      <div className="absolute top-[20%] -left-64 w-[600px] h-[600px] bg-blue-300/10 dark:bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute top-[50%] -right-64 w-[600px] h-[600px] bg-purple-300/10 dark:bg-purple-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-200/10 dark:bg-pink-600/5 blur-[120px] rounded-full" />

      {/* Noise filter */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
