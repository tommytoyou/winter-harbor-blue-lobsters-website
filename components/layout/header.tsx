"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/lobstermen", label: "The Lobstermen" },
  { href: "/shop", label: "Shop" },
  { href: "/traceability", label: "Traceability" },
  { href: "/for-chefs", label: "For Chefs" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-harbor-gold/10 bg-harbor-deep/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-harbor-white transition-colors group-hover:text-harbor-gold">
            Winter Harbor
          </span>
          <span className="text-[9px] uppercase tracking-wide text-harbor-gold">
            Blue Lobsters
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-luxury text-harbor-mist transition-colors hover:text-harbor-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/shop/cart" className="relative p-2 text-harbor-white hover:text-harbor-gold">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center bg-harbor-gold text-[10px] font-medium text-harbor-deep">
                {itemCount}
              </span>
            )}
          </Link>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/shop">Shop Live Lobster</Link>
          </Button>
          <button
            type="button"
            className="p-2 text-harbor-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-harbor-gold/10 bg-harbor-deep lg:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-luxury text-harbor-mist hover:text-harbor-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full">
                <Link href="/shop" onClick={() => setOpen(false)}>
                  Shop Live Lobster
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
