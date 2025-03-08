import { CSharpIcon } from "@/components/icons/c-sharp-icon";
import { DotNetIcon } from "@/components/icons/dot-net-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { SeleniumIcon } from "@/components/icons/selenium";
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
      url: "https://leaf.com.br/",
      description:
        "A Leaf Consultoria é uma empresa de tecnologia que atua na automação de processos e no desenvolvimento de soluções personalizadas. Com sede em Vitória, ES, oferece serviços como RPA, BPA e terceirização de operações, atendendo diferentes setores com foco em otimização e inovação.",
    },
    position: {
      active: false,
      title: "Estagiário de Desenvolvimento",
      period: "Mai 2023 - Jun 2024",
      responsibilities: [
        "Auxiliei no desenvolvimento de novas funcionalidades e correção de bugs em um software de gestão interna, utilizando .NET, C# e Windows Forms.",
        "Contribuí para a manutenção e aprimoramento da aplicação, garantindo sua estabilidade e usabilidade.",
        "Desenvolvi e gerenciei automações de processos (RPA) com Selenium, otimizando fluxos internos da empresa.",
        "Participei de reuniões para discutir melhorias no sistema e alinhar o desenvolvimento às necessidades do negócio.",
        "Colaborei com a equipe para implementar soluções eficientes, facilitando a operação dos usuários internos.",
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
        {
          name: "Selenium",
          url: "https://www.selenium.dev/documentation/",
          icon: <SeleniumIcon className="size-5" />,
        },
       
      ],
    },
  },
  // Adicione mais objetos conforme necessário
];
