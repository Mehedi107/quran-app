import Link from "next/link";

type Props = {
  surah: {
    id: number;
    name_arabic: string;
    name_english: string;
    verses: number;
  };
};

export default function SurahCard({ surah }: Props) {
  return (
    <Link href={`/surah/${surah.id}`}>
      <div className="border rounded-2xl p-5 hover:shadow-lg transition bg-white cursor-pointer">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-600">{surah.name_english}</h2>
            <p className="text-sm text-gray-500">{surah.verses} Ayahs</p>
          </div>

          <h3 className="text-2xl font-semibold text-emerald-700">
            {surah.name_arabic}
          </h3>
        </div>
      </div>
    </Link>
  );
}