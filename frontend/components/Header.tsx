import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#171D25] p-6">
      <div className="container flex items-center justify-between">
        <Image
          src="/steam-logo.png"
          alt="Logo Steam"
          width={150}
          height={100}
        />
        <div className="flex text-white gap-3 tracking-tight uppercase text-sm font-medium">
          <div>Akcja</div>
          <div>Strategia</div>
          <div>Sportowe</div>
          <div>Symulatory</div>
          <div>Przygodowe</div>
        </div>
        <Button className="border-none bg-[#769605] hover:bg-[#5d740a] transition">
          Zaloguj się
        </Button>
      </div>
    </div>
  );
}

// Akcja
// Strategia
// Sportowe
// Symulatory
// Przygodowe
