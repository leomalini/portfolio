"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import Link from "next/link";
import { experiences } from "@/utils/experiences";

export const Experiences = () => {
  return (
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
            {experiences.map((item) => {
              return (
                <TabsTrigger
                  key={item.key}
                  value={item.key}
                  className="w-full justify-between min-w-44"
                >
                  <span className="flex flex-row gap-1 items-center w-full mr-3">
                    {item.company.name}
                  </span>
                  {item.position.active && (
                    <span className="mx-1 inline-block h-3 w-3 rounded-full bg-green-300" />
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {experiences.map((item) => {
            return (
              <TabsContent
                key={item.key}
                value={item.key}
                className="bg-muted rounded-lg w-full mt-0 p-4"
              >
                <div className="flex flex-col p-2 gap-2">
                  <Link href={item.company.url} target="_blank">
                    <p className="font-semibold text-2xl hover:underline underline-offset-4">
                      {item.company.name}
                    </p>
                  </Link>
                  <p className="font-normal text-base text-muted-foreground">
                    {item.company.description}
                  </p>
                </div>
                <Timeline>
                  <TimelineItem>
                    <TimelineHeading>
                      <p className="font-semibold text-lg text-foreground">
                        {item.position.title}
                      </p>
                    </TimelineHeading>
                    <TimelineDot
                      status={item.position.active ? "done" : "default"}
                    />
                    <TimelineLine />
                    <TimelineContent>
                      <div className="flex flex-col gap-1">
                        <p className="font-normal text-sm text-muted-foreground">
                          {item.position.period}
                        </p>
                        <p className="font-normal text-base text-muted-foreground">
                          {item.position.responsibilities}
                        </p>
                        <div className="flex flex-row gap-2">
                          <p className="font-normal text-sm text-muted-foreground">
                            Tecnologias utilizadas:
                          </p>
                          <div className="flex flex-row gap-2">
                            {item.position.technologies.map((tech) => (
                              <Link
                                key={tech.name}
                                href={tech.url}
                                target="_blank"
                              >
                                {tech.icon}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
