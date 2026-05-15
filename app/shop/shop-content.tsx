"use client";

import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/luxury/section-heading";
import { ProductCard } from "@/components/luxury/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, type ProductCategory } from "@/lib/products";
import { FadeIn } from "@/components/luxury/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "live", label: "Live Lobster" },
  { value: "frozen", label: "Frozen & Meat" },
  { value: "gift", label: "Chef & Gift" },
  { value: "subscription", label: "Subscription" },
];

export function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ProductCategory | null;
  const defaultTab = categoryParam ?? "all";

  const filterProducts = (cat: ProductCategory | "all") =>
    cat === "all" ? products : products.filter((p) => p.category === cat);

  return (
    <>
      <section className="border-b border-harbor-gold/10 pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="The Shop"
            title="From the Dock to Your Kitchen"
            description="Real-time availability. Reserve large orders. Every shipment includes traceability and a Certificate of Authenticity."
            className="mb-0"
          />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mb-12 flex w-full flex-wrap justify-center gap-1">
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filterProducts(cat.value).map((product, i) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={i}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <FadeIn className="mt-20 luxury-card p-8 text-center md:p-12">
            <p className="luxury-label mb-4">Large Orders</p>
            <h3 className="font-serif text-2xl text-harbor-white">
              Reserve Now for Events & Service
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm text-harbor-mist">
              Planning a tasting menu or holiday service? Contact us for
              priority allocation and custom sizing.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/contact?subject=reserve">Request Reservation</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
