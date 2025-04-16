"use client";

import HashNavigationHandle from "@/lib/HashNavigationHandle";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function NavLink({
  href,
  section,
  Icon,
  currentHash,
  setCurrentHash,
  isCollapsed
}: {
  href: string;
  section: string;
  Icon: React.ReactNode;
  currentHash: string;
  setCurrentHash: (val: string) => void;
  isCollapsed: boolean;
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
      className={clsx(
        "flex items-center gap-2 px-10 py-4 transition-colors duration-300 link",
        currentHash === href
          ? theme === "light"
            ? "bg-blue-100 text-highlight border-r-4 border-highlight"
            : "bg-gray-700 text-highlight border-r-4 border-highlight"
          : theme === "light"
            ? "text-gray-800 hover:text-highlight"
            : "text-white hover:text-highlight"
      )}
      onClick={(e) => {
        e.preventDefault();
        HashNavigationHandle(href, setCurrentHash);
      }}
    >
      {Icon}
      {!isCollapsed && section}
    </a>
  );
}
