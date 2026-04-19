"use client";

import { useSettings } from "./SettingsProvider";

type Props = {
  verse: {
    id: number;
    arabic: string;
    translation: string;
  };
};

export default function VerseCard({ verse }: Props) {
  const {
    arabicFont,
    arabicSize,
    translationSize,
  } = useSettings();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-5">

      <div className="flex justify-between gap-4 items-start">

        <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          {verse.id}
        </span>

        <p
          className="text-right flex-1 leading-loose"
          style={{
            fontFamily: arabicFont,
            fontSize: `${arabicSize}px`,
          }}
        >
          {verse.arabic}
        </p>

      </div>

      <p
        className="text-gray-700 leading-8"
        style={{
          fontSize: `${translationSize}px`,
        }}
      >
        {verse.translation}
      </p>
    </div>
  );
}