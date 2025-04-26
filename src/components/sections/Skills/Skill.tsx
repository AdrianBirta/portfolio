import Icon from "@/components/icons/Icon";
import SkillBar from "@/components/sections/Skills/SkillBar";

import { iconMap } from "@/components/icons/iconMap";

type IconName = keyof typeof iconMap;

export default function Skill({
  iconName,
  skillName,
  years
}: {
  iconName: IconName;
  skillName: string;
  years: string;
}) {
  return (
    <div className="skill flex gap-4 xl:w-[30%] md:w-[47%] w-[100%] items-center p-4 bg-light-highlight rounded-2xl">
      <Icon name={iconName} className="w-8 h-8" />
      <SkillBar skill={skillName} years={years} />
    </div>
  )
}