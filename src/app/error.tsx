"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="mb-6 rounded-full bg-destructive/10 p-6 text-destructive">
        <AlertTriangle className="h-12 w-12" />
      </div>
      <h2 className="mb-2 text-3xl font-bold tracking-tight">Something went wrong!</h2>
      <p className="mb-8 text-muted-foreground max-w-md">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
