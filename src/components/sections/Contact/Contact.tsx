import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import Icon from "@/components/icons/Icon";
import SectionBlock from "@/components/SectionBlock";
import CardInterest from "@/components/sections/About/CardInterest";
import FormContact from "@/components/sections/Contact/FormContact";
import TitleSection from "@/components/TitleSection";
import { Phone } from "@untitled-ui/icons-react";

export default function Contact({ className }: { className: string }) {
  return (
    <section id="contact" className={className}>
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Don't hesitate to"
        title="Me"
        titleHigh="Contact"
        titleHighMd="Contact"
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
            name={"Phone"}
            description={"+40 771 322 909"}
            descriptionLink={{ phone: true }}
          />
          <CardInterest
            icon={<Icon name="whatsapp" className="w-10 h-10 p-1" />}
            name={"WhatsApp"}
            description={"+40 771 322 909"}
            descriptionLink={{ whatsapp: true }}
          />
          <CardInterest
            icon={<Phone className="w-10 h-10" />}
            name={"E-mail"}
            description={"adrian.birta.dev@gmail.com"}
            descriptionLink={{ email: true }}
          />
          <CardInterest
            icon={<Phone className="w-10 h-10" />}
            name={"LinkedIn"}
            description={"@adrianbirta"}
            descriptionLink={{ linkedin: true }}
          />

        </div>

      </SectionBlock>

    </section>
  )
}