import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";

export default function Contact() {
  return (
    <section id="contact" className="hashSection rounded-xl p-6">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Don't hesitate to"
        title="Me"
        titleHigh="Contact"
        highFirst={true}
      />

    </section>
  )
}