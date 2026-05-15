import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <Award className="h-16 w-16 text-harbor-gold" />
      <h1 className="mt-8 font-serif text-4xl text-harbor-white">
        Thank You for Your Order
      </h1>
      <p className="mt-4 max-w-md text-harbor-mist">
        Your Winter Harbor Blue lobsters are being prepared at the dock.
        Download your Certificate of Authenticity once your batch ID is
        assigned.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/certificate">Download Certificate</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/traceability">Trace Your Batch</Link>
        </Button>
      </div>
    </section>
  );
}
