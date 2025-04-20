import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import CardInterest from "@/components/sections/About/CardInterest";
import FormContact from "@/components/sections/Contact/FormContact";
import TitleSection from "@/components/TitleSection";
import { Phone } from "@untitled-ui/icons-react";

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

      <SectionBlock>
        <TitleSection leftBorder title="Or if you" titleHigh="prefer" />

        <div className="interests flex flex-wrap gap-6 justify-center">
          <CardInterest
            icon={<Phone className="w-10 h-10" />}
            name={"Phone / WhatsApp"}
            description={"+40771322909"}
            descriptionLink={{ phone: true }}
          />

        </div>

      </SectionBlock>

    </section>
  )
}