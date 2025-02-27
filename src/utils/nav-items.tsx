import { EmailIcon } from "@/components/icons/email-icon";
import { type NavItemProps } from "@/types/nav-items.type";

export const navItems: NavItemProps[] = [
  {
    name: "Home",
    link: "/",
    icon: <EmailIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Sobre mim",
    link: "#sobre",
    icon: <EmailIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Tecnologias",
    link: "#tech",
    icon: <EmailIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
