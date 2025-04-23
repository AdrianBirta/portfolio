import SectionBlock from "@/components/SectionBlock";
import Slider from "@/components/sections/About/Slider/Slider";
import TitleSection from "@/components/TitleSection";

export default function Testimonails() {
  return (
    <SectionBlock>
      <TitleSection leftBorder={true} title="Client" titleHigh="testimonials" />

      <Slider />

    </SectionBlock>
  )
}