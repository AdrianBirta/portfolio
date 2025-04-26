"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const useHashNavigation = (sectionId: string, setHash?: (hash: string) => void) => {
  const router = useRouter();

  useEffect(() => {
    const currentActive = document.querySelector(".hashSection.active");
    if (currentActive) {
      currentActive.classList.remove("active");
      currentActive.classList.add("previous");
    }

    const nextSection = document.getElementById(sectionId);
    if (nextSection) {
      nextSection.classList.add("active");
      nextSection.classList.remove("previous");
      nextSection.scrollIntoView({ behavior: "smooth" });
      nextSection.scrollTop = 0;
    }

    // Use useRouter to update the hash in the URL
    router.push(`#${sectionId}`);
    if (setHash) setHash(sectionId);
  }, [router, sectionId, setHash]);

  return null;
}

export default useHashNavigation;