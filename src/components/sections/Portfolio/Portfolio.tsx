import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import ProjectCards from "@/components/sections/Portfolio/ProjectCards";

export default function Portfolio({ className }: { className: string }) {
  return (
    <section id="portfolio" className={className}>
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