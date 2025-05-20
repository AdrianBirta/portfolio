import SectionBlock from "@/components/SectionBlock";
import TimelineItem from "@/components/sections/Experience/TimelineItem";

export default function TimelineList({ scroll }: { scroll: boolean }) {
  return (
    <SectionBlock>
      <ul className="timeline-list">
        <TimelineItem
          headBlock={{
            titleHigh: "Senior React Frontend",
            title: "Engineer",
            location: "Adfin (UK-based SaaS Platform)",
            date: "Nov 2024 ➔ Present"
          }}

          listBlock={{
            intro1: "Led frontend development to improve usability, API performance, and user experience for a SaaS invoicing platform.",
            focus: "Key Engineering Contributions:",
            items: [
              {
                text: "**Refactored Invoice Lifecycle**: Used React.js, TypeScript, and React Query to create a dynamic UI with granular activity flags, improving billing pipeline transparency by 25%.",
              },
              {
                text: "**Multi-Contact UI**: Designed a flexible contact management system with Material-UI and Figma, supporting 500+ users",
              },
              {
                text: "**API Optimization**: Enhanced client-server communication with React Query caching and background sync, improving perceived performance by 40%.",
              },
              {
                text: "**Activity Log**: Built a real-time log with optimistic UI updates, reducing user inquiries by 15%.",
              },
            ]
          }}
          skills={[
            "REACT.JS",
            "TYPESCRIPT",
            "REACT QUERY",
            "STATE MANAGEMENT",
            "REACT ROUTER",
            "MATERIAL-UI",
            "COMPONENT DESIGN",
            "UI/UX",
            "HTML5",
            "CSS3",
            "REST",
            "XERO API",
            "GITLAB"
          ]}
          industry="FinTech"
        />

        <TimelineItem
          headBlock={{
            titleHigh: "Senior React Frontend",
            title: "Engineer",
            location: "Persistent Systems (USA-based)",
            date: "Dec 2022 ➔ Nov 2024"
          }}

          listBlock={{
            intro1: "Developed mapping solutions to enhance data visualization and user engagement for geospatial analytics.",
            focus: "Key Engineering Contributions:",
            items: [
              {
                text: "**Dynamic Mapping**: Built interactive maps with React, TypeScript, and Mapbox GL JS, boosting engagement by 20%.",
              },
              {
                text: "**State Management**: Used Redux Toolkit and integrated Turf.js/ArcGIS API for geometry processing, improving UI responsiveness by 15% for 10,000+ records.",
              },
              {
                text: "**Geocoding & Navigation**: Optimized Mapbox SDKs with WebGL and caching, reducing load times by 10% for 5,000+ users.",
              },
              {
                text: "**API Integration**: Collaborated on REST API and microservices integration for robust data sync.",
              },
            ]
          }}
          skills={[
            "REACT.JS",
            "TYPESCRIPT",
            "REDUX TOOLKIT",
            "STATE MANAGEMENT",
            "REACT ROUTER",
            "COMPONENT DESIGN",
            "UI/UX",
            "HTML5",
            "CSS3",
            "REST",
            "MICROSERVICES",
            "AWS",
            "UNIT TEST",
            "JEST",
            "CYPRESS",
            "MAPBOX.JS",
            "LEAFLET.JS",
            "TURF.JS",
            "ARCGIS.JS"
          ]}
          industry="Geospatial Services"
        />

        {scroll && (
          <>
            <TimelineItem
              headBlock={{
                titleHigh: "Software",
                title: "Engineer",
                location: "Amdaris (UK-based Client)",
                date: "Jul 2021 ➔ Dec 2022"
              }}

              listBlock={{
                intro1: "Architected a modular, accessible UI for an enterprise web portal with minimal design documentation.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "**Modular UI**: Developed React/TypeScript components with Material-UI, Core-UI, and Tailwind CSS, improving development efficiency by 20% across 100+ views.",
                  },
                  {
                    text: "**Accessibility**: Built WCAG-compliant HTML/CSS with Tailwind/SCSS, reducing UI lag by 15% and improving usability for 10% more users.",
                  },
                  {
                    text: "**Testing**: Ensured 90% test coverage with Jest and clean Git practices, cutting deployment errors by 25%.",
                  },
                ]
              }}
              skills={[
                "REACT.JS",
                "REDUX",
                "STATE MANAGEMENT",
                "REACT ROUTER",
                "COMPONENT DESIGN",
                "UI/UX",
                "TYPESCRIPT",
                "REST",
                "MICROSERVICES",
                "MATERIAL-UI",
                "COREUI",
                "TAILWIND CSS",
                "VUE.JS",
                "VUETIFY",
                "HTML5",
                "CSS3",
                "SCSS",
                "AWS",
                "UNIT TEST",
                "JEST",
                "CYPRESS"
              ]}
              industry="Enterprise"
            />

            <TimelineItem
              headBlock={{
                titleHigh: "React Frontend",
                title: "Engineer",
                location: "Improvemed",
                date: "Oct 2020 ➔ Jul 2021"
              }}

              listBlock={{
                intro1: "Modernized a healthcare platform to improve performance, responsiveness, and data visualization.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "**Frontend Upgrade**: Refactored React to version 17+ with TypeScript and Redux, reducing technical debt by 25%.",
                  },
                  {
                    text: "**Performance**: Implemented code-splitting, lazy loading, and React.memo, cutting load times by 15%.",
                  },
                  {
                    text: "**Data Dashboards**: Built accessible dashboards with Chart.js and D3.js, improving therapy tracking for 1,000+ users by 20%.",
                  },
                ]

              }}
              skills={[
                "REACT.JS",
                "REDUX",
                "STATE MANAGEMENT",
                "REACT ROUTER",
                "COMPONENT DESIGN",
                "UI/UX",
                "TYPESCRIPT",
                "CHART.JS",
                "D3.JS",
                "HTML5",
                "CSS3",
                "SCSS",
                "REST",
                "MICROSERVICES",
                "AZURE",
                "UNIT TEST",
                "JEST",
                "CYPRESS"
              ]}
              industry="Healthcare"
            />

            <TimelineItem
              headBlock={{
                titleHigh: "System Software",
                title: "Engineer",
                location: "Fortech",
                date: "Feb 2020 ➔ Oct 2020"
              }}

              listBlock={{
                intro1: "Led migration from legacy PHP to a modern React frontend, optimizing performance and scalability.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "**React Migration**: Architected modular React/TypeScript components with Redux Toolkit, reducing load times by 15%.",
                  },
                  {
                    text: "**API Optimization**: Streamlined Laravel API integration with Axios and caching, improving checkout for 2,000+ users.",
                  },
                  {
                    text: "**Testing**: Achieved 85% test coverage with Jest, cutting bugs by 20%.",
                  },
                ]
              }}
              skills={[
                "REACT.JS",
                "REDUX",
                "STATE MANAGEMENT",
                "REACT ROUTER",
                "TYPESCRIPT",
                "VUE.JS",
                "HTML5",
                "CSS3",
                "SCSS",
                "SASS",
                "CSS FLEXBOX",
                "CSS GRID",
                "JAVASCRIPT",
                "PHP",
                "LARAVEL",
                "CODEIGNITER",
                "MAGENTO",
                "REST",
                "MICROSERVICES",
                "UNIT TEST",
                "JEST"
              ]}
              industry="E-Commerce"
            />

            <li className="timeline-item flex justify-between w-full lg:h-full h-1 md:mb-4 mb-15">
              <div className="left-side-section pr-4">
                <div className="circle-avatar start flex items-center justify-center rounded-full"></div>
              </div>
            </li>
          </>
        )
        }


      </ul>
    </SectionBlock>
  )
}