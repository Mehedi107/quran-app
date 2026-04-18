import surahs from "@/data/surahs.json";
import verses from "@/data/verses.json";
import VerseCard from "@/components/VerseCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SurahPage({ params }: Props) {
  const { id } = await params;

  const surah = surahs.find(
    (item) => item.id === Number(id)
  );

  if (!surah) return notFound();

  const ayahs = verses[id as keyof typeof verses] || [];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-600">
            {surah.name_english}
          </h1>

          <p className="text-3xl text-gray-700 mt-3">
            {surah.name_arabic}
          </p>

          <p className="text-gray-500 mt-2">
            {surah.verses} Ayahs
          </p>
        </div>

        <div className="space-y-4">
          {ayahs.map((verse) => (
            <VerseCard key={verse.id} verse={verse} />
          ))}
        </div>

      </div>
    </main>
  );
}