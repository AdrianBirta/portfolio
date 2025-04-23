import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import AboutMe from "@/components/sections/About/AboutMe";
import Interests from "@/components/sections/About/Interests";
import Testimonails from "@/components/sections/About/Testimonials";

export default function About({ className }: { className: string }) {
  return (
    <section id="about" className={className}>
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Hello..."
        titleHighMd="Welcome!"
        titleHigh="Adrian Birta!"
        title="I'm"
        address={true}
      />

      <AboutMe />

      <Testimonails />

      <Interests />

    </section >
  )
}