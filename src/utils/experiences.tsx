import { CSharpIcon } from "@/components/icons/c-sharp-icon";
import { DotNetIcon } from "@/components/icons/dot-net-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { GraphqlIcon } from "@/components/icons/graphql-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";

import { useLanguage } from "@/contexts/LanguageContext";

export const useExperiences = () => {
  const { t } = useLanguage();

  return [
    {
      key: "globalsys",
      company: {
        name: "Globalsys",
        url: "https://globalsys.com.br/",
        description: t("globalsys_description"),
      },
      active: true,
      positions: [
        {
          active: true,
          title: t("globalsys_position"),
          period: t("globalsys_period"),
          responsibilities: [
            t("globalsys_responsibility_1"),
            t("globalsys_responsibility_2"),
            t("globalsys_responsibility_3"),
            t("globalsys_responsibility_4"),
          ],
          technologies: [
            {
              name: "React",
              url: "https://react.dev/",
              icon: <ReactIcon className="size-5" />,
            },
            {
              name: "TypeScript",
              url: "https://www.typescriptlang.org/",
              icon: <TypescriptIcon className="size-5" />,
            },
            {
              name: "JavaScript",
              url: "https://github.com/",
              icon: <JavaScriptIcon className="size-5" />,
            },
            {
              name: "Tailwind CSS",
              url: "https://tailwindcss.com/",
              icon: <TailwindIcon className="size-5" />,
            },
            {
              name: "Next.js",
              url: "https://nextjs.org/",
              icon: <NextIcon className="size-5" />,
            },
            {
              name: "GitHub",
              url: "https://github.com/",
              icon: <GitHubIcon className="size-5 text-foreground" />,
            },
            {
              name: "GraphQL",
              url: "https://graphql.org/",
              icon: <GraphqlIcon className="size-5 text-foreground" />,
            },
          ],
        },
        {
          active: false,
          title: t("globalsys_position_2"),
          period: t("globalsys_period_2"),
          responsibilities: [
            t("globalsys_responsibility2_1"),
            t("globalsys_responsibility2_2"),
            t("globalsys_responsibility2_3"),
            t("globalsys_responsibility2_4"),
            t("globalsys_responsibility2_5"),
          ],
          technologies: [
            {
              name: "React",
              url: "https://react.dev/",
              icon: <ReactIcon className="size-5" />,
            },
            {
              name: "TypeScript",
              url: "https://www.typescriptlang.org/",
              icon: <TypescriptIcon className="size-5" />,
            },
            {
              name: "JavaScript",
              url: "https://github.com/",
              icon: <JavaScriptIcon className="size-5" />,
            },
            {
              name: "Tailwind CSS",
              url: "https://tailwindcss.com/",
              icon: <TailwindIcon className="size-5" />,
            },
            {
              name: "Next.js",
              url: "https://nextjs.org/",
              icon: <NextIcon className="size-5" />,
            },
            {
              name: "GitHub",
              url: "https://github.com/",
              icon: <GitHubIcon className="size-5 text-foreground" />,
            },
            {
              name: "GraphQL",
              url: "https://graphql.org/",
              icon: <GraphqlIcon className="size-5 text-foreground" />,
            },
          ],
        },
      ],
    },
    {
      key: "leaf",
      company: {
        name: "Leaf",
        url: "https://leaf.com.br/",
        description: t("leaf_description"),
      },
      active: false,
      positions: [
        {
          active: false,
          title: t("leaf_position"),
          period: t("leaf_period"),
          responsibilities: [
            t("leaf_responsibility_1"),
            t("leaf_responsibility_2"),
            t("leaf_responsibility_3"),
            t("leaf_responsibility_4"),
            t("leaf_responsibility_5"),
          ],
          technologies: [
            {
              name: "C#",
              url: "https://dotnet.microsoft.com/pt-br/languages/csharp",
              icon: <CSharpIcon className="size-5" />,
            },
            {
              name: ".NET",
              url: "https://learn.microsoft.com/pt-br/dotnet/",
              icon: <DotNetIcon className="size-5" />,
            },
          ],
        },
      ],
    },
  ];
};
