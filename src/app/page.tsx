"use client";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypescriptIcon } from "@/components/icons/typescript-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { GitIcon } from "@/components/icons/git-icon";
import Image from "next/image";
import profile from "../../public/images/profile.jpeg";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Fragment>
      <section id="sobre" className="container py-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-lg py-8"
        >
          <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col justify-between items-center"
            >
              <h2 className="max-w-4xl text-4xl font-bold md:text-5xl lg:text-6xl">
                Olá, me chamo{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Leonardo!
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4 max-w-lg text-center">
                Welcome to my over-engineered personal blog where I write about
                software engineering, productivity, and other stupid stuff.
                Also, it&apos;s my portfolio.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section id="experiences" className="container">
        <div className="flex flex-col  gap-8 md:gap-12 items-center justify-center">
          <p className="text-start w-full font-bold text-4xl">Experiencias</p>
          <Tabs
            defaultValue="globalsys"
            orientation="vertical"
            className="flex flex-row gap-4 w-full"
          >
            <TabsList className="flex  md:flex-col items-start md:space-y-2 w-fit h-fit">
              <TabsTrigger value="globalsys" className="w-full justify-between">
                {/* TODO componentizar esses elementos */}
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
              className="bg-muted rounded w-full mt-0 p-4"
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
          <div className="w-full border bg-muted rounded-xl p-6 grid grid-cols-7 gap-4 items-center justify-start">
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <TypescriptIcon />
              <p className="text-white font-medium">TypeScript</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <ReactIcon />
              <p className="text-primary font-medium">React</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <TailwindIcon />
              <p className="text-white font-medium">Tailwind</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <JavaScriptIcon />
              <p className="text-white font-medium">JavaScript</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <NodeIcon className="h-10 w-10" />
              <p className="text-white font-medium">NodeJS</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <NextIcon />
              <p className="text-white font-medium">NextJS</p>
            </div>
            <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
              <GitIcon />
              <p className="text-white font-medium">Git</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-start w-full font-bold text-4xl">Projetos</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full group">
              <div className="p-4">
                <Link href={""}>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={profile.src}
                      alt="profile"
                      width={400}
                      height={400}
                      className=" object-fill group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col space-y-1.5 p-6 pt-0 pb-3">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  <div className="flex gap-2 items-center">
                    <Link href="https://cvzdarma.cz">
                      Ferramenta de criação de currículos com IA
                    </Link>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Crie seu currículo em poucos minutos. A ferramenta irá
                  ajudá-lo com o conteúdo e o design.
                </p>
              </div>
              <div className="items-center p-6 pt-0 *:mr-2 *:mb-2 flex flex-wrap">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Next.js 15
                </div>
                {/* TODO badge */}
              </div>
              <div className="items-center p-6 pt-0 *:mr-2 *:mb-2 flex flex-wrap justify-end">
                Github icon
                {/* TODO link project */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div>
          <p>Contato</p>
        </div>
      </section>
    </Fragment>
  );
}
