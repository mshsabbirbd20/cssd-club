import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 pt-[108px] text-center sm:px-6 sm:pt-[118px]">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-deep">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-deep sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-cyan-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,110,154,0.28)] transition hover:bg-deep"
      >
        Back to home
      </Link>
    </div>
  );
}
