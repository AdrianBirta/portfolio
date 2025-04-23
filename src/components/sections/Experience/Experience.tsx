import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import TimelineList from "@/components/sections/Experience/TimelineList";

export default function Experience({ className }: { className: string }) {
  return (
    <section id="experience" className={className}>
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Summary of my"
        title="Experience"
        titleHigh="Work"
        titleHighMd="Experience"
        highFirst={true}
      />

      <TimelineList />

    </section>
  )
}