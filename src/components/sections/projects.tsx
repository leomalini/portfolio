"use client";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/utils/projects";

export const Projects = () => {
  const { t } = useLanguage();
  const projects = useProjects();
  return (
    <section id="projects" className="container">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-start w-full font-bold text-4xl">
          {t("projects_title")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
