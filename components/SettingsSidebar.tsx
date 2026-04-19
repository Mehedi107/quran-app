"use client";

import { useSettings } from "./SettingsProvider";



export default function SettingsSidebar() {
  const {
    arabicFont,
    arabicSize,
    translationSize,
    setArabicFont,
    setArabicSize,
    setTranslationSize,
  } = useSettings();

  return (
    <div className="bg-white border rounded-2xl p-5 space-y-5 text-gray-600">
      <h2 className="text-xl font-bold text-gray-600">
        Settings
      </h2>

      <div>
        <label className="block mb-2">
          Arabic Font
        </label>

        <select
          value={arabicFont}
          onChange={(e) =>
            setArabicFont(e.target.value)
          }
          className="w-full border p-2 rounded-lg"
        >
          <option value="var(--font-amiri)">
            Amiri
          </option>

          <option value="var(--font-noto)">
            Noto Naskh
          </option>
        </select>
      </div>

      <div>
        <label>
          Arabic Size: {arabicSize}px
        </label>

        <input
          type="range"
          min="24"
          max="48"
          value={arabicSize}
          onChange={(e) =>
            setArabicSize(
              Number(e.target.value)
            )
          }
          className="w-full"
        />
      </div>

      <div>
        <label>
          Translation Size:
          {translationSize}px
        </label>

        <input
          type="range"
          min="14"
          max="28"
          value={translationSize}
          onChange={(e) =>
            setTranslationSize(
              Number(e.target.value)
            )
          }
          className="w-full"
        />
      </div>
    </div>
  );
}