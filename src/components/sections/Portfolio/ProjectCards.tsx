import ProjectCard from "@/components/sections/Portfolio/ProjectCard";

export default function ProjectCards() {
  return (
    <div className="projects-wrapper flex flex-wrap gap-6 justify-center">
      <ProjectCard
        companyName="Adfin"
        subtitle="FinTech • Web Platform"
        badges={["FinTech", "React.js", "Java"]}
        textItem={{
          text: "A billing automation SaaS platform focused on improving invoicing workflows for SMEs. Designed for transparency, control, and seamless integration.",
          highlights: ["billing automation", "invoicing workflows", "transparency"]
        }}
        websiteURL="https://www.adfin.com/"
        linkedinURL="https://www.linkedin.com/company/adfin-fs/"
      />

      <ProjectCard
        companyName="Babel Street"
        subtitle="Geospatial Intelligence • Analytics"
        badges={["Data Intelligence", "TypeScript", "Redux"]}
        textItem={{
          text: "A leading platform for location-based analytics, real-time geospatial data, and visual intelligence tailored for enterprise-grade decision making.",
          highlights: ["location-based analytics", "real-time geospatial data", "visual intelligence"]
        }}
        websiteURL="https://www.babelstreet.com/"
        linkedinURL="https://www.linkedin.com/company/babelstreet/"
      />

      <ProjectCard
        companyName="Persistent Systems"
        subtitle="IT Services • Product Development"
        badges={["Cloud Consulting", "Java", "Azure"]}
        textItem={{
          text: "A global technology partner delivering digital transformation, data analytics, and cloud services across healthcare, finance, and telecom.",
          highlights: ["digital transformation", "data analytics", "cloud services"]
        }}
        websiteURL="https://www.persistent.com/"
        linkedinURL="https://www.linkedin.com/company/persistent-systems/"
      />

      <ProjectCard
        companyName="Amdaris"
        subtitle="Software Development • Nearshore Delivery"
        badges={["AWS", "React.js", "Java"]}
        textItem={{
          text: "UK-based tech consultancy offering custom software development, agile teams, and digital modernization solutions through a collaborative approach.",
          highlights: ["custom software development"]
        }}
        websiteURL="https://amdaris.com/"
        linkedinURL="https://www.linkedin.com/company/amdaris-group/"
      />

      <ProjectCard
        companyName="MusicMagpie"
        subtitle="E-commerce • Circular Economy"
        badges={["E-commerce", "Next.js", "Stripe"]}
        textItem={{
          text: "A platform for buying and selling refurbished tech and second-hand media. Focused on sustainability, device recycling, and consumer savings.",
          highlights: ["refurbished tech", "sustainability"]
        }}
        websiteURL="https://www.musicmagpie.co.uk/"
        linkedinURL="https://www.linkedin.com/company/musicmagpie/"
      />

      <ProjectCard
        companyName="ImproveMed"
        subtitle="Healthcare • Digital Platform"
        badges={["Healthcare", "Vue.js", "Firebase"]}
        textItem={{
          text: "A modern medical services platform focused on physical therapy, delivering enhanced user experience, performance, and mobile accessibility.",
          highlights: ["physical therapy", "user experience", "mobile accessibility"]
        }}
        websiteURL="https://improvemed.gr"
        linkedinURL="https://www.linkedin.com/company/improvemed/"
      />

      <ProjectCard
        companyName="Koala"
        subtitle="E-commerce • Swiss Market"
        badges={["Multilingual E-commerce", "Nuxt.js", "Tailwind CSS"]}
        textItem={{
          text: "A Swiss-based e-commerce business offering localized shopping experiences, intuitive UX, and customer-focused digital platforms.",
          highlights: ["localized shopping experiences", "customer-focused"]
        }}
        websiteURL="https://www.koala.ch/"
        linkedinURL="https://www.linkedin.com/company/koala-s-a-/"
      />

      <ProjectCard
        companyName="Aeschbach"
        subtitle="Retail • Fashion E-commerce"
        badges={["Retail", "Magento", "PHP"]}
        textItem={{
          text: "Swiss online store offering a diverse range of quality footwear, combining elegant design, user-friendly shopping, and reliable delivery.",
          highlights: ["quality footwear", "elegant design"]
        }}
        websiteURL="https://www.aeschbach-chaussures.ch"
        linkedinURL="https://www.linkedin.com/company/chaussures-aeschbach-sa/"
      />
    </div>
  )
}