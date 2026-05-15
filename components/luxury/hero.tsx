"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=85"
          alt="Foggy Winter Harbor with lobster boats at dawn"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-harbor-deep/70 via-harbor-deep/50 to-harbor-deep" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#061018_85%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 text-center">
        <motion.p
          className="luxury-label mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Winter Harbor, Maine
        </motion.p>

        <motion.h1
          className="luxury-heading text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <span className="block">Winter Harbor</span>
          <span className="gold-gradient-text mt-2 block font-normal italic">
            Blue Lobsters
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-balance font-serif text-lg leading-relaxed text-harbor-mist md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Hand-Selected. Cold-Water Perfection. From Winter Harbor to the
          World&apos;s Finest Tables.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button asChild size="lg">
            <Link href="/shop">Shop Live Lobster</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/our-story">Discover Our Story</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-harbor-gold/20 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {[
            "Direct from the Dock",
            "Certificate of Authenticity",
            "Overnight Nationwide",
          ].map((badge) => (
            <span
              key={badge}
              className="text-[10px] uppercase tracking-luxury text-harbor-gold/90"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-harbor-gold"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
