"use client";

import { ChapterKey } from "@/components/navigation/SidebarMenu";
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
}: {
  href: string | undefined;
  section: string;
  Icon: React.ReactNode;
  currentHash: string;
  setCurrentHash: (val: string) => void;
  isCollapsed?: boolean;
  menuLink?: boolean;
  menuLinkTop?: boolean;
  chapterLink?: ChapterKey | null;
  handleClick?: (val: ChapterKey | null | undefined) => void;
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

  return (
    <a
      href={`#${href}`}
      aria-label={`Link to ${href}`}
      className={clsx(
        menuLink
          ? menuLinkTop
            ? "w-1/2 h-full flex items-center justify-center text-sm"
            : "w-1/4 h-full flex flex-col items-center justify-center text-sm"
          : "flex items-center gap-2 px-10 py-4 transition-colors duration-300 link sm:w-full",
        currentHash === href
          ? `bg-light-highlight text-highlight ${menuLink ? "border-t-3" : "border-r-4"} border-highlight`
          : `${menuLink && "border-t-3 border-color-bg-highlight"} hover:text-highlight`
      )}

      onClick={() => (
        menuLink && handleClick && handleClick(chapterLink)
      )}
    >
      {Icon}
      {menuLink
        ? <span>{section}</span>
        : !isCollapsed && <span className="lg:block md:hidden sm:hidden hidden">{section}</span>
      }
    </a>
  );
}
