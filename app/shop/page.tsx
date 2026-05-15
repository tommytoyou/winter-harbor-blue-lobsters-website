import { Suspense } from "react";
import { ShopContent } from "./shop-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Live lobster, frozen tails, chef packs, gift boxes, and subscriptions. Hand-selected from Winter Harbor, Maine.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopContent />
    </Suspense>
  );
}

function ShopSkeleton() {
  return (
    <div className="min-h-screen pt-32">
      <div className="mx-auto max-w-7xl animate-pulse px-6 py-24">
        <div className="h-12 w-64 bg-harbor-navy" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="aspect-[4/5] bg-harbor-navy/50" />
          ))}
        </div>
      </div>
    </div>
  );
}
