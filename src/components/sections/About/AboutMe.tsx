import SectionBlock from "@/components/SectionBlock";
import TitleSection from "@/components/TitleSection";

export default function AboutMe() {
  return (
    <SectionBlock>
      <TitleSection leftBorder={true} titleHigh="About me..." />

      <div className="content flex items-center gap-8">
        <img src="/images/iconM256.png" alt="Logo monitor" />
        <p>
          <span className="text-highlight">Senior Frontend Developer & Aspiring Full-Stack Engineer</span> with 5+ years of experience specializing in building intuitive, performant, and scalable web applications. Proficient in <span className="text-highlight">React.js</span>, <span className="text-highlight">Next.js</span>, and <span className="text-highlight">TypeScript</span>, with deep expertise in modern frontend architectures, component libraries, and state management tools like <span className="text-highlight">Redux</span> and <span className="text-highlight">React Query</span>.
          Skilled in crafting clean, responsive UIs using <span className="text-highlight">Tailwind CSS</span>, <span className="text-highlight">Material-UI</span>, and <span className="text-highlight">SCSS</span>, with a strong focus on <span className="text-highlight">user experience</span>, <span className="text-highlight">accessibility</span>, and <span className="text-highlight">performance optimization</span>. Experienced in working across diverse domains such as <span className="text-highlight">fintech</span>, <span className="text-highlight">e-commerce</span>, and <span className="text-highlight">healthcare</span>, delivering pixel-perfect interfaces and interactive data visualizations using tools like <span className="text-highlight">Mapbox</span>, <span className="text-highlight">Leaflet</span>, and <span className="text-highlight">ArcGIS</span>.
          Comfortable integrating with both <span className="text-highlight">REST</span> and <span className="text-highlight">GraphQL APIs</span>, and currently expanding backend knowledge through <span className="text-highlight">Nest.js</span>, <span className="text-highlight">Node.js</span>, and <span className="text-highlight">Docker</span>, aiming to transition into a full-stack role. Passionate about clean code, scalable architecture, and continuous learning - actively building advanced data dashboards and exploring areas like <span className="text-highlight">mobile development</span> and <span className="text-highlight">real-time charting.</span></p>
      </div>
    </SectionBlock>
  )
}