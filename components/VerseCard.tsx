type Props = {
  verse: {
    id: number;
    arabic: string;
    translation: string;
  };
};

export default function VerseCard({ verse }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">
      <div className="flex justify-between items-start gap-4">
        <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          {verse.id}
        </span>

        <p className="text-3xl text-emerald-700 leading-loose text-right flex-1 font-semibold">
          {verse.arabic}
        </p>
      </div>

      <p className="text-gray-700 leading-7">
        {verse.translation}
      </p>
    </div>
  );
}