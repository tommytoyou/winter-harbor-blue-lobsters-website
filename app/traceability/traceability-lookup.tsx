"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Ship, Thermometer, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { lookupBatch } from "@/lib/traceability";
import Link from "next/link";

export function TraceabilityLookup() {
  const [batchId, setBatchId] = useState("");
  const [result, setResult] = useState(
    null as ReturnType<typeof lookupBatch>
  );
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setResult(lookupBatch(batchId));
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          placeholder="Enter batch ID (e.g. WHB2026A0142)"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon" aria-label="Search batch">
          <Search className="h-4 w-4" />
        </Button>
      </form>

      <AnimatePresence mode="wait">
        {searched && (
          <motion.div
            key={result ? result.batchId : "not-found"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 luxury-card p-8"
          >
            {result ? (
              <>
                <p className="luxury-label mb-2">Batch Verified</p>
                <h2 className="font-serif text-2xl text-harbor-gold">
                  {result.batchId}
                </h2>
                <p className="mt-2 text-sm text-harbor-mist">
                  Grade: {result.grade}
                </p>
                <dl className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Ship className="h-4 w-4 text-harbor-gold" />
                    <div>
                      <dt className="text-xs uppercase tracking-luxury text-harbor-mist">
                        Vessel
                      </dt>
                      <dd className="text-harbor-white">
                        {result.boatName} · Capt. {result.captain}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-harbor-gold" />
                    <div>
                      <dt className="text-xs uppercase tracking-luxury text-harbor-mist">
                        Harvest Date
                      </dt>
                      <dd className="text-harbor-white">{result.harvestDate}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-4 w-4 text-harbor-gold" />
                    <div>
                      <dt className="text-xs uppercase tracking-luxury text-harbor-mist">
                        Water Temp
                      </dt>
                      <dd className="text-harbor-white">{result.waterTemp}</dd>
                    </div>
                  </div>
                </dl>
                <Link
                  href={`/lobstermen/${result.lobstermanId}`}
                  className="mt-6 inline-block text-sm text-harbor-gold hover:underline"
                >
                  View lobsterman profile →
                </Link>
              </>
            ) : (
              <p className="text-center text-harbor-mist">
                No batch found. Check your ID and try again.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
