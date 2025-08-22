import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

const header = () => {
  return (
    <header className="flex justify-end p-4">
      <ModeToggle />
    </header>
  );
};

export default header;
