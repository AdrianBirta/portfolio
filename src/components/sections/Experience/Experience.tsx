"use client"

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import TimelineList from "@/components/sections/Experience/TimelineList";
import { useCallback, useState } from "react";

export default function Experience({ className, onTransitionEnd }: { className: string, onTransitionEnd: () => void }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => setScroll(true), [scroll])

  return (
    <section
      id="experience"
      className={className}
      onTransitionEnd={onTransitionEnd}
      onScrollEnd={() => !scroll && handleScroll()}
    >
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Summary of my"
        title="Experience"
        titleHigh="Work"
        titleHighMd="Experience"
        highFirst={true}
      />

      <TimelineList scroll={scroll} />

    </section>
  )
}