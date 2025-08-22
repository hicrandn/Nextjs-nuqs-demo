"use client";
import { Input } from "./ui/input";
import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductFilter() {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });
  return (
    <div className="flex justify-between ">
      <div>
        <Input
          className="w-[300px]"
          type="text"
          value={search ?? ""}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search "
        />
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Items per page" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="40">40</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
