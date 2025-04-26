"use client"

import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Skills from "@/components/sections/Skills/Skills";
import { useEffect, useState } from "react";

export default function SectionsWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 3000); // adjust delay for smoother UX

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Scroll to hash once DOM is ready
    const hash = window.location.hash?.replace('#', '') || 'about';
    const el = document.getElementById(hash);

    if (el) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mounted]);

  return (
    <>
      {
        !mounted ?
          <div className="fixed top-0 bottom-0 right-0 left-0 bg-black flex items-center justify-center z-50 ">
            <div className="animate-pulse text-xl">
              Loading...
            </div>
          </div>
          :
          <div className="sectionsContainerWrapper w-full h-full sm:pl-10 sm:pr-5">
            <div className="hashSectionsContainer sm:px-2">
              <About className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
              <Contact className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
              <Education className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12" />
              <Experience className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12" />
              <Portfolio className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
              <Skills className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
            </div>
          </div>

      }
    </>
  )
}