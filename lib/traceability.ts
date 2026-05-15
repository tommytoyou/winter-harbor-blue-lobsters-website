export interface BatchRecord {
  batchId: string;
  harvestDate: string;
  boatName: string;
  captain: string;
  lobstermanId: string;
  dock: string;
  waterTemp: string;
  grade: "Select" | "Premium" | "Chef's Reserve";
  quantity: number;
}

export const batchDatabase: Record<string, BatchRecord> = {
  WHB2026A0142: {
    batchId: "WHB2026A0142",
    harvestDate: "2026-05-12",
    boatName: "Atlantic Grace",
    captain: "Elias Whitmore",
    lobstermanId: "eli-whitmore",
    dock: "Winter Harbor Pier 3",
    waterTemp: "42°F",
    grade: "Chef's Reserve",
    quantity: 24,
  },
  WHB2026A0138: {
    batchId: "WHB2026A0138",
    harvestDate: "2026-05-11",
    boatName: "Harbor Mist",
    captain: "Sarah Mitchell",
    lobstermanId: "sarah-mitchell",
    dock: "Winter Harbor Pier 1",
    waterTemp: "43°F",
    grade: "Premium",
    quantity: 36,
  },
  WHB2026A0129: {
    batchId: "WHB2026A0129",
    harvestDate: "2026-05-10",
    boatName: "Blue Horizon",
    captain: "James O'Brien",
    lobstermanId: "james-obrien",
    dock: "Winter Harbor Pier 2",
    waterTemp: "41°F",
    grade: "Chef's Reserve",
    quantity: 18,
  },
};

export function lookupBatch(batchId: string): BatchRecord | null {
  const normalized = batchId.trim().toUpperCase();
  return batchDatabase[normalized] ?? null;
}
