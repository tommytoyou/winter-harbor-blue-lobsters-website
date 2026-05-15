import { Anchor, Award, Clock, Shield } from "lucide-react";
import { FadeIn } from "./fade-in";

const badges = [
  {
    icon: Anchor,
    title: "Direct from the Dock",
    description: "Harvested and shipped within hours of selection.",
  },
  {
    icon: Shield,
    title: "Freshness Guarantee",
    description: "Live arrival guaranteed or full replacement.",
  },
  {
    icon: Award,
    title: "Certificate of Authenticity",
    description: "Downloadable proof of origin for every order.",
  },
  {
    icon: Clock,
    title: "Overnight Delivery",
    description: "Temperature-controlled logistics nationwide.",
  },
];

export function GuaranteeBadges() {
  return (
    <section className="border-y border-harbor-gold/10 bg-harbor-navy/30 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {badges.map((badge, i) => (
          <FadeIn key={badge.title} delay={i * 0.1} className="text-center">
            <badge.icon className="mx-auto h-8 w-8 text-harbor-gold" />
            <h3 className="mt-4 text-xs uppercase tracking-luxury text-harbor-white">
              {badge.title}
            </h3>
            <p className="mt-2 text-sm text-harbor-mist">{badge.description}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
