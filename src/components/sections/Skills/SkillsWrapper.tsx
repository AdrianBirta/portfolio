"use client"

import Skill from "@/components/sections/Skills/Skill";
import { SectionType } from "@/components/sections/Skills/Skills";
import { useEffect, useState } from "react";

export default function SkillsWrapper({ skills }: { skills: SectionType[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && !showMore ?
        skills.slice(0, 4).map((skill) => (
          <Skill
            key={skill.iconName}
            iconName={skill.iconName}
            skillName={skill.skillName}
            years={skill.years}
          />
        ))
        : skills.map((skill) => (
          <Skill
            key={skill.iconName}
            iconName={skill.iconName}
            skillName={skill.skillName}
            years={skill.years}
          />
        ))}

      {isMobile && !showMore &&
        <span
          className="form-button-submit rounded-xl cursor-pointer text-xs"
          onClick={() => setShowMore(true)}
        >
          Show More
        </span>}
    </>
  )
}