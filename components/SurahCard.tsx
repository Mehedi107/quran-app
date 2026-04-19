import Link from "next/link";

type Props = {
  surah: {
    id: number; 
    name: string; 
    transliteration: string; 
    translation: string; 
    type: string; 
    total_verses: number; 
  };
};

export default function SurahCard({ surah }: Props) {
  return (
    <Link href={`/surah/${surah.id}`}>
      <div className="bg-white border rounded-2xl p-5 hover:shadow-lg transition cursor-pointer">

        <div className="flex justify-between items-center gap-4">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              {surah.id}
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-500">
                {surah.translation}
              </h2>

              <p className="text-sm text-gray-500">
                {surah.total_verses} Ayahs
              </p>
            </div>

          </div>

          {/* Right */}
          <h3 className="text-2xl font-semibold text-emerald-700">
            {surah.name}
          </h3>

        </div>

      </div>
    </Link>
  );
}