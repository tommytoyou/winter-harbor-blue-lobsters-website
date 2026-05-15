import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import stories from "@/content/stories.json";
import { storyBodies } from "@/content/story-body";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return { title: "Not Found" };
  return { title: story.title, description: story.excerpt };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const paragraphs = storyBodies[slug] ?? [story.excerpt];

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="luxury-label">{story.category}</p>
        <h1 className="mt-4 font-serif text-4xl text-harbor-white md:text-5xl">
          {story.title}
        </h1>
        <p className="mt-4 text-sm text-harbor-mist">
          {story.author} · {story.date} · {story.readTime}
        </p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="prose-harbor mt-12 space-y-6">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-harbor-mist">
              {p}
            </p>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-12">
          <Link href="/journal">← Back to Journal</Link>
        </Button>
      </div>
    </article>
  );
}
