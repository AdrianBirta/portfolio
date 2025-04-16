import Interests from "@/components/sections/About/Interests";
import Testimonails from "@/components/sections/About/Testimonials";
import { Building06, HeartHand, Mail02 } from "@untitled-ui/icons-react";
import { useEffect } from "react";

export default function About() {
  return (
    <section id="about" className="hashSection rounded-xl p-6">
      <div className="border-right-top border-left-top w-16 h-16 border-l-3 border-t-3 border-dashed border-highlight absolute"></div>

      <section className="head-intro flex flex-col items-center pt-8">
        <span className="flex items-center text-gray-600 mb-2"><HeartHand className="w-6 h-6 mr-2" /> <p className="text-2xl">Hello...</p></span>
        <p className="text-5xl mb-6">
          I'm <span className="text-highlight">Adrian Birta</span>!
        </p>
        <div className="address flex text-2xl">
          <div className="location flex items-center mr-2">
            <Building06 className="w-5 h-5 mr-2" />
            Oradea, Romania
          </div>
          •
          <a
            href="mailto:adrian.birta.dev@gmail.com"
            className="text-highlight flex items-center ml-2"
            target="_blank"
          >
            <Mail02 className="w-6 h-6 mr-2" />
            <span>adrian.birta.dev@gmail.com</span>
          </a>
        </div>

      </section>
      <section className="about-me pt-16">
        <div className="title border-l-4 border-highlight text-3xl pl-4 text-highlight mb-8">About me...</div>
        <div className="content flex items-center gap-8">
          <img src="/images/iconM256.png" alt="Logo monitor" />
          <p>
            <span className="text-highlight">Senior Frontend Developer & Aspiring Full-Stack Engineer</span> with 5+ years of experience specializing in building intuitive, performant, and scalable web applications. Proficient in <span className="text-highlight">React.js</span>, <span className="text-highlight">Next.js</span>, and <span className="text-highlight">TypeScript</span>, with deep expertise in modern frontend architectures, component libraries, and state management tools like <span className="text-highlight">Redux</span> and <span className="text-highlight">React Query</span>.
            Skilled in crafting clean, responsive UIs using <span className="text-highlight">Tailwind CSS</span>, <span className="text-highlight">Material-UI</span>, and <span className="text-highlight">SCSS</span>, with a strong focus on <span className="text-highlight">user experience</span>, <span className="text-highlight">accessibility</span>, and <span className="text-highlight">performance optimization</span>. Experienced in working across diverse domains such as <span className="text-highlight">fintech</span>, <span className="text-highlight">e-commerce</span>, and <span className="text-highlight">healthcare</span>, delivering pixel-perfect interfaces and interactive data visualizations using tools like <span className="text-highlight">Mapbox</span>, <span className="text-highlight">Leaflet</span>, and <span className="text-highlight">ArcGIS</span>.
            Comfortable integrating with both <span className="text-highlight">REST</span> and <span className="text-highlight">GraphQL APIs</span>, and currently expanding backend knowledge through <span className="text-highlight">Nest.js</span>, <span className="text-highlight">Node.js</span>, and <span className="text-highlight">Docker</span>, aiming to transition into a full-stack role. Passionate about clean code, scalable architecture, and continuous learning - actively building advanced data dashboards and exploring areas like <span className="text-highlight">mobile development</span> and <span className="text-highlight">real-time charting.</span></p>
        </div>
      </section>

      <Testimonails />

      <Interests />

    </section >
  )
}