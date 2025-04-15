import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Sidebar from "@/components/navigation/Sidebar";

export default function Home() {
  return (
    // <div className="portfolio-wrapper bg-[url('/images/bg-light.jpg')] bg-cover bg-center">
    <div className="portfolio-wrapper bg-[url('/images/bg.jpg')] bg-cover bg-center">
      <Sidebar />
      <div className="hashSectionsContainer">
        <About />
        <Contact />
        <Education />
        <Experience />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
}
