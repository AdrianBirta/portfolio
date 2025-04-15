"use client"

import NavLink from "@/components/navigation/NavLink";
import {
  User03, GraduationHat02, Mail03, PuzzlePiece02, Briefcase02, Mail01,
  Moon01, Sun, ArrowCircleBrokenUpLeft, ArrowNarrowUpLeft,
} from "@untitled-ui/icons-react";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [theme, setTheme] = useState<string>("dark");
  const [showCursorShadow, setShowCursorShadow] = useState<boolean>(false);

  useEffect(() => {
    // Detect system preference or stored theme
    const storedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    const initialTheme = storedTheme || (prefersLight ? "light" : "dark");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light-theme", initialTheme === "light");

    const updateHash = () => setCurrentHash(window.location.hash.replace("#", ""));
    updateHash();
    window.addEventListener("hashchange", updateHash);

    const initialSection = document.getElementById('about');
    if (initialSection) initialSection.classList.add("active");

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const cursorShadow = document.querySelector(".cursor-shadow");

    const handleLinkHover = () => {
      if (cursorShadow) {
        cursorShadow.classList.add("scale-up");
      }
    };

    const handleLinkLeave = () => {
      if (cursorShadow) {
        cursorShadow.classList.remove("scale-up");
      }
    };

    const links = document.querySelectorAll(".link");

    showCursorShadow && (
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHover);
        link.addEventListener("mouseleave", handleLinkLeave);
      })
    )

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [showCursorShadow]);

  /// Handle cursor shadow effect
  useEffect(() => {
    const cursor = document.getElementById("cursor-shadow");
    const moveCursor = (e: MouseEvent) => {
      if (cursor && showCursorShadow) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    if (showCursorShadow) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      window.removeEventListener("mousemove", moveCursor);
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [showCursorShadow]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-theme", newTheme === "light");
  };

  return (
    <>
      <div className="sidebar rounded-xl overflow-hidden">
        <div className="sidebar-header p-6 text-center">
          <div className="relative inline-block">
            <img
              src="/images/profilePicture.png"
              alt="Profile Picture"
              className="m-auto mb-4 profilePic"
            />
            <div className="status-dot-wrapper">
              <span className="w-4 h-4 bg-green-500 border-2 border-white rounded-full status-dot" />
              <div className="tooltip">Available!</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/iconM24.png" alt="Monitor code" className="mr-2" />
            <p className="text-2xl">Adrian <span className="text-highlight">Birta</span></p>
          </div>
          <p className="text-md font-bold text-gray-400">Senior Frontend Developer</p>
        </div>

        <div className="sidebar-scroll-container">
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              <li>
                <NavLink href="about" section="About me" Icon={<User03 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="education" section="Education" Icon={<GraduationHat02 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="skills" section="Skills" Icon={<PuzzlePiece02 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="experience" section="Experience" Icon={<Mail03 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="portfolio" section="Portfolio" Icon={<Briefcase02 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="contact" section="Contact" Icon={<Mail01 className="w-5 h-5" />} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-buttons flex">
          {/* Theme toggle button with tooltip */}
          <div className="tooltip-wrapper w-1/2 flex justify-center items-center">
            <button
              onClick={toggleTheme}
              className="hover:text-highlight transition-colors duration-300 cursor-pointer p-3 link"
            >
              {theme === "light" ? <Moon01 className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <div className="tooltip">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </div>
          </div>

          {/* Cursor toggle button with tooltip */}
          <div className="tooltip-wrapper w-1/2 flex justify-center items-center">
            <button
              onClick={() => setShowCursorShadow(prev => !prev)}
              className="hover:text-highlight transition-colors duration-300 cursor-pointer p-3 link"
            >
              {showCursorShadow ? <ArrowNarrowUpLeft className="w-5 h-5" /> : <ArrowCircleBrokenUpLeft className="w-5 h-5" />}
            </button>
            <div className="tooltip">
              {showCursorShadow ? "Magic cursor: off" : "Magic cursor: on"}
            </div>
          </div>
        </div>
      </div>
      {/* Floating cursor shadow */}
      <div id="cursor-shadow" className={`cursor-shadow ${showCursorShadow ? "" : "hidden"}`}></div>
    </>
  );
}
