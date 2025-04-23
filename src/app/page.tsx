import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Skills from "@/components/sections/Skills/Skills";
import Sidebar from "@/components/navigation/Sidebar";

export default function Home() {
  return (
    <div className="portfolio-wrapper sm:flex-row flex-col sm:p-5 p-1">
      <Sidebar />
      <div className="sectionsContainerWrapper w-full h-full sm:pl-10 sm:pr-5">
        <div className="hashSectionsContainer sm:px-2">
          <About className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
          <Contact className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
          <Education className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
          <Experience className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
          <Portfolio className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
          <Skills className="hashSection sm:rounded-xl rounded-sm p-6 pb-10" />
        </div>
      </div>
    </div>
  );
}
