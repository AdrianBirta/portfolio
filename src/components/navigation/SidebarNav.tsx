import NavLink from "@/components/navigation/NavLink";
import { getNavIcon } from "@/lib/getNavIcon";

export default function SidebarNav({
  className,
  isCollapsed,
}: {
  className: string;
  isCollapsed: boolean;
}) {

  const navLinks = [
    { href: "about", section: "About me" },
    { href: "education", section: "Education" },
    { href: "skills", section: "Skills" },
    { href: "experience", section: "Experience" },
    { href: "portfolio", section: "Portfolio" },
    { href: "contact", section: "Contact" },
  ]
  return (
    <div className={className}>
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {navLinks.map(navLink => (
            <li key={navLink.href}>
              <NavLink
                href={navLink.href}
                section={navLink.section}
                Icon={getNavIcon(navLink.section)}
                isCollapsed={isCollapsed}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}