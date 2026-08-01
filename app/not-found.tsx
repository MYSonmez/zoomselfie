import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[75svh] flex-col items-center justify-center py-32 text-center">
      <p className="text-xs font-black uppercase tracking-[.22em] text-primary">404</p>
      <h1 className="mt-4 text-5xl font-extrabold tracking-[-.06em] sm:text-7xl">This moment isn’t here.</h1>
      <p className="mt-5 max-w-xl text-muted-foreground">The page may have moved. Return to ZoomSelfie and continue exploring.</p>
      <Link href="/" className="mt-8 rounded-full bg-primary px-7 py-3 text-sm font-bold text-black">Back to home</Link>
    </section>
  );
}
