"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/luxury/fade-in";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject") ?? "general";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeIn className="luxury-card p-10 text-center">
        <p className="font-serif text-2xl text-harbor-gold">Message Received</p>
        <p className="mt-4 text-harbor-mist">
          Our concierge team will respond within one business day.
        </p>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="subject" value={subject} />
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required className="mt-2" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="company">Restaurant / Company (optional)</Label>
          <Input id="company" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            required
            rows={5}
            className="mt-2 flex w-full border border-harbor-gold/20 bg-harbor-navy/50 px-4 py-3 text-sm text-harbor-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harbor-gold"
          />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </FadeIn>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-harbor-navy/30" />}>
      <ContactFormInner />
    </Suspense>
  );
}
