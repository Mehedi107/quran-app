"use client";

import { useSettings } from "./SettingsProvider";

type Props = {
  verse: {
    chapter: number; 
    arabic_sura_name: string; 
    total_verses: number; 
    verse: number; 
    arabic_verse: string; 
    eng_verse: string; 
    eng_sura_name: string; 
    eng_transliteration: string; 
    type: string;  
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
          {verse.verse}
        </span>

        <p
          className="text-right flex-1 leading-loose text-gray-700"
          style={{
            fontFamily: arabicFont,
            fontSize: `${arabicSize}px`,
          }}
        >
          {verse.arabic_verse}
        </p>

      </div>

      <p
        className="text-gray-700 leading-8"
        style={{
          fontSize: `${translationSize}px`,
        }}
      >
        {verse.eng_verse}
      </p>
    </div>
  );
}