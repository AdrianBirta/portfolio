import NavLink from "@/components/navigation/NavLink";

export default function Sidebar() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink href="about" section="About me" /></li>
          <li><NavLink href="education" section="Education" /></li>
          <li><NavLink href="skills" section="Skills" /></li>
          <li><NavLink href="experience" section="Experience" /></li>
          <li><NavLink href="portfolio" section="Portfolio" /></li>
          <li><NavLink href="contact" section="Contact" /></li>
        </ul>
      </nav>

      <div>
        <div>dark/light mode</div>
        <div>style cursor</div>
      </div>
    </>
  )
}