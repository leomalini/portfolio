"use client";
import { Fragment } from "react";
import { FloatingNav } from "@/components/ui/navbar";
import { navItems } from "@/utils/nav-items";

import { About } from "@/components/sections/about";
import { Experiences } from "@/components/sections/experiences";
import { Technologies } from "@/components/sections/tech";
import { Projects } from "@/components/sections/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Fragment>
      <FloatingNav navItems={navItems} />
      <main className="min-h-screen flex flex-col gap-6  items-center justify-center space-y-12 px-10 py-10 pt-20 md:pt-32">
        <About />
        <Experiences />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </Fragment>
  );
}
