"use client"

import { useEffect } from "react";

export default function NavLink({
  href,
  section
}: {
  href: string,
  section: string
}) {

  const handleNavigation = (sectionId: string) => {
    const currentActive = document.querySelector('.section.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }

    const nextSection = document.getElementById(sectionId);
    if (nextSection) {
      nextSection.classList.add('active');
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initialSection = document.getElementById('about');

    if (initialSection)
      initialSection.classList.add("active");
  }, [])

  return (
    <a
      href={`#${href}`}
      className="nav-link"
      onClick={() => handleNavigation(href)}
    >
      {section}
    </a>
  )
}