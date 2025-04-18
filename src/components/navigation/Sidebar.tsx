"use client"

import NavLink from "@/components/navigation/NavLink";
import {
  User03, GraduationHat02, Briefcase02, Mail01,
  Moon01, Sun, ArrowCircleBrokenUpLeft, ArrowNarrowUpLeft,
  ChevronRight,
  ChevronLeft,
  Tool02,
  FolderCheck,
} from "@untitled-ui/icons-react";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [currentHash, setCurrentHash] = useState<string>("");
  const [theme, setTheme] = useState<string>("dark");
  const [showCursorShadow, setShowCursorShadow] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      <div className={clsx(
        "sidebar rounded-xl overflow-hidden transition-all duration-300",
        isCollapsed ? "w-[110px] h-[110]" : "w-[290px]"
      )}>

        <div className="sidebar-header p-6 text-center">
          <div className="relative inline-block">
            <img
              src="/images/profilePicture.png"
              alt="Profile Picture"
              className={clsx(
                "m-auto profilePic transition-all duration-300",
                isCollapsed ? "w-14 h-16" : "w-[130px]"
              )}
            />
            <div className="status-dot-wrapper">
              <span className="w-4 h-4 bg-green-500 border-2 border-white rounded-full status-dot" />
              {showCursorShadow && (
                <div className="tooltip">Available!</div>
              )}
            </div>
          </div>
          <span className={isCollapsed ? "hidden" : ""}>
            <div className="flex items-center justify-center mt-2">
              <img src="/images/iconM24.png" alt="Monitor code" className="mr-2" />
              <p className="text-2xl">Adrian <span className="text-highlight">Birta</span></p>
            </div>
            <p className="text-md font-bold text-gray-400">Senior Frontend Developer</p>
          </span>
        </div>

        <div className="sidebar-scroll-container">
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              <li>
                <NavLink href="about" section="About me" Icon={<User03 className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="education" section="Education" Icon={<GraduationHat02 className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="skills" section="Skills" Icon={<Tool02 className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="experience" section="Experience" Icon={<Briefcase02 className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="portfolio" section="Portfolio" Icon={<FolderCheck className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
              <li>
                <NavLink href="contact" section="Contact" Icon={<Mail01 className="w-5 h-5" />} isCollapsed={isCollapsed} currentHash={currentHash} setCurrentHash={setCurrentHash} />
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-buttons flex">
          {/* Theme toggle button with tooltip */}
          <div className={clsx(
            "tooltip-wrapper flex justify-center items-center",
            isCollapsed ? "w-full" : "w-1/2"
          )}>
            <button
              onClick={toggleTheme}
              className="hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link"
            >
              {theme === "light" ? <Moon01 className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            {showCursorShadow && (
              <div className="tooltip">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </div>
            )}
          </div>

          {/* Cursor toggle button with tooltip */}
          <div className={clsx(
            "tooltip-wrapper w-1/2 flex justify-center items-center",
            isCollapsed && "hidden"
          )}>
            <button
              onClick={() => setShowCursorShadow(prev => !prev)}
              className="hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link"
            >
              {showCursorShadow ? <ArrowNarrowUpLeft className="w-5 h-5" /> : <ArrowCircleBrokenUpLeft className="w-5 h-5" />}
            </button>
            {showCursorShadow && (
              <div className="tooltip">
                Magic cursor: on
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 absolute -top-1 -right-2.5 z-10 hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      {/* Floating cursor shadow */}
      <div id="cursor-shadow" className={`cursor-shadow ${showCursorShadow ? "" : "hidden"}`}></div>
    </>
  );
}
