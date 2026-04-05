import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-primary/20 font-display mb-4">404</div>
        <h1 className="text-2xl font-bold text-text mb-3">Page Not Found</h1>
        <p className="text-text-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
