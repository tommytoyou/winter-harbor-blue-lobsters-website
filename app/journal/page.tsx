import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/luxury/section-heading";
import { FadeIn } from "@/components/luxury/fade-in";
import stories from "@/content/stories.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories on sustainability, recipes, and life on the Winter Harbor waterfront.",
};

export default function JournalPage() {
  return (
    <>
      <section className="border-b border-harbor-gold/10 pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Journal"
            title="Stories from the Harbor"
            description="CMS-ready content—connect Sanity or Contentful to replace static JSON."
            className="mb-0"
          />
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {stories.map((story, i) => (
              <FadeIn key={story.slug} delay={i * 0.08}>
                <Link
                  href={`/journal/${story.slug}`}
                  className="group luxury-card block overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="luxury-label">{story.category}</p>
                    <h2 className="mt-3 font-serif text-2xl text-harbor-white transition-colors group-hover:text-harbor-gold">
                      {story.title}
                    </h2>
                    <p className="mt-3 text-sm text-harbor-mist">
                      {story.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-harbor-mist/60">
                      {story.date} · {story.readTime}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
