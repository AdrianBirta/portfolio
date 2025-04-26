import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import ProjectCards from "@/components/sections/Portfolio/ProjectCards";

export default function Portfolio({ className, onTransitionEnd }: { className: string, onTransitionEnd: () => void }) {
  return (
    <section id="portfolio" className={className} onTransitionEnd={onTransitionEnd}>
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Take a look at"
        title="My"
        titleHigh="Past Projects"
        titleHighMd="Portfolio"
      />

      <SectionBlock>
        <ProjectCards />
      </SectionBlock>

    </section>
  )
}