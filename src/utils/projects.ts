// hooks/useProjects.ts
import { useLanguage } from "@/contexts/LanguageContext";
import { type ProjectCardProps } from "@/types/project-card.type";

export const useProjects = (): ProjectCardProps[] => {
  const { t } = useLanguage();

  return [
    {
      img: "/images/NLW.png",
      title: t("nlw_connect_title"),
      description: t("nlw_connect_description"),
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      urlRepository: "https://github.com/leomalini/NLW-Connect",
    },
    {
      img: "/images/Contatos.png",
      title: t("contact_system_title"),
      description: t("contact_system_description"),
      techs: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework"],
      urlRepository: "https://github.com/leomalini/Sistema-CadastroContatos",
    },
    {
      urlSite: "https://leonardocoradini.vercel.app/",
      img: "/images/portfolioImg.png",
      title: t("personal_portfolio_title"),
      description: t("personal_portfolio_description"),
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      urlRepository: "https://github.com/leomalini/portfolio",
    },
    {
      urlSite: "https://manzoli-services.vercel.app/",
      img: "/images/Manzoli.png",
      title: t("manzoli_services_title"),
      description: t("manzoli_services_description"),
      techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      urlRepository: "",
    },
  ];
};
