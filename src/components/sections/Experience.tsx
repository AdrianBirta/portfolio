import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";

export default function Experience() {
  return (
    <section id="experience" className="hashSection rounded-xl p-6">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Summary of my"
        title="Experience"
        titleHigh="Work"
        highFirst={true}
      />

    </section>
  )
}