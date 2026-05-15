import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/luxury/hero";
import { GuaranteeBadges } from "@/components/luxury/guarantee-badges";
import { SectionHeading } from "@/components/luxury/section-heading";
import { ProductCard } from "@/components/luxury/product-card";
import { FadeIn } from "@/components/luxury/fade-in";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import lobstermen from "@/content/lobstermen.json";
import { LobstermanCard } from "@/components/luxury/lobsterman-card";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const previewProducts = featured.length > 0 ? featured : products.slice(0, 3);

  return (
    <>
      <Hero />

      <GuaranteeBadges />

      <section id="intro" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <p className="luxury-label mb-4">The Difference</p>
              <h2 className="luxury-heading text-4xl md:text-5xl">
                Cold Water. Hand Selected. Uncompromising.
              </h2>
              <p className="mt-6 font-serif text-lg leading-relaxed text-harbor-mist">
                Winter Harbor sits where the Gulf of Maine meets granite
                coastline—waters so cold they slow growth and concentrate
                sweetness. Our lobstermen reject six in ten. What remains is
                reserved for chefs who refuse compromise.
              </p>
              <Button asChild variant="outline" className="mt-8">
                <Link href="/our-story">Read Our Story</Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85"
                  alt="Lobster boat in Winter Harbor fog"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-4 border border-harbor-gold/30" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-harbor-navy/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="The Collection"
            title="Shop the Harbor"
            description="Live lobster, frozen tails, chef packs, and gift collections—each with full traceability from pier to plate."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {previewProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/shop">View Full Collection</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="The Lobstermen"
            title="Generations of Mastery"
            description="Meet the captains who hand-grade every lobster that bears our seal."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lobstermen.slice(0, 4).map((person, i) => (
              <LobstermanCard key={person.id} person={person} index={i} />
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/lobstermen">Meet All Lobstermen</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Fine dining presentation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="luxury-label mb-4">For Chefs & Restaurants</p>
            <h2 className="luxury-heading text-4xl md:text-5xl">
              Volume Pricing. Priority Allocation.
            </h2>
            <p className="mt-6 font-serif text-lg text-harbor-mist">
              Join the kitchens that source exclusively from Winter Harbor Blue.
              B2B portal with dedicated account management.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="/for-chefs">Explore B2B Portal</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
