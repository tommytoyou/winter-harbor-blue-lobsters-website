import { ContactForm } from "./contact-form";
import { SectionHeading } from "@/components/luxury/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Winter Harbor Blue for orders, B2B accounts, and reservations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-harbor-gold/10 pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            label="Contact"
            title="We&apos;re Here for Chefs & Connoisseurs"
            description="Private clients, restaurants, and large-order reservations."
            className="mb-0"
          />
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />
          <div className="luxury-card p-8 lg:p-10">
            <p className="luxury-label mb-6">Winter Harbor, Maine</p>
            <address className="not-italic text-harbor-mist">
              <p className="font-serif text-xl text-harbor-white">
                Winter Harbor Blue Lobsters
              </p>
              <p className="mt-4">Pier 3, Winter Harbor</p>
              <p>Maine 04693, USA</p>
              <p className="mt-6">
                <a
                  href="mailto:concierge@winterharborblue.com"
                  className="text-harbor-gold hover:underline"
                >
                  concierge@winterharborblue.com
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="tel:+12075550123"
                  className="text-harbor-gold hover:underline"
                >
                  +1 (207) 555-0123
                </a>
              </p>
            </address>
            <p className="mt-8 text-sm text-harbor-mist/80">
              Hours: Monday–Saturday, 6am–6pm EST (dock operations follow tide
              and weather).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
