"use client";
import techCards from "@/utils/tech-items";
import { TechCard } from "@/components/tech-card";

export const Technologies = () => {
  return (
    <section id="tech" className="container">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-start w-full font-bold text-4xl">
          Tecnologias com que trabalho
        </p>
        <div className="w-full border bg-muted rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 items-center justify-start">
          {techCards.map((tech, index) => {
            return <TechCard key={index} icon={tech.icon} title={tech.title} />;
          })}
        </div>
      </div>
    </section>
  );
};
