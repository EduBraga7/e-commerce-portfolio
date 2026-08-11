import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="mb-6 rounded-full bg-muted p-6 text-muted-foreground">
        <FileQuestion className="h-12 w-12" />
      </div>
      <h2 className="mb-2 text-4xl font-extrabold tracking-tight">404</h2>
      <h3 className="mb-4 text-2xl font-bold tracking-tight">Page Not Found</h3>
      <p className="mb-8 text-muted-foreground max-w-md">
        Could not find requested resource. The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  );
}
