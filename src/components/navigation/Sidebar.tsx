"use client"

import SidebarMenu from "@/components/navigation/SidebarMenu";
import SidebarNav from "@/components/navigation/SidebarNav";
import {
  Moon01, Sun, ArrowCircleBrokenUpLeft, ArrowNarrowUpLeft,
  ChevronRight,
  ChevronLeft,
} from "@untitled-ui/icons-react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getInitialTheme, applyTheme } from "@/lib/theme";
import { enableCursorStyle, trackCursorMovement } from "@/lib/cursor";

export default function Sidebar() {
  const [showCursorStyle, setShowCursorStyle] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (showCursorStyle) {
      const cleanup = enableCursorStyle();
      return cleanup;
    }
  }, [showCursorStyle]);

  useEffect(() => {
    const cleanup = trackCursorMovement(showCursorStyle);
    return cleanup;
  }, [showCursorStyle]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <section>
      <div className={clsx(
        "sidebar sm:rounded-xl rounded-sm overflow-hidden transition-all duration-300 sm:pb-0 pb-0",
        isCollapsed ? "sm:w-[110px] w-full h-full  sm:mb-0 mb-1" : "lg:w-[300px] md:w-[110px] sm:w-[110px] sm:h-full sm:mb-0 mb-1 w-full"
      )}>

        <button
          onClick={toggleTheme}
          aria-label="Change Theme"
          className="sm:hidden block hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link absolute right-0 top-0"
        >
          {theme === "light" ? <Moon01 className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <div className="sidebar-header p-6 text-center">
          <div className="relative inline-block">
            <Image
              src="/images/profilePicture.webp"
              alt="Profile Picture"
              width={130}
              height={145}
              className={clsx(
                "m-auto profilePic transition-all duration-300",
                isCollapsed ? "sm:w-14 sm:h-16 w-[130px]" : "w-[130px]"
              )}
              sizes="(max-width: 1024px) 60px, 130px"
              priority={true}
            />
            <div className="status-dot-wrapper">
              <span className="w-4 h-4 bg-green-500 border-2 border-white rounded-full status-dot" />
              {showCursorStyle && (
                <div className="tooltip">Available!</div>
              )}
            </div>
          </div>
          <span className={isCollapsed ? "hidden" : "lg:block md:hidden sm:hidden "}>
            <div className="flex items-center justify-center mt-2">
              <Image
                width={24}
                height={24}
                src="/images/iconM24.webp"
                alt="Monitor code"
                className="mr-2"
                priority={true}
              />
              <p className="text-2xl">Adrian <span className="text-highlight">Birta</span></p>
            </div>
            <p className="text-md font-bold text-gray-400">Senior Frontend Developer</p>
          </span>
        </div>

        <SidebarNav
          isCollapsed={isCollapsed}
          className="sidebar-scroll-container hidden sm:block"
        />

        <SidebarMenu
          className="block sm:hidden"
        />

        <div className="sidebar-buttons sm:flex hidden">
          {/* Theme toggle button with tooltip */}
          <div className={clsx(
            "tooltip-wrapper flex justify-center items-center",
            isCollapsed ? "w-full" : "lg:w-1/2 md:w-full sm:w-full w-full"
          )}>
            <button
              onClick={toggleTheme}
              aria-label="Change Theme"
              className="hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link"
            >
              {theme === "light" ? <Moon01 className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            {showCursorStyle && (
              <div className="tooltip">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </div>
            )}
          </div>

          {/* Cursor toggle button with tooltip */}
          <div className={clsx(
            "tooltip-wrapper w-1/2 flex justify-center items-center",
            isCollapsed ? "hidden" : "lg:flex md:hidden sm:hidden hidden"
          )}>
            <button
              onClick={() => setShowCursorStyle(prev => !prev)}
              aria-label="Change Cursor Style"
              className="hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link"
            >
              {showCursorStyle ? <ArrowNarrowUpLeft className="w-5 h-5" /> : <ArrowCircleBrokenUpLeft className="w-5 h-5" />}
            </button>
            {showCursorStyle && (
              <div className="tooltip">
                Magic cursor: on
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Colapse Sidebar"
          className="absolute -top-1 -right-2.5 z-10 hover:text-highlight hover:scale-110 transition-colors duration-300 cursor-pointer p-3 link lg:block md:hidden sm:hidden hidden"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      {/* Floating cursor style */}
      <div id="cursor-style" className={`cursor-style ${showCursorStyle ? "" : "hidden"}`}></div>
    </section>
  );
}
