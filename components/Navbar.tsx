import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-emerald-700"
        >
          Quran Explorer
        </Link>

        <nav className="flex gap-5 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
        </nav>

      </div>
    </header>
  );
}