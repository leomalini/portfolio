import { GitIcon } from "@/components/icons/git-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";
import { TechCardProps } from "@/types/tech-card.type";

const techCards: TechCardProps[] = [
  {
    icon: <TypescriptIcon />,
    title: "TypeScript",
  },
  {
    icon: <ReactIcon />,
    title: "React",
  },
  {
    icon: <TailwindIcon />,
    title: "Tailwind",
  },
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
  },
  {
    icon: <NodeIcon className="h-10 w-10" />,
    title: "NodeJS",
  },
  {
    icon: <NextIcon />,
    title: "NextJS",
  },
  {
    icon: <GitIcon />,
    title: "Git",
  },
];

export default techCards;
