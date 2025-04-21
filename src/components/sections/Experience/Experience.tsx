import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import TimelineList from "@/components/sections/Experience/TimelineList";

export default function Experience() {
  return (
    <section id="experience" className="hashSection rounded-xl p-6 pb-10">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Summary of my"
        title="Experience"
        titleHigh="Work"
        highFirst={true}
      />

      <TimelineList />

    </section>
  )
}