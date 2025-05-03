import SectionBlock from "@/components/SectionBlock";
import TitleSection from "@/components/TitleSection";
import Image from "next/image";

export default function AboutMe() {
  return (
    <SectionBlock className="pt-10">
      <TitleSection leftBorder={true} titleHigh="About me..." />

      <div className="content flex lg:flex-row md:flex-col flex-col items-center gap-8">
        <Image
          src={`/images/iconM256.webp`}
          alt="Logo monitor"
          width={256} // You can adjust this based on actual image size
          height={256}
          sizes="(max-width: 1024px) 160px, (max-width: 1280px) 208px, 256px"
        />
        <p className="xl:text-base text-xs">
          Strategic and impact-driven Senior Frontend Developer with <span className="text-highlight">5+ years</span> of experience architecting
          performant, user-centric applications in <span className="text-highlight">fintech</span>, <span className="text-highlight">healthcare</span>, <span className="text-highlight">e-commerce</span> and <span className="text-highlight">geospatial tech</span>. Specializes in
          <span className="text-highlight">React.js</span>, <span className="text-highlight">TypeScript</span>, and <span className="text-highlight">Next.js</span>, with a track record of boosting app performance by <span className="text-highlight">up to 40%</span>
          and enhancing user engagement through intelligent UI patterns and scalable component systems.
          Adept at translating business needs into robust interfaces, optimizing <span className="text-highlight">10,000+ geospatial records</span>,
          modernizing enterprise portals, and building healthcare dashboards that empower <span className="text-highlight">1,000+ users</span>.
          Collaborative and quality-focused, thriving in high-stakes environments with cross-functional teams
          to deliver clean, testable code that ships fast and scales well.
        </p>
      </div>
    </SectionBlock>
  )
}