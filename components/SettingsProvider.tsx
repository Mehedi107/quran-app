"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SettingsType = {
  arabicFont: string;
  arabicSize: number;
  translationSize: number;
  setArabicFont: (v: string) => void;
  setArabicSize: (v: number) => void;
  setTranslationSize: (v: number) => void;
};

const SettingsContext =
  createContext<SettingsType | null>(null);

export function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [arabicFont, setArabicFont] =
    useState("serif");

  const [arabicSize, setArabicSize] =
    useState(32);

  const [translationSize, setTranslationSize] =
    useState(18);

  useEffect(() => {
    const saved =
      localStorage.getItem("quran-settings");

    if (saved) {
      const parsed = JSON.parse(saved);

      setArabicFont(parsed.arabicFont);
      setArabicSize(parsed.arabicSize);
      setTranslationSize(
        parsed.translationSize
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quran-settings",
      JSON.stringify({
        arabicFont,
        arabicSize,
        translationSize,
      })
    );
  }, [
    arabicFont,
    arabicSize,
    translationSize,
  ]);

  return (
    <SettingsContext.Provider
      value={{
        arabicFont,
        arabicSize,
        translationSize,
        setArabicFont,
        setArabicSize,
        setTranslationSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context =
    useContext(SettingsContext);

  if (!context)
    throw new Error(
      "useSettings must be inside provider"
    );

  return context;
}