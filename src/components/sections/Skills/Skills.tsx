import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import Skill from "@/components/sections/Skills/Skill";
import TitleSection from "@/components/TitleSection";

import { iconMap } from "@/components/icons/iconMap";
import Slider from "@/components/sections/Skills/Slider/Slider";


type SectionType = {
  iconName: keyof typeof iconMap,
  skillName: string,
  years: string
}

const skills: {
  frontend: SectionType[]
  backend: SectionType[]
} = {
  frontend: [
    { iconName: "html", skillName: "HTML", years: "5+" },
    { iconName: "css", skillName: "CSS", years: "5+" },
    { iconName: "sass", skillName: "SASS (SCSS)", years: "5+" },
    { iconName: "javascript", skillName: "JavaScript", years: "5+" },
    { iconName: "typescript", skillName: "TypeScript", years: "5+" },
    { iconName: "react", skillName: "React.js", years: "5+" },
    { iconName: "redux", skillName: "Redux.js", years: "5+" },
    { iconName: "bootstrap", skillName: "Bootstrap", years: "5+" },
    { iconName: "chartjs", skillName: "Chart.js", years: "5+" },
    { iconName: "d3", skillName: "D3.js", years: "3+" },
    { iconName: "leaflet", skillName: "Leaflet.js", years: "3+" },
    { iconName: "mapbox", skillName: "Mapbox.js", years: "3+" },
    { iconName: "arcgis", skillName: "ArcGIS.js", years: "3+" },
    { iconName: "quasar", skillName: "Quasar framework", years: "3+" },
    { iconName: "tailwind", skillName: "Tailwind CSS", years: "3+" },
    { iconName: "vuejs", skillName: "Vue.js", years: "3+" },
    { iconName: "jest", skillName: "Jest", years: "4+" },
    { iconName: "cypress", skillName: "Cypress", years: "3+" },

  ],
  backend: [
    { iconName: "nextjs", skillName: "Next.js", years: "3+" },
    { iconName: "nodejs", skillName: "Node.js", years: "4+" },
    { iconName: "express", skillName: "Express.js", years: "3+" },
    { iconName: "mongodb", skillName: "MongoDB", years: "3+" },
    { iconName: "graphql", skillName: "GraphQL", years: "3+" },
    { iconName: "mysql", skillName: "MySQL", years: "3+" },
    { iconName: "amazon", skillName: "AWS", years: "3+" },
    { iconName: "docker", skillName: "Docker", years: "3+" },
    { iconName: "git", skillName: "Git", years: "5+" },
    { iconName: "gitlab", skillName: "Gitlab", years: "4+" },
  ]
};

export default function Skills({ className }: { className: string }) {
  return (
    <section id="skills" className={className}>
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
          {skills.frontend.map((skill) => (
            <Skill
              key={skill.iconName}
              iconName={skill.iconName}
              skillName={skill.skillName}
              years={skill.years}
            />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock>
        <TitleSection leftBorder={true} title="Backend" />
        <div className="skills-container flex flex-wrap gap-6 justify-center">
          {skills.backend.map((skill) => (
            <Skill
              key={skill.iconName}
              iconName={skill.iconName}
              skillName={skill.skillName}
              years={skill.years}
            />
          ))}
        </div>
      </SectionBlock>

    </section>
  )
}