"use client";

import { useMemo, useState } from "react";
import verses from "@/data/verses.json";
import Link from "next/link";

type Result = {
  surahId: string;
  id: number;
  arabic: string;
  translation: string;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const matched: Result[] = [];

    Object.entries(verses).forEach(([surahId, ayahs]) => {
      ayahs.forEach((ayah) => {
        if (
          ayah.translation
            .toLowerCase()
            .includes(query.toLowerCase())
        ) {
          matched.push({
            surahId,
            ...ayah,
          });
        }
      });
    });

    return matched;
  }, [query]);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl text-gray-600 font-bold mb-6 text-center">
          Search Ayahs
        </h1>

        <input
          type="text"
          placeholder="Search by translation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-gray-600 w-full border rounded-xl px-4 py-3 mb-8 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="space-y-4">

          {results.map((item, index) => (
            <Link
              key={index}
              href={`/surah/${item.surahId}`}
            >
              <div className="bg-white p-5 rounded-2xl border hover:shadow-md transition cursor-pointer mb-3">

                <p className="text-sm text-emerald-700 mb-2">
                  Surah {item.surahId} • Ayah {item.id}
                </p>

                <p className="text-2xl text-gray-700 text-right mb-4">
                  {item.arabic}
                </p>

                <p className="text-gray-700">
                  {item.translation}
                </p>

              </div>
            </Link>
          ))}

          {query && results.length === 0 && (
            <p className="text-center text-gray-500">
              No results found.
            </p>
          )}

        </div>
      </div>
    </main>
  );
}