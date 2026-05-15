"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const lowestPrice = Math.min(...product.variants.map((v) => v.priceCents));
  const inStock = product.variants.some((v) => v.inStock);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group luxury-card overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={hovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-harbor-deep via-transparent to-transparent opacity-80" />
          {product.badge && (
            <Badge className="absolute left-4 top-4">{product.badge}</Badge>
          )}
          {!inStock && (
            <Badge variant="secondary" className="absolute right-4 top-4">
              Reserve Only
            </Badge>
          )}
        </div>
        <div className="p-6">
          <p className="luxury-label mb-2">{product.category}</p>
          <h3 className="font-serif text-xl text-harbor-white transition-colors group-hover:text-harbor-gold">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-harbor-mist">
            {product.description}
          </p>
          <p className="mt-4 font-serif text-lg text-harbor-gold">
            From {formatPrice(lowestPrice)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
