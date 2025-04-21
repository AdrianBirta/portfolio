import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import SectionBlock from "@/components/SectionBlock";
import AboutMe from "@/components/sections/About/AboutMe";
import Interests from "@/components/sections/About/Interests";
import Testimonails from "@/components/sections/About/Testimonials";
import TitleSection from "@/components/TitleSection";

export default function About() {
  return (
    <section id="about" className="hashSection rounded-xl p-6 pb-10">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Hello..."
        title="I'm"
        titleHigh="Adrian Birta!"
        address={true}
      />

      <AboutMe />

      <Testimonails />

      <Interests />

    </section >
  )
}