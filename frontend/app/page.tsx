import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import GameOfDay from "@/components/GameOfDay";

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-br from-[#183C4D] via-[#1A2A3B] to-[#1B2838]">
      <Header />
      <div className="container">
        <GameOfDay />
        <SearchEngine />
        <div className="mt-6">
          <p className="text-white font-medium tracking-tight text-xl">
            WYRÓŻNIONE I POLECANE
          </p>
        </div>
      </div>
    </div>
  );
}

// tl #183C4D
// middle #1A2A3B
// dół #1B2838
