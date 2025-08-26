"use client";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";

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
    <div className="flex justify-between ">
      <div>
        <Input
          className="w-[300px]"
          type="text"
          value={search ?? ""}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Film adı ile ara..."
        />
      </div>
    </div>
  );
}
