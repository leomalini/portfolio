import { type ProjectCardProps } from "@/types/project-card.type";

export const projects: ProjectCardProps[] = [
  {
    img: "/images/NLW.png",
    title: "NLW Connect",
    description:
      "O projeto é um site responsivo de inscrição e indicação para eventos. Esse é um projeto do evento NLW Connect, um dos conteúdos disponíveis para alunos da Rocketseat.",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    urlRepository: "https://github.com/leomalini/NLW-Connect",
  },
  {
    img: "/images/Contatos.png",
    title: "Sistema de Cadastro de Contatos",
    description:
      "Um sistema web para gerenciamento de contatos, desenvolvido com foco em segurança e eficiência. Conta com criptografia para armazenamento de senhas e um mecanismo de recuperação via e-mail. A aplicação utiliza ASP.NET MVC para estruturação e SQL Server para armazenamento de dados, garantindo escalabilidade e alto desempenho.",
    techs: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework"],
    urlRepository: "https://github.com/leomalini/Sistema-CadastroContatos",
  },
  {
    urlSite: "https://meuprojeto3.com",
    img: "/images/portfolioImg.png",
    title: "Portfólio Pessoal",
    description:
      "Meu portfólio pessoal, onde apresento meus projetos, habilidades e experiências.",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    urlRepository: "https://github.com/leomalini/portfolio",
  },
];

export default projects;
