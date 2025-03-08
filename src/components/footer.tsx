import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github-icon";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { EmailIcon } from "@/components/icons/email-icon";

export default function Footer() {
  return (
    <footer className="w-full bg-muted p-6 px-2 md:px-10 ">
      <div className=" w-full flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-row gap-10 items-center justify-around md:justify-start">
          <Link
            href={"https://github.com/leomalini"}
            target="_blank"
            className="p-1 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white rounded-full transition-colors duration-300 text-secondary-foreground"
          >
            <GitHubIcon className="size-8" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/leonardo-malini-coradini/"}
            target="_blank"
            className="p-1 dark:hover:bg-white dark:hover:text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-colors duration-300 text-secondary-foreground"
          >
            <LinkedinIcon className="size-8" />
          </Link>
          <Link
            href={"mailto:leomalini61@gmail.com"}
            className="p-1 dark:hover:bg-white dark:hover:text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-colors duration-300 text-secondary-foreground"
          >
            <EmailIcon className="size-8" />
          </Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=5527988830747"}
            target="_blank"
            className="p-1 dark:hover:bg-white dark:hover:text-green-500 hover:bg-green-500 hover:text-white rounded-full transition-colors duration-300 text-secondary-foreground"
          >
            <WhatsappIcon className="size-8" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-secondary-foreground">
            © 2025 Leonardo Malini Coradini
          </p>
        </div>
      </div>
    </footer>
  );
}
