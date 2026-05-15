"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { FadeIn } from "@/components/luxury/fade-in";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalCents, clearCart } = useCart();

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  if (items.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32">
        <h1 className="font-serif text-3xl text-harbor-white">Your cart is empty</h1>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="luxury-heading text-4xl">Your Selection</h1>
        <ul className="mt-12 space-y-8">
          {items.map((item) => (
            <FadeIn key={item.variantId}>
              <li className="flex gap-6 border-b border-harbor-gold/10 pb-8">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-harbor-navy">
                  <Image
                    src={item.image}
                    alt={item.productName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-xl text-harbor-white">
                      {item.productName}
                    </h2>
                    <p className="text-sm text-harbor-mist">{item.variantLabel}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-harbor-gold/20">
                      <button
                        type="button"
                        className="p-2"
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        className="p-2"
                        onClick={() =>
                          updateQuantity(item.variantId, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-serif text-lg text-harbor-gold">
                      {formatPrice(item.priceCents * item.quantity)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.variantId)}
                  className="text-harbor-mist hover:text-harbor-gold"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </li>
            </FadeIn>
          ))}
        </ul>

        <div className="mt-12 border-t border-harbor-gold/20 pt-8">
          <div className="flex justify-between font-serif text-2xl">
            <span>Total</span>
            <span className="text-harbor-gold">{formatPrice(totalCents)}</span>
          </div>
          <Button className="mt-8 w-full" size="lg" onClick={checkout}>
            Proceed to Checkout
          </Button>
          <button
            type="button"
            onClick={clearCart}
            className="mt-4 w-full text-center text-xs uppercase tracking-luxury text-harbor-mist hover:text-harbor-gold"
          >
            Clear cart
          </button>
        </div>
      </div>
    </section>
  );
}
