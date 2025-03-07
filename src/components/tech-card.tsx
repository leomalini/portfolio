import { TechCardProps } from "@/types/tech-card.type";

export const TechCard = ({ icon, title }: TechCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-2 flex flex-col items-center  ">
      {icon}
      <p className="dark:text-white font-medium">{title}</p>
    </div>
  );
};
