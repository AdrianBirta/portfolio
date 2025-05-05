"use client"

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import AboutMe from "@/components/sections/About/AboutMe";
import Interests from "@/components/sections/About/Interests";
import Testimonails from "@/components/sections/About/Testimonials";
import { useCallback, useState } from "react";

export default function MicroProjects({ className, onTransitionEnd }: { className: string, onTransitionEnd: () => void }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => setScroll(true), [scroll])

  return (
    <section
      id="micro-projects"
      className={className}
      onTransitionEnd={onTransitionEnd}
      onScrollEnd={() => !scroll && handleScroll()}
    >
      <CubeTopLeftHalf />

      <HeadIntroSection
        intro="Here's my"
        titleHighMd="Welcome!"
        titleHigh="Case studies"
        title="Projects"
        highFirst
      />

    </section >
  )
}