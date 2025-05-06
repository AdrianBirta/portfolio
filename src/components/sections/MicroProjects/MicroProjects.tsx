"use client"

import CubeTopLeftHalf from "@/components/CubeTopLeftHalf";
import HeadIntroSection from "@/components/HeadIntroSection";
import { useCallback, useState } from "react";

export default function MicroProjects({ className }: { className: string }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => setScroll(true), [scroll])

  return (
    <section
      id="micro-projects"
      className={className}
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