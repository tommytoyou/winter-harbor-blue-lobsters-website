import { TraceabilityLookup } from "./traceability-lookup";
import { SectionHeading } from "@/components/luxury/section-heading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traceability",
  description:
    "Scan or enter your batch ID to see boat, captain, harvest date, and grade.",
};

export default function TraceabilityPage() {
  return (
    <>
      <section className="border-b border-harbor-gold/10 pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionHeading
            label="Traceability"
            title="Know Your Lobster's Journey"
            description="Every Winter Harbor Blue shipment includes a QR code and batch ID. Enter yours below to see exactly which boat brought your lobster to the dock."
            className="mb-0"
          />
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <TraceabilityLookup />
          <p className="mt-8 text-center text-xs text-harbor-mist/70">
            Try sample batch: WHB2026A0142
          </p>
        </div>
      </section>
    </>
  );
}
