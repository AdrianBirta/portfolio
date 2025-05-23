import { useEffect, useState, useMemo } from "react";
import NavLink from "@/components/navigation/NavLink";
import { Briefcase02, Clock, FolderCheck, GraduationHat02, Image04, Send01, Tool02, User03 } from "@untitled-ui/icons-react";
import { usePathname } from "next/navigation";
import { ChapterKey } from "@/types";
import { getNavIcon } from "@/lib/getNavIcon";

const chaptersBottom: {
  name: string;
  link: ChapterKey | null;
  href?: string;
}[] = [
    { name: "Home", link: null, href: "about" },
    { name: "History", link: "history" },
    { name: "Showcase", link: "showcase" },
    { name: "Contact", link: null, href: "contact" },
  ];

const sectionsTop = {
  history: [
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" },
  ],
  showcase: [
    { name: "Skills", href: "skills" },
    { name: "Portfolio", href: "portfolio" },
  ],
};

export default function SidebarMenu({
  className,
}: {
  className: string;
}) {
  const [selectedChapter, setSelectedChapter] = useState<ChapterKey | null | undefined>(null);
  const [historySelection, setHistorySelection] = useState("education");
  const [showcaseSelection, setShowcaseSelection] = useState("skills");
  const pathname = usePathname().replace("/", "");

  useEffect(() => {
    const getHref = (val: { name: string; href: string }) => val.href === pathname;

    const getCurrentHashChapterLink = sectionsTop.history.find(getHref)
      ? "history"
      : sectionsTop.showcase.find(getHref)
        ? "showcase"
        : null;

    getCurrentHashChapterLink === "history"
      ? setHistorySelection(pathname)
      : getCurrentHashChapterLink === "showcase"
        ? setShowcaseSelection(pathname)
        : null;

    setSelectedChapter(() => getCurrentHashChapterLink);
  }, [pathname]);

  return (
    <div
      className={`${className} overflow-hidden transition-all duration-300 ease-in-out ${selectedChapter ? "h-12 opacity-100" : "h-0"
        }`}
    >
      <nav className="top-menu h-12">
        <ul className="footer-menu-list w-full h-full flex items-center">
          {selectedChapter &&
            sectionsTop[selectedChapter].map((section) => (
              <NavLink
                key={section.name}
                href={section.href}
                section={section.name}
                Icon={
                  getNavIcon(
                    section.name,
                    section.name === "Education" ||
                      section.name === "Experience" ||
                      section.name === "Skills" ||
                      section.name === "Portfolio"
                      ? "mr-2"
                      : ""
                  )
                }
                menuLink={true}
                menuLinkTop={true}
              />
            ))}
        </ul>
      </nav>

      <nav className="footer-menu fixed bottom-0 left-0 right-0 h-15 z-20 bg-sidebar">
        <ul className="footer-menu-list w-full h-full flex items-center">
          {chaptersBottom.map((chapter) => (
            <NavLink
              key={chapter.name}
              href={
                chapter.link === "history"
                  ? historySelection
                  : chapter.link === "showcase"
                    ? showcaseSelection
                    : chapter.href
              }
              section={chapter.name}
              Icon={
                getNavIcon(
                  chapter.name,
                  chapter.name === "Home" ||
                    chapter.name === "Contact" ||
                    chapter.name === "History" ||
                    chapter.name === "Showcase"
                    ? "mb-0.5"
                    : ""
                )
              }
              menuLink={true}
              chapterLink={chapter.link}
              handleClick={setSelectedChapter}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}