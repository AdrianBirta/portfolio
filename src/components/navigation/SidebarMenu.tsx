import { useEffect, useState, useMemo } from "react";
import NavLink from "@/components/navigation/NavLink";
import { Briefcase02, Clock, FolderCheck, GraduationHat02, Image04, Mail01, Tool02, User03 } from "@untitled-ui/icons-react";

export type ChapterKey = keyof typeof sectionsTop;

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
  currentHash,
  setCurrentHash,
}: {
  className: string;
  currentHash: string;
  setCurrentHash: (val: string) => void;
}) {
  const [selectedChapter, setSelectedChapter] = useState<ChapterKey | null | undefined>(null);
  const [historySelection, setHistorySelection] = useState("education");
  const [showcaseSelection, setShowcaseSelection] = useState("skills");

  useEffect(() => {
    const getHref = (val: { name: string; href: string }) => val.href === currentHash;

    const getCurrentHashChapterLink = sectionsTop.history.find(getHref)
      ? "history"
      : sectionsTop.showcase.find(getHref)
        ? "showcase"
        : null;

    getCurrentHashChapterLink === "history"
      ? setHistorySelection(currentHash)
      : getCurrentHashChapterLink === "showcase"
        ? setShowcaseSelection(currentHash)
        : null;

    setSelectedChapter(() => getCurrentHashChapterLink);
  }, [currentHash]);

  // Memoizing the icon function to avoid unnecessary recalculations
  const getIconNavLink = useMemo(
    () => (name: string) => {
      switch (name) {
        case "Home":
          return <User03 className="w-5 h-5 mb-0.5" />;
        case "Education":
          return <GraduationHat02 className="w-5 h-5 mr-2" />;
        case "Skills":
          return <Tool02 className="w-5 h-5 mr-2" />;
        case "Experience":
          return <Briefcase02 className="w-5 h-5 mr-2" />;
        case "Portfolio":
          return <FolderCheck className="w-5 h-5 mr-2" />;
        case "Contact":
          return <Mail01 className="w-5 h-5 mb-0.5" />;
        case "History":
          return <Clock className="w-5 h-5 mb-0.5" />;
        case "Showcase":
          return <Image04 className="w-5 h-5 mb-0.5" />;
        default:
          return null;
      }
    },
    [] // Empty dependency array to memoize the function once
  );

  return (
    <div className={className}>
      {selectedChapter && (
        <nav className="top-menu h-12">
          <ul className="footer-menu-list w-full h-full flex items-center">
            {sectionsTop[selectedChapter].map((section) => {
              return (
                <NavLink
                  key={section.name}
                  href={section.href}
                  section={section.name}
                  Icon={getIconNavLink(section.name)}
                  currentHash={currentHash}
                  setCurrentHash={setCurrentHash}
                  menuLink={true}
                  menuLinkTop={true}
                />
              );
            })}
          </ul>
        </nav>
      )}

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
              Icon={getIconNavLink(chapter.name)}
              currentHash={currentHash}
              setCurrentHash={setCurrentHash}
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
