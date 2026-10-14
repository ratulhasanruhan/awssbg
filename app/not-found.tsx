import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-[70vh] items-center px-4 pt-24 sm:px-6">
      <div className="blueprint blueprint-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-sm text-aws-orange">404 · ResourceNotFoundException</p>
        <h1 className="mt-4 text-5xl text-white sm:text-6xl">This page isn&apos;t deployed.</h1>
        <p className="mt-5 max-w-lg text-dim">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex bg-aws-orange px-5 py-3 text-sm font-bold text-void">Back to home</Link>
      </div>
    </main>
  );
}
