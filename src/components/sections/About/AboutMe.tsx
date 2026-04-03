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
        />
        <p className="xl:text-base text-xs">
          Strategic and impact-driven <span className="text-highlight">Senior Frontend Engineer & Founder</span> with
          <span className="text-highlight"> 6 years</span> of experience architecting performant, user-centric applications
          in fintech, healthcare, e-commerce, geospatial tech, <span className="text-highlight">and agriculture</span>.
          Specializes in <span className="text-highlight">React.js</span>, <span className="text-highlight">TypeScript</span>,
          <span className="text-highlight">Next.js</span> and full-stack development.

          Most recently I solo-built <span className="text-highlight">eFermier</span> - a complete agricultural ERP SaaS platform
          from zero to production. It includes an AI consultant (Google Gemini + custom RAG trained on official APIA documents),
          Stripe subscriptions, rich-text blog, advanced reports and a full admin dashboard. Launched at just 10 RON/month,
          solving real problems for Romanian farmers that existing tools ignored.

          Proven track record of boosting performance by up to 40%, optimizing 10,000+ geospatial records, modernizing enterprise
          portals and building dashboards used by 1,000+ users. Collaborative and quality-focused, I thrive in high-stakes environments
          and deliver clean, testable code that ships fast and scales well.
        </p>
      </div>
    </SectionBlock>
  )
}