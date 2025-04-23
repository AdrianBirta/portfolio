"use client"

import NavLink from "@/components/navigation/NavLink";
import { User03 } from "@untitled-ui/icons-react";
import { useEffect, useState } from "react";

const chaptersBottom: {
  name: string;
  link: ChapterKey | null;
  href: string[];
}[] = [
    { name: "Home", link: null, href: ["about"] },
    { name: "History", link: "history", href: ["education", "experience"] },
    { name: "Showcase", link: "showcase", href: ["skills", "portfolio"] },
    { name: "Contact", link: null, href: ["contact"] },
  ];

const sectionsTop = {
  history: [
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" }
  ],
  showcase: [
    { name: "Skills", href: "skills" },
    { name: "Portfolio", href: "portfolio" }
  ]
};

export type ChapterKey = keyof typeof sectionsTop;

export default function SidebarMenu({
  className,
  currentHash,
  setCurrentHash
}: {
  className: string;
  currentHash: string;
  setCurrentHash: (val: string) => void;
}) {
  const [selectedChapter, setSelectedChapter] = useState<ChapterKey | null | undefined>(null);
  const [historySelection, setHistorySelection] = useState("education");
  const [showcaseSelection, setShowcaseSelection] = useState("skills");

  const [, setTheme] = useState<"dark" | "light">("dark");

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

  useEffect(() => {
    const getCurrentHashChapterLink = chaptersBottom.find(chapter => chapter.href.includes(currentHash))?.link

    setSelectedChapter(() => getCurrentHashChapterLink)
    getCurrentHashChapterLink === "history"
      ? setHistorySelection(currentHash)
      : getCurrentHashChapterLink === "showcase"
        ? setShowcaseSelection(currentHash)
        : null
  }, [currentHash])

  const onClickMenuLink = (val: ChapterKey | null | undefined) => {
    setSelectedChapter(val);
  }

  const onChangeTopMenu = (href: string | null | undefined) => {
    console.log("onChangeTopMenu - href:", href)
  }

  return (
    <div className={className}>
      {
        selectedChapter &&
        <nav className="top-menu h-12">
          <ul className="footer-menu-list w-full h-full flex items-center">
            {sectionsTop[selectedChapter].map(section => {
              console.log("section:", section)
              return (
                <NavLink
                  key={section.name}
                  href={section.href}
                  section={section.name}
                  Icon={<User03 className="w-5 h-5" />}
                  currentHash={currentHash}
                  setCurrentHash={setCurrentHash}
                  menuLink={true}
                  menuLinkTop={true}
                  onChangeTopMenu={onChangeTopMenu}
                />
              )
            })}
          </ul>
        </nav>
      }

      <nav className="footer-menu fixed bottom-0 left-0 right-0 h-15 z-20 bg-sidebar">
        <ul className="footer-menu-list w-full h-full flex items-center">
          {
            chaptersBottom.map(chapter => (
              <NavLink
                key={chapter.name}
                href={
                  chapter.link === "history"
                    ? [historySelection]
                    : chapter.link === "showcase"
                      ? [showcaseSelection]
                      : chapter.href
                }
                section={chapter.name}
                Icon={<User03 className="w-5 h-5" />}
                currentHash={currentHash}
                setCurrentHash={setCurrentHash}
                menuLink={true}
                chapterLink={chapter.link}
                handleClick={onClickMenuLink}
              />
            ))
          }
        </ul>
      </nav>
    </div>
  )
}