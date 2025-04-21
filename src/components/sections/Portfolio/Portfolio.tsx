import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import ProjectCards from "@/components/sections/Portfolio/ProjectCards";

export default function Portfolio() {
  return (
    <section id="portfolio" className="hashSection rounded-xl p-6 pb-10">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Take a look at"
        title="My"
        titleHigh="Past Projects"
      />

      <SectionBlock>
        <ProjectCards />
      </SectionBlock>

    </section>
  )
}