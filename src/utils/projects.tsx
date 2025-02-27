import { type ProjectCardProps } from "@/types/project-card.type";

export const projects: ProjectCardProps[] = [
  {
    urlSite: "https://meuprojeto1.com",
    img: "/images/profile.jpeg",
    title: "Dashboard Financeiro",
    description: "Uma plataforma para monitoramento de receitas e despesas.",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    urlRepository: "https://github.com/usuario/dashboard-financeiro",
  },
  {
    urlSite: "https://meuprojeto2.com",
    img: "/images/profile.jpeg",
    title: "E-commerce",
    description:
      "Uma loja virtual completa com carrinho de compras e pagamentos.",
    techs: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    urlRepository: "https://github.com/usuario/ecommerce",
  },
  {
    urlSite: "https://meuprojeto3.com",
    img: "/images/profile.jpeg",
    title: "Gerenciador de Tarefas",
    description:
      "Aplicação para organização de tarefas com kanban e notificações.",
    techs: ["React", "Zustand", "Shadcn", "Framer Motion"],
    urlRepository: "https://github.com/usuario/gerenciador-tarefas",
  },
  {
    urlSite: "https://meuprojeto4.com",
    img: "/images/profile.jpeg",
    title: "Blog Pessoal",
    description:
      "Um blog minimalista para compartilhar artigos sobre tecnologia.",
    techs: ["Next.js", "MDX", "TailwindCSS", "Prisma"],
    urlRepository: "https://github.com/usuario/blog-pessoal",
  },
];

export default projects;
