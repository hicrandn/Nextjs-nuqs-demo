"use client";

import { useQueryState } from "nuqs";
import { Input } from "./ui/input";

export function NameInput() {
  const [name, setName] = useQueryState("name", { defaultValue: "" });

  return (
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
      <div className="w-full">
        <Input
          type="text"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value || null)}
          placeholder="Enter your name..."
          className="text-center text-lg py-3 border-2 border-primary/20 focus:border-primary transition-colors"
        />
      </div>

      <div className="text-center">
        <p className="text-2xl font-semibold text-foreground">
          Hello, {name || "guest"}! 👋
        </p>
        <p className="text-muted-foreground mt-2">
          You can start searching for movies now
        </p>
      </div>
    </div>
  );
}
