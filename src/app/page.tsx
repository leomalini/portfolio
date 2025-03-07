import { Fragment } from "react";

import { About } from "@/components/sections/about";
import { Experiences } from "@/components/sections/experiences";
import { Technologies } from "@/components/sections/tech";
import { Projects } from "@/components/sections/projects";

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
