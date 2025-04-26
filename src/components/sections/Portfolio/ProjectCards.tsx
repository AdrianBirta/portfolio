import ProjectCard from "@/components/sections/Portfolio/ProjectCard";

export default function ProjectCards() {
  return (
    <div className="projects-wrapper grid gap-4 [grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))] sm:pb-0 pb-10">
      <ProjectCard
        companyName="Adfin"
        subtitle="FinTech • Web Platform"
        badges={["FinTech", "React.js", "Java"]}
        textItem={{
          text: "A billing automation SaaS platform focused on improving invoicing workflows for SMEs. Designed for transparency, control, and seamless integration.",
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
        }}
        websiteURL="https://www.aeschbach-chaussures.ch"
        linkedinURL="https://www.linkedin.com/company/chaussures-aeschbach-sa/"
      />
    </div>
  )
}