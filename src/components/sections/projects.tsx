"use client";
import projects from "@/utils/projects";
import { ProjectCard } from "@/components/project-card";

export const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-start w-full font-bold text-4xl">Projetos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-8">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
