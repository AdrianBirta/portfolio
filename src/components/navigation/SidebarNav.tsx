import NavLink from "@/components/navigation/NavLink";
import { Briefcase02, FolderCheck, GraduationHat02, Mail01, Tool02, User03 } from "@untitled-ui/icons-react";

export default function SidebarNav({
  className,
  isCollapsed,
  currentHash,
  setCurrentHash
}: {
  className: string;
  isCollapsed: boolean;
  currentHash: string;
  setCurrentHash: (val: string) => void;
}) {
  return (
    <div className={className}>
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
  )
}