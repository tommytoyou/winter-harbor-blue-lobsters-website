import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="luxury-label mb-4">404</p>
      <h1 className="font-serif text-4xl text-harbor-white">Lost at Sea</h1>
      <p className="mt-4 text-harbor-mist">This page could not be found.</p>
      <Button asChild className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
