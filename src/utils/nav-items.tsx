import { ExperienceIcon } from "@/components/icons/experience-icon";
import { HomeIcon } from "@/components/icons/home-icon";
import { TechIcon } from "@/components/icons/tech-icon";
import { type NavItemProps } from "@/types/nav-items.type";

export const navItems: NavItemProps[] = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experiências",
    link: "#experiences",
    icon: (
      <ExperienceIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Tecnologias",
    link: "#tech",
    icon: <TechIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
