import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "./icons/github-icon";
import { ProjectCardProps } from "@/types/project-card.type";
import { ExternalLink } from "lucide-react";

export const ProjectCard = ({
  description,
  img,
  techs,
  title,
  urlRepository,
  urlSite,
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col group">
      <div className="p-4">
        <div className="overflow-hidden rounded-lg w-full h-[11.25rem]">
          <Image
            src={img}
            alt="project-thumbnail"
            width={600}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3 flex-grow">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          <div className="flex gap-2 items-center">{title}</div>
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="items-center  pt-2 flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 mt-auto flex flex-row justify-end gap-2">
        {urlSite && (
          <Link
            href={urlSite}
            target="_blank"
            className="bg-muted p-3 flex items-center justify-center rounded-full dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="size-8" />
          </Link>
        )}
        <Link
          href={urlRepository}
          target="_blank"
          className="bg-muted p-2 rounded-full dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition-all duration-300 hover:scale-105"
        >
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
};
