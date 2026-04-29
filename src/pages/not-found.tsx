import { PageTransition } from "@/components/PageTransition";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <PageTransition className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-serif font-bold text-primary">404</h1>
      </div>
      <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Page not found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
        <ArrowLeft className="w-4 h-4" /> Return to Home
      </Link>
    </PageTransition>
  );
}