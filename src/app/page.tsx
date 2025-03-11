import { Fragment } from "react";

import { About } from "@/components/sections/about";
import { Experiences } from "@/components/sections/experiences";
import { Technologies } from "@/components/sections/tech";
import { Projects } from "@/components/sections/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leonardo Malini Coradini",
  description: "...",
  keywords: [
    "Web",
    "FrontEnd Portfolio",
    "Malini",
    "Coradini",
    "React Portfolio",
    "Front Porfolio",
    "FrontEnd Developer",
    "FrontEnd Developer Portfolio",
  ],
};
export default function Home() {
  return (
    <Fragment>
      <About />
      <Experiences />
      <Technologies />
      <Projects />
    </Fragment>
  );
}
