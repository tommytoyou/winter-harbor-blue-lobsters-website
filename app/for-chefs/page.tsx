import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/luxury/section-heading";
import { FadeIn } from "@/components/luxury/fade-in";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Chefs & Restaurants",
  description:
    "B2B volume pricing, priority allocation, and dedicated account management for fine dining.",
};

const testimonials = [
  {
    quote:
      "Consistency is everything on a tasting menu. Winter Harbor Blue is the only live lobster we spec.",
    author: "Executive Chef",
    venue: "Michelin-Starred, New York",
  },
  {
    quote:
      "The traceability certificates our guests receive have become part of the experience.",
    author: "Director of F&B",
    venue: "Luxury Resort, Coastal Maine",
  },
];

const b2bFeatures = [
  "Volume pricing from 20+ lobsters per order",
  "Priority allocation during peak season",
  "Dedicated account manager",
  "Custom sizing and grading",
  "Net-30 terms for approved accounts",
  "White-glove delivery scheduling",
];

export default function ForChefsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Fine dining kitchen"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <SectionHeading
            label="B2B Portal"
            title="For Chefs & Restaurants"
            description="Join the kitchens that source exclusively from Winter Harbor. Volume pricing, delivery options, and chef testimonials."
            className="mb-0 text-left md:max-w-2xl"
            align="left"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-serif text-3xl text-harbor-white">
                Volume Pricing & Priority Access
              </h2>
              <ul className="mt-8 space-y-4">
                {b2bFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-harbor-mist"
                  >
                    <span className="h-1 w-1 rounded-full bg-harbor-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-10" size="lg">
                <Link href="/contact?subject=b2b">Request B2B Account</Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="luxury-card p-8">
                <p className="luxury-label mb-6">Delivery Options</p>
                <div className="space-y-6 text-sm text-harbor-mist">
                  <p>
                    <strong className="text-harbor-white">Overnight National</strong>
                    <br />
                    Temperature-controlled, live arrival guarantee.
                  </p>
                  <p>
                    <strong className="text-harbor-white">Regional Same-Day</strong>
                    <br />
                    Boston, NYC, and Northeast corridor via dedicated fleet partners.
                  </p>
                  <p>
                    <strong className="text-harbor-white">Dock Pickup</strong>
                    <br />
                    Winter Harbor pier collection for local properties.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-harbor-gold/10 bg-harbor-navy/20 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="Trusted by the Finest Tables"
            align="center"
          />
          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <blockquote className="text-center">
                  <p className="font-serif text-xl italic text-harbor-mist md:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="text-sm text-harbor-gold">{t.author}</p>
                    <p className="text-xs text-harbor-mist/70">{t.venue}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
