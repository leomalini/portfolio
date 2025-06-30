import { ExperienceIcon } from "@/components/icons/experience-icon";
import { HomeIcon } from "@/components/icons/home-icon";
import { TechIcon } from "@/components/icons/tech-icon";
import { type NavItemProps } from "@/types/nav-items.type";

export const navItems: NavItemProps[] = [
  {
    key: "home",
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    key: "experiences",
    link: "#experiences",
    icon: (
      <ExperienceIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    key: "tech",
    link: "#tech",
    icon: <TechIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
