import SubtitleSmall from "@/components/SubtitleSmall";
import { ClockRewind } from "@untitled-ui/icons-react";

type SkillBarProps = {
  skill: string;
  years: string;
};

export default function SkillBar({ skill, years }: SkillBarProps) {
  return (
    <div className="skill-details w-full" >
      <p className="text-sm mb-2 font-bold">{skill}</p>
      <div className="skill-pipe badge-bg-highlight w-full h-1 rounded-2xl overflow-hidden">
        <div
          className={`skill-level`}
        />
      </div>
      <SubtitleSmall
        icon={<ClockRewind className="w-4 h-4 mr-2" />}
        text={`${years} years`}
        className="pl-0 text-xs"
      />
    </div>
  );
}
