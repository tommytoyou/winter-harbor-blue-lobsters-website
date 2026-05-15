"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/luxury/fade-in";

export default function CertificatePage() {
  const [orderId, setOrderId] = useState("");
  const [batchId, setBatchId] = useState("");

  const downloadCertificate = () => {
    const content = `
WINTER HARBOR BLUE LOBSTERS
CERTIFICATE OF AUTHENTICITY

Order ID: ${orderId || "—"}
Batch ID: ${batchId || "—"}
Origin: Winter Harbor, Maine, USA
Grade: Hand-Selected · Cold-Water Harvest

This certifies that the lobster(s) in this order were
individually graded at the dock and shipped under our
freshness guarantee with full traceability.

Issued: ${new Date().toISOString().split("T")[0]}
    `.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `WHB-Certificate-${orderId || batchId || "order"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <SectionHeading
          label="Authenticity"
          title="Certificate of Authenticity"
          description="Every order includes a downloadable certificate linking your lobster to its harvest batch and boat."
        />
        <FadeIn className="luxury-card mt-12 p-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="orderId">Order ID</Label>
              <Input
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="From confirmation email"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="batchId">Batch ID</Label>
              <Input
                id="batchId"
                value={batchId}
                onChange={(e) => setBatchId(e.target.value)}
                placeholder="e.g. WHB2026A0142"
                className="mt-2"
              />
            </div>
            <Button
              onClick={downloadCertificate}
              className="w-full"
              size="lg"
              disabled={!orderId && !batchId}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Certificate
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
