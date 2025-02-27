import { TechCardProps } from "@/types/tech-card.type";

export const TechCard = ({ icon, title }: TechCardProps) => {
  return (
    <div className="border-2 border-ring bg-card rounded-2xl p-2 flex flex-col items-center  ">
      {icon}
      <p className="text-primary font-medium">{title}</p>
    </div>
  );
};
