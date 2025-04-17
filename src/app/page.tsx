import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills/Skills";
import Sidebar from "@/components/navigation/Sidebar";

export default function Home() {
  return (
    <div className="portfolio-wrapper">
      <Sidebar />
      <div className="sectionsContainerWrapper">
        <div className="hashSectionsContainer px-2">
          <About />
          <Contact />
          <Education />
          <Experience />
          <Portfolio />
          <Skills />
        </div>
      </div>
    </div>
  );
}
