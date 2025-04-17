import BadgePill from "@/components/BadgePill";
import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadBlock from "@/components/HeadBlock";
import HeadIntroSection from "@/components/HeadIntroSection";
import ListBlock from "@/components/ListBlock";
import TimelineList from "@/components/sections/Education/TimelineList";
import { GraduationHat02 } from "@untitled-ui/icons-react";

export default function Education() {
  return (
    <section id="education" className="hashSection rounded-xl p-6">
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="This is my"
        title="Background"
        titleHigh="Educational"
        highFirst={true}
      />

      <TimelineList />
    </section>
  )
}