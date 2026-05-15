import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import lobstermen from "@/content/lobstermen.json";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return lobstermen.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const person = lobstermen.find((p) => p.id === id);
  if (!person) return { title: "Not Found" };
  return { title: person.name, description: person.bio };
}

export default async function LobstermanProfilePage({ params }: PageProps) {
  const { id } = await params;
  const person = lobstermen.find((p) => p.id === id);
  if (!person) notFound();

  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="luxury-label">{person.boat}</p>
            <h1 className="mt-4 font-serif text-5xl text-harbor-white">
              {person.name}
            </h1>
            <p className="mt-2 text-harbor-gold">{person.title}</p>
            <p className="mt-2 text-sm text-harbor-mist">
              {person.years} years on the water
            </p>
            <blockquote className="mt-8 border-l-2 border-harbor-gold pl-6 font-serif text-xl italic text-harbor-mist">
              &ldquo;{person.quote}&rdquo;
            </blockquote>
            <p className="mt-8 leading-relaxed text-harbor-mist">{person.bio}</p>
            <Button asChild className="mt-10" variant="outline">
              <Link href="/traceability">Trace a Batch from {person.boat}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
