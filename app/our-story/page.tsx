import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/luxury/section-heading";
import { FadeIn } from "@/components/luxury/fade-in";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Generations of Winter Harbor lobstermen. Cold water, hand selection, and full traceability.",
};

const pillars = [
  {
    title: "Cold-Water Perfection",
    body: "Water temperatures in Winter Harbor rarely exceed 48°F. Slower growth means denser, sweeter meat—the foundation of our premium grade.",
  },
  {
    title: "Hand-Selected",
    body: "Every lobster is individually inspected at the pier. We reject roughly 60% of market-grade catch. Only the exceptional ships under our seal.",
  },
  {
    title: "Full Traceability",
    body: "QR-coded batches link your order to boat, captain, harvest date, and water temperature. Download your Certificate of Authenticity with every purchase.",
  },
];

export default function OurStoryPage() {
  return (
  <>
      <section className="relative flex min-h-[60vh] items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=85"
            alt="Winter Harbor coastline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-harbor-deep/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="luxury-label mb-4">Our Story</p>
          <h1 className="luxury-heading max-w-3xl text-5xl md:text-6xl">
            Four Generations on the Same Waters
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-serif text-xl leading-relaxed text-harbor-mist md:text-2xl">
              Winter Harbor Blue began when Elias Whitmore&apos;s grandfather
              started grading lobsters by hand on Pier 3—rejecting anything that
              wouldn&apos;t meet his own table. That standard never changed.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 space-y-6 text-harbor-mist">
            <p className="leading-relaxed">
              Today we serve Michelin-starred restaurants, luxury hotels, and
              private clients who understand that provenance is not marketing—it
              is the product. Our lobsters are not commodities. They are
              appointments with a place, a season, and a captain&apos;s eye.
            </p>
            <p className="leading-relaxed">
              We built this brand for chefs who need consistency, for gift
              buyers who need a story, and for anyone who believes that the
              finest ingredient deserves the finest chain of custody.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-harbor-gold/10 bg-harbor-navy/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Why We&apos;re Different"
            title="Three Pillars of Excellence"
            align="center"
          />
          <div className="grid gap-12 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1} className="text-center">
                <div className="mx-auto mb-6 h-px w-12 bg-harbor-gold" />
                <h3 className="font-serif text-2xl text-harbor-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-harbor-mist">
                  {pillar.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85"
                  alt="Lobsterman at work on the dock"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="luxury-label mb-4">The Harbor</p>
              <h2 className="luxury-heading text-4xl">
                A Place, Not a Product Line
              </h2>
              <p className="mt-6 leading-relaxed text-harbor-mist">
                Winter Harbor is not a brand fiction. It is a working waterfront
                in Downeast Maine where fog, granite, and cold Atlantic current
                shape every harvest. When you serve our lobster, you serve that
                place—and we make sure you can prove it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/lobstermen">Meet the Lobstermen</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/traceability">Trace Your Batch</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
