import Link from "next/link";
import { Anchor, Award, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "Live Lobster" },
    { href: "/shop?category=frozen", label: "Frozen & Meat" },
    { href: "/shop?category=gift", label: "Gift Collections" },
    { href: "/shop?category=subscription", label: "Subscription" },
  ],
  Company: [
    { href: "/our-story", label: "Our Story" },
    { href: "/lobstermen", label: "The Lobstermen" },
    { href: "/traceability", label: "Traceability" },
    { href: "/for-chefs", label: "For Chefs & Restaurants" },
  ],
  Resources: [
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" },
    { href: "/certificate", label: "Certificate of Authenticity" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-harbor-gold/10 bg-harbor-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl text-harbor-white">
                Winter Harbor
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-wide text-harbor-gold">
                Blue Lobsters
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-harbor-mist">
              Hand-Selected. Cold-Water Perfection. From Winter Harbor to the
              World&apos;s Finest Tables.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-harbor-mist">
                <Anchor className="h-4 w-4 text-harbor-gold" />
                <span className="text-xs uppercase tracking-luxury">
                  Direct from the Dock
                </span>
              </div>
              <div className="flex items-center gap-2 text-harbor-mist">
                <Shield className="h-4 w-4 text-harbor-gold" />
                <span className="text-xs uppercase tracking-luxury">
                  Freshness Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2 text-harbor-mist">
                <Award className="h-4 w-4 text-harbor-gold" />
                <span className="text-xs uppercase tracking-luxury">
                  Certified Authentic
                </span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="luxury-label mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-harbor-mist transition-colors hover:text-harbor-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-harbor-mist/70">
            © {new Date().getFullYear()} Winter Harbor Blue Lobsters. Winter
            Harbor, Maine.
          </p>
          <p className="text-xs text-harbor-mist/70">
            Premium Maine Lobster · Traceable · Sustainably Harvested
          </p>
        </div>
      </div>
    </footer>
  );
}
