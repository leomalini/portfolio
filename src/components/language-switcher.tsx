"use client";

import React, { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LangSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [showFlag, setShowFlag] = useState(false);

  const handleToggleLanguage = () => {
    // Mostra a bandeira temporariamente
    setShowFlag(true);

    // Alterna o idioma
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);

    // Esconde a bandeira após um tempo
    setTimeout(() => {
      setShowFlag(false);
    }, 1500);
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
        {language === "en" ? "🇺🇸" : "🇧🇷"}
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
