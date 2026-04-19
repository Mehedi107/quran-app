import surahList from "@/data/suraShort.json";
import arabicData from "@/data/quran.ar.json";
import englishData from "@/data/quran.en.json";
import VerseCard from "@/components/VerseCard";
import { notFound } from "next/navigation";
import SettingsSidebar from "@/components/SettingsSidebar";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SurahPage({ params }: Props) {
    const { id } = await params;

    const surahInfo = surahList.find((s) => s.id === Number(id));

    if (!surahInfo) return notFound();

    const arabicVerses = arabicData[id as keyof typeof arabicData] || [];
    const englishVerses = englishData[id as keyof typeof englishData] || [];


    const combinedVerses = arabicVerses.map((arabicVerse, index) => ({
      chapter: arabicVerse.chapter,
      arabic_sura_name: surahInfo.name,
      total_verses: surahInfo.total_verses,
      verse: arabicVerse.verse,
      arabic_verse: arabicVerse.text,
      eng_verse: englishVerses[index]?.text ?? "",
      eng_sura_name: surahInfo.translation,
      eng_transliteration:surahInfo.transliteration,
      type: surahInfo.type 
    }));

    console.log(surahInfo);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SettingsSidebar />
        </div>
        <div className="md:col-span-3 space-y-4">
          <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-600">
            {surahInfo.transliteration}
          </h1>

          <p className="text-3xl text-gray-700 mt-3">
            {surahInfo.name}
          </p>

          <p className="text-gray-500 mt-2">
            {surahInfo.total_verses} Ayahs
          </p>
        </div>

        <div className="space-y-4">
          {combinedVerses.map((verse) => (

            <VerseCard key={verse.verse} verse={verse}/>
          ))}
        </div>

      </div>
        </div>
      </div>
    </main>
  );
}