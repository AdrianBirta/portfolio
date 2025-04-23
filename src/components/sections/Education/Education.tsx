import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import TimelineList from "@/components/sections/Education/TimelineList";

export default function Education({ className }: { className: string }) {
  return (
    <section id="education" className={className}>
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="This is my"
        titleHighMd="Education"
        title="Background"
        titleHigh="Educational"
        highFirst={true}
      />

      <TimelineList />
    </section>
  )
}