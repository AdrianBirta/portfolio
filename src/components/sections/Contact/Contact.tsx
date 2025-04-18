import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import FormContact from "@/components/sections/Contact/FormContact";
import TitleSection from "@/components/TitleSection";

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

      <SectionBlock>
        <TitleSection leftBorder title="Send me a" titleHigh="message" />

        <FormContact />

      </SectionBlock>

    </section>
  )
}