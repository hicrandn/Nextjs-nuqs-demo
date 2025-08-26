"use client";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";
import { Search } from "lucide-react";

interface MovieFilterProps {
  refetchProducts: () => Promise<void>;
}

export default function MovieFilter({ refetchProducts }: MovieFilterProps) {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });

  const handleSearch = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <Input
          type="text"
          value={search ?? ""}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for movies..."
          className="w-full text-center text-lg py-4 border-2 border-primary/20 focus:border-primary transition-all duration-300 shadow-lg hover:shadow-xl"
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
