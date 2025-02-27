import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "./icons/github-icon";
import { ProjectCardProps } from "@/types/project-card.type";

export const ProjectCard = ({
  description,
  img,
  techs,
  title,
  urlRepository,
  urlSite,
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full group">
      <div className="p-4">
        <Link href={urlSite} target="_blank">
          <div className="overflow-hidden rounded-lg w-full h-[11.25rem]">
            <Image
              src={img}
              alt="profile"
              width={600}
              height={250}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          <div className="flex gap-2 items-center">
            <Link href={urlSite} target="_blank">
              {title}
            </Link>
          </div>
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="items-center p-6 pt-0 *:mr-2 *:mb-2 flex flex-wrap">
        {techs.map((tech, index) => {
          return (
            <div
              key={index}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {tech}
            </div>
          );
        })}
        {/* TODO badge */}
      </div>
      <div className="items-center p-2 pt-0 *:mr-2 *:mb-2 flex flex-wrap justify-end">
        <Link
          href={urlRepository}
          target="_blank"
          className="bg-muted p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          <GitHubIcon />
        </Link>
        {/* TODO link project */}
      </div>
    </div>
  );
};
