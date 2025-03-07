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
            href={""}
            className="p-1 hover:bg-primary hover:text-secondary rounded-full transition-colors duration-300 text-zinc-300"
          >
            <GitHubIcon className="size-8" />
          </Link>
          <Link
            href={""}
            className="p-1 hover:bg-primary hover:text-blue-500 rounded-full transition-colors duration-300 text-zinc-300"
          >
            <LinkedinIcon className="size-8" />
          </Link>
          <Link
            href={""}
            className="p-1 hover:bg-primary hover:text-secondary rounded-full transition-colors duration-300 text-zinc-300"
          >
            <EmailIcon className="size-8" />
          </Link>
          <Link
            href={""}
            className="p-1 hover:bg-primary hover:text-green-500 rounded-full transition-colors duration-300 text-zinc-300"
          >
            <WhatsappIcon className="size-8" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-zinc-300">
            © 2025 Leonardo Malini Coradini
          </p>
        </div>
      </div>
    </footer>
  );
}
