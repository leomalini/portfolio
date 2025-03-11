"use client";

import React, { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LangSwitcher() {
  const [language, setLanguage] = useState("pt");
  const [showFlag, setShowFlag] = useState(false);

  const handleToggleLanguage = () => {
    const nextLanguage = language === "pt" ? "en" : "pt";
    setShowFlag(true);

    setTimeout(() => {
      setLanguage(nextLanguage);
      setShowFlag(false);
    }, 800); // Tempo para exibir a bandeira antes de voltar ao globo
  };

  return (
    <Button
      onClick={handleToggleLanguage}
      variant="ghost"
      size="icon"
      className="rounded-full text-lg relative overflow-hidden"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          showFlag ? "opacity-100 scale-110" : "opacity-0 scale-90"
        }`}
      >
        {showFlag ?? language === "en" ? "🇺🇸" : "🇧🇷"}
      </span>
      <Globe
        className={`size-5 transition-opacity duration-700 ${
          showFlag ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      />
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
