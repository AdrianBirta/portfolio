"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load sections with optional loading fallback
const About = dynamic(() => import("@/components/sections/About/About"), {
  loading: () => <SectionLoading name="About" />,
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"), {
  loading: () => <SectionLoading name="Contact" />,
  ssr: false,
});
const Education = dynamic(() => import("@/components/sections/Education/Education"), {
  loading: () => <SectionLoading name="Education" />,
  ssr: false,
});
const Experience = dynamic(() => import("@/components/sections/Experience/Experience"), {
  loading: () => <SectionLoading name="Experience" />,
  ssr: false,
});
const Portfolio = dynamic(() => import("@/components/sections/Portfolio/Portfolio"), {
  loading: () => <SectionLoading name="Portfolio" />,
  ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills/Skills"), {
  loading: () => <SectionLoading name="Skills" />,
  ssr: false,
});

// Loading fallback component
function SectionLoading({ name }: { name: string }) {
  return (
    <div className="flex justify-center items-center min-h-[200px] animate-pulse text-muted-foreground text-sm">
      <div className="flex flex-col items-center">
        <div className="spinner-border animate-spin mb-2" role="status">
          <span className="sr-only text-highlight">Loading...</span>
        </div>
        <span className="text-highlight">Loading {name}...</span>
      </div>
    </div>
  );
}

export default function SectionsWrapper() {
  const [mounted, setMounted] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>("");
  const [isVisible, setIsVisible] = useState({
    about: false,
    contact: false,
    education: false,
    experience: false,
    portfolio: false,
    skills: false,
  });

  // Simulated delay before mount (can be removed or tuned)
  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  // Scroll to current hash section on mount
  useEffect(() => {
    if (!mounted) return;
    const hash = window.location.hash?.replace("#", "") || "about";
    const el = document.getElementById(hash);
    if (el) {
      el.classList.add("active");
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [mounted]);

  // Handle hash change and set visibility
  useEffect(() => {
    const updateHashAndVisibility = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentHash(hash);
      setIsVisible((prev) => ({ ...prev, [hash]: true }));
    };

    updateHashAndVisibility();
    window.addEventListener("hashchange", updateHashAndVisibility);
    return () => window.removeEventListener("hashchange", updateHashAndVisibility);
  }, []);

  const handleTransitionEnd = (section: string) => {
    setIsVisible((prev) => {
      const newState = { ...prev };
      if (currentHash !== section) {
        //@ts-ignore
        newState[section] = false;
      }
      return newState;
    });
  };

  return (
    <>
      {!mounted ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black flex items-center justify-center z-50 opacity-90 animate-fadeIn">
          <div className="flex flex-col items-center text-white">
            <div className="spinner-border animate-spin mb-4" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <span className="text-xl">Please Wait...</span>
          </div>
        </div>
      ) : (
        <div className="sectionsContainerWrapper w-full h-full sm:pl-10 sm:pr-5">
          <div className="hashSectionsContainer sm:px-2">
            {isVisible.about && currentHash === "about" && (
              <About
                className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active"
                onTransitionEnd={() => handleTransitionEnd("about")}
              />
            )}
            {isVisible.contact && currentHash === "contact" && (
              <Contact
                className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active"
                onTransitionEnd={() => handleTransitionEnd("contact")}
              />
            )}
            {isVisible.education && currentHash === "education" && (
              <Education
                className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12 active"
                onTransitionEnd={() => handleTransitionEnd("education")}
              />
            )}
            {isVisible.experience && currentHash === "experience" && (
              <Experience
                className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12 active"
                onTransitionEnd={() => handleTransitionEnd("experience")}
              />
            )}
            {isVisible.portfolio && currentHash === "portfolio" && (
              <Portfolio
                className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active"
                onTransitionEnd={() => handleTransitionEnd("portfolio")}
              />
            )}
            {isVisible.skills && currentHash === "skills" && (
              <Skills
                className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active"
                onTransitionEnd={() => handleTransitionEnd("skills")}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
