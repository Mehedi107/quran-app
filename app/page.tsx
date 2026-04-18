import surahs from "@/data/surahs.json";
import SurahCard from "@/components/SurahCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-600">
          Quran Explorer
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Read Surahs, Search Ayahs & Customize Reading
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {surahs.map((surah) => (
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      </div>
    </main>
  );
}