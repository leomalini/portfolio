import { GitHubIcon } from "@/components/icons/github-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";

export const experiences = [
  {
    key: "globalsys",
    company: {
      name: "Globalsys",
      url: "https://globalsys.com.br/",
      description:
        "A Globalsys é uma empresa brasileira de TI, fundada em 2008 em Vila Velha, ES, focada em transformação digital, administração de bancos de dados e soluções personalizadas como sistemas web e mobile, atendendo diversos setores com tecnologia inovadora.",
    },
    position: {
      active: true,
      title: "Estagiário FrontEnd",
      period: "Jun 2024 - Atual",
      responsibilities: [
        "Auxiliei no desenvolvimento de novas funcionalidades e correção de bugs, contribuindo para a melhoria contínua e estabilidade do software.",
        "Ajudei a manter a performance do frontend, garantindo uma experiência de usuário otimizada.",
        "Participei de reuniões de produto para discutir e idealizar melhorias, apoiando o crescimento estratégico da plataforma.",
        "Colaborei com equipes multifuncionais para alinhar os esforços de desenvolvimento aos objetivos do negócio e às necessidades dos usuários.",
        "Trabalhei na criação de protótipos e implementação de componentes interativos utilizando React, TypeScript e Next.js.",
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
      ],
    },
  },
  {
    key: "leaf",
    company: {
      name: "Leaf",
      url: "https://globalsys.com.br/",
      description:
        "A Globalsys é uma empresa brasileira de TI, fundada em 2008 em Vila Velha, ES, focada em transformação digital, administração de bancos de dados e soluções personalizadas como sistemas web e mobile, atendendo diversos setores com tecnologia inovadora.",
    },
    position: {
      active: false,
      title: "Estagiário FrontEnd",
      period: "Jun 2024 - Atual",
      responsibilities: [
        "Auxiliei no desenvolvimento de novas funcionalidades e correção de bugs, contribuindo para a melhoria contínua e estabilidade do software.",
        "Ajudei a manter a performance do frontend, garantindo uma experiência de usuário otimizada.",
        "Participei de reuniões de produto para discutir e idealizar melhorias, apoiando o crescimento estratégico da plataforma.",
        "Colaborei com equipes multifuncionais para alinhar os esforços de desenvolvimento aos objetivos do negócio e às necessidades dos usuários.",
        "Trabalhei na criação de protótipos e implementação de componentes interativos utilizando React, TypeScript e Next.js.",
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
      ],
    },
  },
  // Adicione mais objetos conforme necessário
];
