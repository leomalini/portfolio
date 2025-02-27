"use client";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github-icon";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { EmailIcon } from "@/components/icons/email-icon";
import { FloatingNav } from "@/components/ui/navbar";
import { navItems } from "@/utils/nav-items";
import techCards from "@/utils/tech-items";
import { TechCard } from "@/components/tech-card";
import projects from "@/utils/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Fragment>
      <FloatingNav navItems={navItems} />
      <main className="min-h-screen flex flex-col gap-6  items-center justify-center space-y-12 px-10 py-10 pt-20 md:pt-32">
        <section id="sobre" className="container py-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-lg py-8"
          >
            <div className=" flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col justify-between items-center"
              >
                <h2 className="max-w-4xl text-5xl font-bold md:text-5xl lg:text-6xl text-center">
                  Olá, me chamo{" "}
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Leonardo!
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-lg text-center">
                  Welcome to my over-engineered personal blog where I write
                  about software engineering, productivity, and other stupid
                  stuff. Also, it&apos;s my portfolio.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section id="experiences" className="container">
          <div className="flex flex-col  gap-8 md:gap-12 items-center justify-center">
            <p className="text-start w-full font-bold text-4xl">Experiencias</p>
            {/* TODO componentizar esses elementos */}
            <Tabs
              defaultValue="globalsys"
              orientation="vertical"
              className="flex flex-col md:flex-row gap-4 w-full"
            >
              <TabsList className="flex flex-wrap md:flex-col items-start md:space-y-2 w-full md:w-fit h-fit">
                <TabsTrigger
                  value="globalsys"
                  className="w-full justify-between"
                >
                  <span className="flex flex-row gap-1 items-center w-full">
                    Globalsys
                  </span>
                  <span className="mx-1 inline-block h-3 w-3 rounded-full  bg-green-300"></span>
                </TabsTrigger>
                <TabsTrigger value="leaf" className="w-full">
                  <span className="flex flex-row gap-1 items-center w-full">
                    Leaf
                  </span>
                </TabsTrigger>
                <TabsTrigger value="security" className="w-full">
                  <span className="flex flex-row gap-1 items-center w-full">
                    Grupo Águia Branca
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="globalsys"
                className="bg-muted rounded-lg w-full mt-0 p-4"
              >
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="leaf">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="tech" className="container">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-start w-full font-bold text-4xl">
              Tecnologias com que trabalho
            </p>
            <div className="w-full border bg-muted rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 items-center justify-start">
              {techCards.map((tech, index) => {
                return (
                  <TechCard key={index} icon={tech.icon} title={tech.title} />
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="container">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-start w-full font-bold text-4xl">Projetos</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-8">
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </div>
          </div>
        </section>
      </main>
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
    </Fragment>
  );
}
