"use client"

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import TitleSection from "@/components/TitleSection";

import Slider from "@/components/sections/Skills/Slider/Slider";
import SkillsWrapper from "@/components/sections/Skills/SkillsWrapper";
import { useCallback, useState } from "react";
import { SectionType } from "@/types";

const skills: {
  frontend: SectionType[]
  backend: SectionType[]
} = {
  frontend: [
    { iconName: "html", skillName: "HTML", years: "5+" },
    { iconName: "css", skillName: "CSS", years: "5+" },
    { iconName: "sass", skillName: "SASS (SCSS)", years: "5+" },
    { iconName: "javascript", skillName: "JavaScript", years: "5+" },
    { iconName: "typescript", skillName: "TypeScript", years: "4+" },
    { iconName: "react", skillName: "React.js", years: "5+" },
    { iconName: "redux", skillName: "Redux.js", years: "4+" },
    { iconName: "tailwind", skillName: "Tailwind CSS", years: "3+" },
    { iconName: "matherialui", skillName: "Matherial UI", years: "3+" },
    { iconName: "bootstrap", skillName: "Bootstrap", years: "3+" },
    { iconName: "chartjs", skillName: "Chart.js", years: "3+" },
    { iconName: "d3", skillName: "D3.js", years: "2+" },
    { iconName: "leaflet", skillName: "Leaflet.js", years: "3+" },
    { iconName: "mapbox", skillName: "Mapbox.js", years: "3+" },
    { iconName: "arcgis", skillName: "ArcGIS.js", years: "3+" },
    { iconName: "quasar", skillName: "Quasar framework", years: "3+" },
    { iconName: "vuejs", skillName: "Vue.js", years: "3+" },
    { iconName: "jest", skillName: "Jest", years: "4+" },
    { iconName: "cypress", skillName: "Cypress", years: "3+" },

  ],
  backend: [
    { iconName: "nextjs", skillName: "Next.js", years: "3+" },
    { iconName: "nodejs", skillName: "Node.js", years: "3+" },
    { iconName: "express", skillName: "Express.js", years: "3+" },
    { iconName: "mongodb", skillName: "MongoDB", years: "2+" },
    { iconName: "graphql", skillName: "GraphQL", years: "3+" },
    { iconName: "mysql", skillName: "MySQL", years: "3+" },
    { iconName: "amazon", skillName: "AWS", years: "3+" },
    { iconName: "docker", skillName: "Docker", years: "3+" },
    { iconName: "git", skillName: "Git", years: "5+" },
    { iconName: "gitlab", skillName: "Gitlab", years: "4+" },
  ]
};

export default function Skills({ className }: { className: string }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => setScroll(true), [scroll])

  return (
    <section
      id="skills"
      className={className}
      onScrollEnd={() => !scroll && handleScroll()}
    >
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Explore"
        title="My"
        titleHigh="Skill Set"
        titleHighMd="Skills"
      />

      <SectionBlock>
        <Slider />
      </SectionBlock>

      <SectionBlock>
        <TitleSection leftBorder={true} title="Frontend" />
        <div className="skills-container flex flex-wrap gap-6 justify-center">
          <SkillsWrapper
            skills={skills.frontend}
            scroll={scroll}
          />
        </div>
      </SectionBlock>

      {scroll && (
        <SectionBlock>
          <TitleSection leftBorder={true} title="Backend" />
          <div className="skills-container flex flex-wrap gap-6 justify-center sm:pb-0 pb-10">
            <SkillsWrapper
              skills={skills.backend}
              scroll={scroll}
            />
          </div>
        </SectionBlock>
      )}


    </section>
  )
}