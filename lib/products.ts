export type ProductCategory =
  | "live"
  | "frozen"
  | "gift"
  | "subscription";

export type LobsterSize = "1.5-2" | "2-3" | "3+";

export interface ProductVariant {
  id: string;
  size?: LobsterSize;
  label: string;
  priceCents: number;
  stripePriceId?: string;
  inStock: boolean;
  availability: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  image: string;
  hoverImage?: string;
  variants: ProductVariant[];
  featured?: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "live-lobster",
    slug: "live-lobster",
    name: "Live Winter Harbor Blue",
    category: "live",
    description:
      "Hand-selected live lobsters, shipped overnight from the dock.",
    longDescription:
      "Each lobster is individually inspected at the pier in Winter Harbor, Maine. Cold Atlantic waters produce denser, sweeter meat prized by the world's finest kitchens.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85",
    hoverImage:
      "https://images.unsplash.com/photo-1565680018434-b703b6a55ecc?w=1200&q=85",
    featured: true,
    badge: "Chef's Choice",
    variants: [
      {
        id: "live-1.5-2",
        size: "1.5-2",
        label: "1.5 – 2 lb",
        priceCents: 7500,
        inStock: true,
        availability: 48,
      },
      {
        id: "live-2-3",
        size: "2-3",
        label: "2 – 3 lb",
        priceCents: 11000,
        inStock: true,
        availability: 32,
      },
      {
        id: "live-3+",
        size: "3+",
        label: "3+ lb (Trophy)",
        priceCents: 16000,
        inStock: true,
        availability: 12,
      },
    ],
  },
  {
    id: "frozen-tails",
    slug: "frozen-tails",
    name: "Frozen Lobster Tails",
    category: "frozen",
    description: "Flash-frozen at peak sweetness. Six tails per case.",
    longDescription:
      "Processed within hours of harvest and cryogenically frozen to preserve texture and flavor for off-season service.",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b1a0?w=1200&q=85",
    variants: [
      {
        id: "tails-6oz",
        label: "6 oz tails (6 pack)",
        priceCents: 18900,
        inStock: true,
        availability: 24,
      },
      {
        id: "tails-8oz",
        label: "8 oz tails (6 pack)",
        priceCents: 24900,
        inStock: true,
        availability: 18,
      },
    ],
  },
  {
    id: "lobster-meat",
    slug: "lobster-meat",
    name: "Premium Lobster Meat",
    category: "frozen",
    description: "Hand-picked knuckle and claw meat. 2 lb minimum.",
    longDescription:
      "Ideal for rolls, ravioli, and composed plates. Never treated with preservatives.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85",
    variants: [
      {
        id: "meat-2lb",
        label: "2 lb tub",
        priceCents: 32000,
        inStock: true,
        availability: 15,
      },
    ],
  },
  {
    id: "chef-pack",
    slug: "chef-pack",
    name: "Chef's Dock Pack",
    category: "gift",
    description: "Mixed sizes for tasting menus. Serves 8–12.",
    longDescription:
      "Curated selection of 1.5–3 lb lobsters with traceability certificates and chef prep guide.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=85",
    badge: "Limited",
    variants: [
      {
        id: "chef-8",
        label: "8 lobster pack",
        priceCents: 72000,
        inStock: true,
        availability: 6,
      },
    ],
  },
  {
    id: "gift-box",
    slug: "gift-box",
    name: "Harbor Gift Collection",
    category: "gift",
    description: "Luxury presentation for private clients and holidays.",
    longDescription:
      "Includes two live lobsters, steel crackers, butter, and certificate of authenticity in a walnut presentation box.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=85",
    variants: [
      {
        id: "gift-standard",
        label: "Standard Collection",
        priceCents: 29500,
        inStock: true,
        availability: 20,
      },
      {
        id: "gift-grand",
        label: "Grand Harbor Collection",
        priceCents: 49500,
        inStock: true,
        availability: 8,
      },
    ],
  },
  {
    id: "subscription",
    slug: "subscription",
    name: "Dock-to-Door Subscription",
    category: "subscription",
    description: "Monthly delivery of chef-selected lobsters.",
    longDescription:
      "Pause or cancel anytime. Priority allocation during peak season. Includes traceability for every shipment.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85",
    badge: "Save 12%",
    variants: [
      {
        id: "sub-monthly-2",
        label: "2 lobsters / month",
        priceCents: 19800,
        inStock: true,
        availability: 100,
      },
      {
        id: "sub-monthly-4",
        label: "4 lobsters / month",
        priceCents: 36800,
        inStock: true,
        availability: 100,
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: ProductCategory
): Product[] {
  return products.filter((p) => p.category === category);
}
