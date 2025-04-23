"use client";

import { ChapterKey } from "@/components/navigation/SidebarMenu";
import HashNavigationHandle from "@/lib/HashNavigationHandle";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function NavLink({
  href,
  section,
  Icon,
  currentHash,
  setCurrentHash,
  isCollapsed,
  menuLink,
  menuLinkTop,
  chapterLink,
  handleClick,
  onChangeTopMenu
}: {
  href: string | string[];
  section: string;
  Icon: React.ReactNode;
  currentHash: string;
  setCurrentHash: (val: string) => void;
  isCollapsed?: boolean;
  menuLink?: boolean;
  menuLinkTop?: boolean;
  chapterLink?: ChapterKey | null;
  handleClick?: (val: ChapterKey | null | undefined) => void;
  onChangeTopMenu?: (vak: string) => void;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.classList.contains("light-theme")
      ? "light"
      : "dark";
    setTheme(current);

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("light-theme")
        ? "light"
        : "dark";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const checkHref = () => {
    if (menuLink)
      return href.includes(currentHash)

    return currentHash === href
  }

  const getHref = () => {
    if (menuLink) {
      return `${href[0]}`
    }

    return `${href}`
  }

  return (
    <a
      href={`#${Array.isArray(href) ? href[0] : href}`}
      className={clsx(
        menuLink
          ? menuLinkTop
            ? "w-1/2 h-full flex items-center justify-center"
            : "w-1/4 h-full flex items-center justify-center"
          : "flex items-center gap-2 px-10 py-4 transition-colors duration-300 link sm:w-full",
        checkHref()
          ? theme === "light"
            ? `bg-blue-100 text-highlight ${menuLink ? "border-t-3" : "border-r-4"} border-highlight`
            : `bg-gray-700 text-highlight ${menuLink ? "border-t-3" : "border-r-4"} border-highlight`
          : theme === "light"
            ? `text-gray-800 ${menuLink && "border-t-3 border-color-bg-highlight"} hover:text-highlight`
            : `text-white ${menuLink && "border-t-3 border-color-bg-highlight"} hover:text-highlight`,

      )}

      onClick={() => {
        if (menuLink) {
          console.log("href:", href)
          handleClick && handleClick(chapterLink)
          onChangeTopMenu && onChangeTopMenu(`${href}`)
          console.log("here")

        } else {
          HashNavigationHandle(getHref(), setCurrentHash)
        }
      }}
    >
      {Icon}
      {menuLink ? (
        <span>{section}</span>
      ) : (
        !isCollapsed && <span className="lg:block md:hidden sm:hidden hidden">{section}</span>
      )
      }
    </a>
  );
}
