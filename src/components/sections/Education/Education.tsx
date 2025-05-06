"use client"

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import TimelineList from "@/components/sections/Education/TimelineList";
import { useCallback, useState } from "react";

export default function Education({ className }: { className: string }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => setScroll(true), [scroll])

  return (
    <section
      id="education"
      className={className}
      onScrollEnd={() => !scroll && handleScroll()}
    >
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="This is my"
        titleHighMd="Education"
        title="Background"
        titleHigh="Educational"
        highFirst={true}
      />

      <TimelineList scroll={scroll} />
    </section>
  )
}