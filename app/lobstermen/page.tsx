import { SectionHeading } from "@/components/luxury/section-heading";
import { LobstermanCard } from "@/components/luxury/lobsterman-card";
import lobstermen from "@/content/lobstermen.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lobstermen",
  description:
    "Meet the captains and masters who hand-grade every Winter Harbor Blue lobster.",
};

export default function LobstermenPage() {
  return (
    <>
      <section className="border-b border-harbor-gold/10 pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="The Lobstermen"
            title="Masters of the Harbor"
            description="Dynamic profiles powered by our CMS—Sanity or Contentful ready. Each lobster we ship traces to a captain and boat."
            className="mb-0"
          />
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lobstermen.map((person, i) => (
              <LobstermanCard key={person.id} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
