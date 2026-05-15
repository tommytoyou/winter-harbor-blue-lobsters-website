"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);

  const variant =
    product.variants.find((v) => v.id === variantId) ?? product.variants[0];

  const handleAdd = () => {
    if (!variant) return;
    addItem(
      {
        productId: product.id,
        productName: product.name,
        variantId: variant.id,
        variantLabel: variant.label,
        priceCents: variant.priceCents,
        image: product.image,
      },
      quantity
    );
  };

  return (
    <div>
      {product.badge && <Badge className="mb-4">{product.badge}</Badge>}
      <p className="luxury-label capitalize">{product.category}</p>
      <h1 className="mt-2 font-serif text-4xl text-harbor-white md:text-5xl">
        {product.name}
      </h1>
      <p className="mt-6 leading-relaxed text-harbor-mist">
        {product.longDescription}
      </p>

      {variant && (
        <div className="mt-8 space-y-6">
          <div>
            <p className="luxury-label mb-3">Select Size</p>
            <Select value={variantId} onValueChange={setVariantId}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.variants.map((v) => (
                  <SelectItem key={v.id} value={v.id} disabled={!v.inStock}>
                    {v.label} — {formatPrice(v.priceCents)}
                    {!v.inStock && " (Reserve)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {variant.inStock && (
            <p className="text-sm text-harbor-gold">
              {variant.availability} available · Ships overnight
            </p>
          )}

          <p className="font-serif text-3xl text-harbor-gold">
            {formatPrice(variant.priceCents)}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-harbor-gold/20">
              <button
                type="button"
                className="p-3 text-harbor-white hover:text-harbor-gold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-harbor-white">
                {quantity}
              </span>
              <button
                type="button"
                className="p-3 text-harbor-white hover:text-harbor-gold"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button onClick={handleAdd} className="flex-1" size="lg">
              Add to Cart
            </Button>
          </div>

          {!variant.inStock && (
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact?subject=reserve">Reserve Now</Link>
            </Button>
          )}
        </div>
      )}

      <div className="mt-12 space-y-4 border-t border-harbor-gold/10 pt-8">
        <div className="flex items-start gap-3 text-sm text-harbor-mist">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-harbor-gold" />
          <span>
            Includes Certificate of Authenticity and batch traceability QR code.
          </span>
        </div>
        <p className="text-xs uppercase tracking-luxury text-harbor-mist/70">
          Direct from the Dock · Freshness Guaranteed
        </p>
      </div>
    </div>
  );
}
