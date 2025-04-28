import SectionBlock from "@/components/SectionBlock";
import TimelineItem from "@/components/sections/Experience/TimelineItem";

export default function TimelineList({ scroll }: { scroll: boolean }) {
  return (
    <SectionBlock>
      <ul className="timeline-list">
        <TimelineItem
          headBlock={{
            titleHigh: "Senior React Frontend",
            title: "Developer",
            location: "Adfin Financial Services",
            date: "Nov 2024 ➔ Present"
          }}

          listBlock={{
            intro1: "Joined the development team of a UK-based SaaS platform aimed at streamlining invoicing and billing workflows for small to mid-sized businesses. The platform faced major usability and integration challenges — including unclear invoice statuses, rigid customer contact management, and poor API performance with Xero.",
            focus: "Key Engineering Contributions:",
            items: [
              {
                text: "Refactored Invoice Lifecycle with Activity Flags: Re-engineered the invoice status system using React.js, TypeScript, and React Query, introducing granular activity flags and a dynamic UI that reflects real-time changes. This provided users with greater transparency and control across the billing pipeline.",
              },
              {
                text: "Advanced Data Fetching with React Query: Optimized client-server communication by implementing query caching, background data synchronization, and intelligent refetching logic. Reduced unnecessary API calls and improved perceived performance in key views by over 40%.",
              },
              {
                text: "Multi-Contact Architecture for Customers: Designed and developed flexible data structures and UI logic to support multiple contact persons per customer. Built an intuitive interface for adding, editing, and managing contact roles using Material-UI components and Figma-guided designs.",
              },
              {
                text: "Complex Activity Log for Invoice History: Engineered a robust, real-time activity log system to track invoice events (status changes, communication attempts, etc.), leveraging React Query's live updates and optimistic UI patterns. Delivered a rich, timeline-based view that improved invoice traceability and accountability.",
              },
              {
                text: "Integration with Xero Accounting Platform: Collaborated closely with backend engineers to architect seamless data synchronization between Adfin and Xero, building frontend support for optimized request batching and error handling. Reduced sync-related issues and enhanced consistency between internal and third-party systems.",
              },
              {
                text: "UI/UX Enhancements & Componentization: Refactored multiple views to align with Figma prototypes, implementing consistent spacing, theming, and form validation patterns. Leveraged Material-UI and custom hooks for reusable, accessible components that simplified future scaling.",
              }
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
            title: "Developer",
            location: "Persistent Systems",
            date: "Dec 2022 ➔ Nov 2024"
          }}

          listBlock={{
            intro1: "Partnered with a US-based geospatial intelligence company to design and deliver a robust, extensible mapping platform for advanced location-based data visualization and analytics. Focused on real-time interactivity, spatial accuracy, and performance-critical rendering.",
            focus: "Key Engineering Contributions:",
            items: [
              {
                text: "Custom Map Rendering Engine with React & Mapbox GL JS: Architected an interactive mapping layer system using React, TypeScript, and Mapbox GL JS, enabling dynamic overlays, conditional styling, and client-driven rendering rules. Created map-render abstraction hooks (useMapContext, useLayerManager) to isolate logic and allow composability across modules.",
              },
              {
                text: "Geospatial State Orchestration via Redux Toolkit: Structured domain-level state into geospatial slices (e.g. layers, coordinates, filters) with Redux Toolkit, combining selectors, RTK queries, and entity adapters for real-time updates. Built a reactive UI framework synced to location changes, drawing tools, and server-fed data streams.",
              },
              {
                text: "Advanced Geometry Processing with Turf.js & ArcGIS API: Integrated Turf.js for client-side vector calculations (e.g., bounding boxes, convex hulls, spatial joins), and ArcGIS JS API for spatial indexing, snapping, and feature-layer querying. Handled multi-polygon overlays and coordinate transformation (WGS84 ↔︎ Web Mercator).",
              },
              {
                text: "Full Geocoding Stack & Mapbox Navigation Integration: Developed a bi-directional geocoding engine using Mapbox SDKs, handling reverse-geocoded suggestions, address normalization, and long/lat precision filtering. Connected with Mapbox’s routing API for real-time pathfinding and delivery logic overlays.",
              },
              {
                text: "Multi-Framework Map Ecosystem (Mapbox + Leaflet + ArcGIS): Orchestrated coexistence of Mapbox, Leaflet.js, and ArcGIS, with a pluggable layer-switching system, retaining state (bounds, pitch, bearing) across renderer transitions. Built adapters to unify event systems and data pipelines across map libraries.",
              },
              {
                text: "UI Layer & Interaction Design with Tailwind CSS & Custom Hooks: Engineered interaction patterns for panning, zooming, clustering, and heatmaps via Tailwind CSS and accessible ARIA components. Used fine-grained event delegation for tooltips, hover effects, and map-based forms with keyboard support and screen-reader semantics.",
              },
              {
                text: "Data Fetch Strategy & Real-Time Syncing: Implemented batched fetch pipelines with throttling and debouncing using custom usePollingQuery and useBoundingBoxFetch hooks. Optimized backend sync using request deduplication and layered caching (Mapbox + client-side), minimizing paint-blocking operations.",
              },
              {
                text: "Performance Profiling & Rendering Optimizations: Benchmarked map render cycles and frame rates with Mapbox Inspector and React Profiler, reducing rerenders via React.memo, useCallback, and virtualized overlay rendering. Handled large-scale datasets (10k+ markers) with WebGL-based optimizations and tile-based rendering strategies.",
              },
              {
                text: "Seamless API Integrations & Contextual Data Visualization: Consumed third-party data (asset tracking, weather, risk zones) through a uniform data ingestion layer. Designed data-driven styles using Mapbox expressions, with fallback rules and boundary-aware rendering to prevent UX inconsistencies.",
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
                title: "Developer",
                location: "Amdaris",
                date: "Jul 2021 ➔ Dec 2022"
              }}

              listBlock={{
                intro1: "Worked with a UK-based client to architect and implement a new business function within their web portal. With minimal design documentation, the project required a deep understanding of business rules, technical adaptability, and clean integration with an existing multi-framework codebase.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "Modular UI Architecture in React & TypeScript: Developed a modular and scalable feature set using React.js and TypeScript, with Redux Toolkit for state isolation and async flows. Emphasized strong typing, interface contracts, and reusable hooks to streamline development and reduce runtime errors.",
                  },
                  {
                    text: "Design System Implementation Across Libraries: Integrated Material-UI, Core-UI, and Tailwind CSS to create a unified component system. Extended base components with custom logic and styling layers using SCSS, ensuring consistent design tokens and responsive behavior across screen sizes.",
                  },
                  {
                    text: "Cross-Framework Feature Development (Vue + React): Collaborated across multiple frontend stacks, contributing to legacy Vue.js modules styled with Vuetify, while building new features in React. Ensured cohesive UX across both frameworks through shared style abstractions and normalized data flows.",
                  },
                  {
                    text: "Semantic, Accessible, and Responsive HTML/CSS: Built fully responsive UIs using semantic HTML5 and layered utility-first styling via Tailwind and SCSS. Followed accessibility best practices (ARIA, keyboard navigation) to ensure WCAG compliance across components.",
                  },
                  {
                    text: "Performance Profiling & Optimization: Conducted render performance audits using React DevTools and Chrome Lighthouse. Optimized component lifecycles with React.memo, selective re-renders, and efficient state slices, reducing UI lag and improving time-to-interaction.",
                  },
                  {
                    text: "Versioning & Deployment Readiness: Maintained clean Git practices with scoped commits and PR reviews. Ensured all modules met production-readiness by implementing prop-type validation, unit tests (Jest), and integration sanity checks.",
                  }
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
                title: "Developer",
                location: "Improvemed",
                date: "Oct 2020 ➔ Jul 2021"
              }}

              listBlock={{
                intro1: "Brought in to modernize the frontend of a healthcare platform offering physical therapy services. The original system suffered from sluggish performance, rendering errors, and poor mobile responsiveness — all of which were limiting user engagement and slowing business growth.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "Modernized React Stack & Project Architecture: Refactored the existing codebase by upgrading to React 17+, restructuring the app into modular components using TypeScript and functional programming principles. Introduced a layered folder architecture with domain-driven conventions, enhancing scalability and onboarding speed.",
                  },
                  {
                    text: "Redux-Based State Refactor: Rebuilt the global state layer using Redux with normalized entities and selector patterns, reducing bugs related to deeply nested state and improving maintainability. Integrated Redux DevTools for traceable state transitions during QA and debugging.",
                  },
                  {
                    text: "Performance & Rendering Optimization: Significantly improved perceived performance and load time by applying code-splitting via dynamic import() statements and lazy loading for asynchronous routes and large modules. Reduced Time-to-Interactive (TTI) using React.memo, useCallback, and efficient virtual DOM updates.",
                  },
                  {
                    text: "Data Visualization with Chart.js & D3.js: Built custom, interactive data dashboards using Chart.js and D3.js, presenting key analytics (such as session metrics and progress tracking) to patients and staff. Focused on accessibility and responsiveness to ensure charts were legible across all screen sizes.",
                  },
                  {
                    text: "Error Resilience & UX Improvements: Implemented centralized error boundaries and fallback UIs using React’s error-handling lifecycle, eliminating multiple crash points. Enhanced user feedback using loading skeletons, toast notifications, and smart form validation.",
                  },
                  {
                    text: "SCSS Modular Styling & Responsive Layouts: Reworked the legacy CSS into SCSS modules, applying BEM methodology and utility classes to maintain a clean visual structure. Introduced responsive layout grids, improving usability across mobile, tablet, and desktop breakpoints.",
                  },
                  {
                    text: "Accessibility & Compliance Enhancements: Audited and improved the semantic structure of key UI components for better WCAG 2.1 compliance. Used proper ARIA attributes, keyboard navigation patterns, and semantic tags to boost accessibility for screen readers.",
                  },
                  {
                    text: "Charting Performance in Real-Time Views: Leveraged D3 transitions and event bindings to support animated, real-time chart updates on patient dashboards — enabling faster clinical decisions through live metrics and progress indicators.",
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
                intro1: "Joined a cross-functional team to support the relaunch of a Switzerland-based online shoe retailer's e-commerce platform. The client faced tight deadlines and lacked the technical depth to migrate and scale their online store effectively. My role focused on architecting performant frontend components, integrating backend features, and ensuring smooth delivery across multiple platforms.",
                focus: "Key Engineering Contributions:",
                items: [
                  {
                    text: "E-Commerce Migration to Modern Frontend Stack: Led the frontend refactoring using React.js with TypeScript, migrating legacy views from PHP/CodeIgniter templates into reusable, component-based architecture. This enhanced testability, reusability, and maintainability across the store's product and checkout flows.",
                  },
                  {
                    text: "State Management Overhaul with Redux: Designed and implemented global state management using Redux Toolkit, introducing action normalization, middleware, and selectors to manage cart, inventory, and user session data. Significantly reduced re-renders and race conditions in data fetching flows.",
                  },
                  {
                    text: "Modular Design System with SCSS & CSS Flexbox: Created a scalable design system using SCSS partials and variables. Implemented responsive layouts using CSS Flexbox and utility-first class patterns to ensure consistent UX across mobile, tablet, and desktop devices.",
                  },
                  {
                    text: "Vue.js Feature Integration: Integrated and maintained several legacy Vue.js widgets (e.g., product sliders, filters) into the React-based frontend through micro-frontend-like composition strategies, enabling gradual migration without regression.",
                  },
                  {
                    text: "Backend Integration with PHP (CodeIgniter & Laravel): Collaborated with backend engineers to consume RESTful APIs developed in Laravel, ensuring smooth data flow for product catalogs, user profiles, and checkout processes. Debugged and optimized endpoints when performance issues arose.",
                  },
                  {
                    text: "Magento Catalog Sync: Contributed to the Magento integration layer responsible for syncing product data, inventory levels, and promotional rules from the backend into the storefront. Wrote logic to normalize Magento structures into frontend-consumable formats.",
                  },
                  {
                    text: "Test-Driven Development & Automation: Wrote unit tests using Jest for key UI components and helper functions. Developed mocking utilities for asynchronous API responses to increase test coverage and reliability.",
                  },
                  {
                    text: "Technical Documentation & Task Scoping: Created technical specs, diagrams, and implementation plans for all new modules. Worked closely with product owners to break down business requirements into granular dev tasks and ensured technical feasibility across the pipeline.",
                  },
                  {
                    text: "Team Collaboration & Agile Process: Participated in daily stand-ups, sprint planning, and retrospectives. Championed code reviews and pair programming sessions to improve code quality and share frontend best practices.",
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