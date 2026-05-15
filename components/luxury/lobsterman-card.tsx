"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface Lobsterman {
  id: string;
  name: string;
  title: string;
  boat: string;
  years: number;
  image: string;
  bio: string;
  quote: string;
}

export function LobstermanCard({
  person,
  index = 0,
}: {
  person: Lobsterman;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="luxury-card group overflow-hidden"
    >
      <Link href={`/lobstermen/${person.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-harbor-deep via-harbor-deep/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="luxury-label">{person.boat}</p>
            <h3 className="mt-2 font-serif text-2xl text-harbor-white">
              {person.name}
            </h3>
            <p className="text-sm text-harbor-gold">{person.title}</p>
          </div>
        </div>
        <blockquote className="border-t border-harbor-gold/10 p-6">
          <p className="font-serif italic text-harbor-mist">
            &ldquo;{person.quote}&rdquo;
          </p>
        </blockquote>
      </Link>
    </motion.div>
  );
}
