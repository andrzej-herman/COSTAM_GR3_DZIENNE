import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchEngine() {
  return (
    <div className="w-full mt-6 flex items-center">
      <Input
        className="bg-transparent border border-[#769605] rounded-tr-none rounded-br-none"
        placeholder="szukaj ..."
      />
      <Button className="border-none bg-[#769605] hover:bg-[#5d740a] transition min-w-[150px] rounded-tl-none rounded-bl-none">
        Szukaj
      </Button>
    </div>
  );
}
