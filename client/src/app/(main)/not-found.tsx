import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center py-20 px-4">
      <Container className="max-w-md mx-auto text-center">
        <div className="w-32 h-32 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative">
          <FileQuestion size={64} strokeWidth={1.5} className="relative z-10" />
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl z-0" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold text-primary mb-6">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-10 text-lg">
          We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist anymore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            variant="accent"
            className="gap-2 px-8"
          >
            <Link href="/">
              <Home size={18} />
              Return Home
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
