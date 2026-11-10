"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, RefreshCcw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
      <Container className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <AlertCircle size={48} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">Something went wrong</h1>
        
        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. An unexpected error has occurred on our end. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={reset}
            variant="default"
            className="gap-2"
          >
            <RefreshCcw size={18} />
            Try Again
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="gap-2"
          >
            <Link href="/">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
