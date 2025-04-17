import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";

export default function Portfolio() {
  return (
    <section id="portfolio" className="hashSection rounded-xl p-6">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Take a look at"
        title="My"
        titleHigh="Past Projects"
      />

    </section>
  )
}