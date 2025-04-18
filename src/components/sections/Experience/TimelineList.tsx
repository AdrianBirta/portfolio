import SectionBlock from "@/components/SectionBlock";
import TimelineItem from "@/components/sections/Experience/TimelineItem";

export default function TimelineList() {
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
                highlights: ["React.js", "TypeScript", "React Query", "dynamic UI", ""]
              },
              {
                text: "Advanced Data Fetching with React Query: Optimized client-server communication by implementing query caching, background data synchronization, and intelligent refetching logic. Reduced unnecessary API calls and improved perceived performance in key views by over 40%.",
                highlights: ["query caching", "data synchronization", "by over 40%"]
              },
              {
                text: "Multi-Contact Architecture for Customers: Designed and developed flexible data structures and UI logic to support multiple contact persons per customer. Built an intuitive interface for adding, editing, and managing contact roles using Material-UI components and Figma-guided designs.",
                highlights: ["Material-UI", "Figma-guided designs"]
              },
              {
                text: "Complex Activity Log for Invoice History: Engineered a robust, real-time activity log system to track invoice events (status changes, communication attempts, etc.), leveraging React Query's live updates and optimistic UI patterns. Delivered a rich, timeline-based view that improved invoice traceability and accountability.",
                highlights: ["UI patterns", "React Query's"]
              },
              {
                text: "Integration with Xero Accounting Platform: Collaborated closely with backend engineers to architect seamless data synchronization between Adfin and Xero, building frontend support for optimized request batching and error handling. Reduced sync-related issues and enhanced consistency between internal and third-party systems.",
                highlights: ["architect", "data synchronization", "Reduced sync-related issues", "enhanced consistency"]
              },
              {
                text: "UI/UX Enhancements & Componentization: Refactored multiple views to align with Figma prototypes, implementing consistent spacing, theming, and form validation patterns. Leveraged Material-UI and custom hooks for reusable, accessible components that simplified future scaling.",
                highlights: ["Material-UI", "custom hooks"]
              }
            ]
          }}
          skills={[
            "REACT.JS",
            "TYPESCRIPT",
            "REACT QUERY",
            "MATERIAL-UI",
            "REST APIS",
            "XERO API",
            "HTML5",
            "CSS3",
            "GITLAB",
            "COMPONENT DESIGN",
            "REACT ROUTER",
            "UI/UX"
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
                highlights: ["React", "TypeScript", "Mapbox GL JS", "useMapContext", "useLayerManager"]
              },
              {
                text: "Geospatial State Orchestration via Redux Toolkit: Structured domain-level state into geospatial slices (e.g. layers, coordinates, filters) with Redux Toolkit, combining selectors, RTK queries, and entity adapters for real-time updates. Built a reactive UI framework synced to location changes, drawing tools, and server-fed data streams.",
                highlights: ["geospatial slices", "Redux Toolkit", "RTK queries"]
              },
              {
                text: "Advanced Geometry Processing with Turf.js & ArcGIS API: Integrated Turf.js for client-side vector calculations (e.g., bounding boxes, convex hulls, spatial joins), and ArcGIS JS API for spatial indexing, snapping, and feature-layer querying. Handled multi-polygon overlays and coordinate transformation (WGS84 ↔︎ Web Mercator).",
                highlights: ["Turf.js", "ArcGIS JS API"]
              },
              {
                text: "Full Geocoding Stack & Mapbox Navigation Integration: Developed a bi-directional geocoding engine using Mapbox SDKs, handling reverse-geocoded suggestions, address normalization, and long/lat precision filtering. Connected with Mapbox’s routing API for real-time pathfinding and delivery logic overlays.",
                highlights: ["Mapbox SDKs", "real-time pathfinding"]
              },
              {
                text: "Multi-Framework Map Ecosystem (Mapbox + Leaflet + ArcGIS): Orchestrated coexistence of Mapbox, Leaflet.js, and ArcGIS, with a pluggable layer-switching system, retaining state (bounds, pitch, bearing) across renderer transitions. Built adapters to unify event systems and data pipelines across map libraries.",
                highlights: ["Mapbox", "Leaflet.js", "ArcGIS", "Leaflet"]
              },
              {
                text: "UI Layer & Interaction Design with Tailwind CSS & Custom Hooks: Engineered interaction patterns for panning, zooming, clustering, and heatmaps via Tailwind CSS and accessible ARIA components. Used fine-grained event delegation for tooltips, hover effects, and map-based forms with keyboard support and screen-reader semantics.",
                highlights: ["Tailwind CSS", "accessible ARIA components"]
              },
              {
                text: "Data Fetch Strategy & Real-Time Syncing: Implemented batched fetch pipelines with throttling and debouncing using custom usePollingQuery and useBoundingBoxFetch hooks. Optimized backend sync using request deduplication and layered caching (Mapbox + client-side), minimizing paint-blocking operations.",
                highlights: ["throttling", "debouncing", "custom usePollingQuery and useBoundingBoxFetch hooks"]
              },
              {
                text: "Performance Profiling & Rendering Optimizations: Benchmarked map render cycles and frame rates with Mapbox Inspector and React Profiler, reducing rerenders via React.memo, useCallback, and virtualized overlay rendering. Handled large-scale datasets (10k+ markers) with WebGL-based optimizations and tile-based rendering strategies.",
                highlights: ["Mapbox Inspector", "React Profiler", "React.memo", "useCallback", "virtualized overlay rendering"]
              },
              {
                text: "Seamless API Integrations & Contextual Data Visualization: Consumed third-party data (asset tracking, weather, risk zones) through a uniform data ingestion layer. Designed data-driven styles using Mapbox expressions, with fallback rules and boundary-aware rendering to prevent UX inconsistencies.",
                highlights: ["uniform data ingestion layer", "data-driven", "Mapbox"]
              },
            ]
          }}
          skills={[
            "REACT.JS",
            "TYPESCRIPT",
            "REDUX TOOLKIT",
            "MAPBOX.JS",
            "LEAFLET.JS",
            "TURF.JS",
            "ARCGIS.JS",
            "HTML5",
            "CSS3",
            "COMPONENT DESIGN",
            "REACT ROUTER",
            "UI/UX"
          ]}
          industry="Geospatial Services"
        />

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
                highlights: ["React.js", "TypeScript", "Redux Toolkit", ""]
              },
              {
                text: "Design System Implementation Across Libraries: Integrated Material-UI, Core-UI, and Tailwind CSS to create a unified component system. Extended base components with custom logic and styling layers using SCSS, ensuring consistent design tokens and responsive behavior across screen sizes.",
                highlights: ["Material-UI", "Core-UI", "Tailwind CSS", "SCSS"]
              },
              {
                text: "Cross-Framework Feature Development (Vue + React): Collaborated across multiple frontend stacks, contributing to legacy Vue.js modules styled with Vuetify, while building new features in React. Ensured cohesive UX across both frameworks through shared style abstractions and normalized data flows.",
                highlights: ["", "", "", ""]
              },
              {
                text: "Semantic, Accessible, and Responsive HTML/CSS: Built fully responsive UIs using semantic HTML5 and layered utility-first styling via Tailwind and SCSS. Followed accessibility best practices (ARIA, keyboard navigation) to ensure WCAG compliance across components.",
                highlights: ["HTML5 and layered utility-first", "WCAG compliance ", "", ""]
              },
              {
                text: "Performance Profiling & Optimization: Conducted render performance audits using React DevTools and Chrome Lighthouse. Optimized component lifecycles with React.memo, selective re-renders, and efficient state slices, reducing UI lag and improving time-to-interaction.",
                highlights: ["React DevTools", "Chrome Lighthouse", "React.memo", ""]
              },
              {
                text: "Versioning & Deployment Readiness: Maintained clean Git practices with scoped commits and PR reviews. Ensured all modules met production-readiness by implementing prop-type validation, unit tests (Jest), and integration sanity checks.",
                highlights: ["Git", "PR reviews", "Jest", ""]
              }
            ]
          }}
          skills={[
            "REACT.JS",
            "REDUX",
            "TYPESCRIPT",
            "MATERIAL-UI",
            "COREUI",
            "TAILWIND CSS",
            "VUE.JS",
            "VUETIFY",
            "HTML5",
            "CSS3",
            "SCSS",
            "COMPONENT DESIGN",
            "REACT ROUTER",
            "UI/UX"
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
                highlights: ["React 17+", "TypeScript ", "functional programming principles", ""]
              },
              {
                text: "Redux-Based State Refactor: Rebuilt the global state layer using Redux with normalized entities and selector patterns, reducing bugs related to deeply nested state and improving maintainability. Integrated Redux DevTools for traceable state transitions during QA and debugging.",
                highlights: ["Redux ", "DevTools ", "improving maintainability", ""]
              },
              {
                text: "Performance & Rendering Optimization: Significantly improved perceived performance and load time by applying code-splitting via dynamic import() statements and lazy loading for asynchronous routes and large modules. Reduced Time-to-Interactive (TTI) using React.memo, useCallback, and efficient virtual DOM updates.",
                highlights: ["code-splitting", "lazy loading", "React.memo", "useCallback"]
              },
              {
                text: "Data Visualization with Chart.js & D3.js: Built custom, interactive data dashboards using Chart.js and D3.js, presenting key analytics (such as session metrics and progress tracking) to patients and staff. Focused on accessibility and responsiveness to ensure charts were legible across all screen sizes.",
                highlights: ["Chart.js and D3.js", "accessibility and responsiveness", "", ""]
              },
              {
                text: "Error Resilience & UX Improvements: Implemented centralized error boundaries and fallback UIs using React’s error-handling lifecycle, eliminating multiple crash points. Enhanced user feedback using loading skeletons, toast notifications, and smart form validation.",
                highlights: ["React’s error-handling lifecycle", "loading skeletons", "toast notifications", "smart form validation"]
              },
              {
                text: "SCSS Modular Styling & Responsive Layouts: Reworked the legacy CSS into SCSS modules, applying BEM methodology and utility classes to maintain a clean visual structure. Introduced responsive layout grids, improving usability across mobile, tablet, and desktop breakpoints.",
                highlights: ["BEM methodology", "utility classes", "responsive layout grids", "mobile, tablet, and desktop"]
              },
              {
                text: "Accessibility & Compliance Enhancements: Audited and improved the semantic structure of key UI components for better WCAG 2.1 compliance. Used proper ARIA attributes, keyboard navigation patterns, and semantic tags to boost accessibility for screen readers.",
                highlights: ["UI components", "WCAG 2.1", "ARIA attributes", ""]
              },
              {
                text: "Charting Performance in Real-Time Views: Leveraged D3 transitions and event bindings to support animated, real-time chart updates on patient dashboards — enabling faster clinical decisions through live metrics and progress indicators.",
                highlights: ["D3 transitions", "real-time chart", "", ""]
              },
            ]

          }}
          skills={[
            "REACT.JS",
            "REDUX",
            "TYPESCRIPT",
            "CHART.JS",
            "D3.JS",
            "HTML5",
            "CSS3",
            "SCSS",
            "COMPONENT DESIGN",
            "UI/UX"
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
                highlights: ["React.js", "TypeScript", "PHP/CodeIgniter", "reusable, component-based architecture"]
              },
              {
                text: "State Management Overhaul with Redux: Designed and implemented global state management using Redux Toolkit, introducing action normalization, middleware, and selectors to manage cart, inventory, and user session data. Significantly reduced re-renders and race conditions in data fetching flows.",
                highlights: ["Designed and implemented global state management using Redux Toolkit", "action normalization, middleware, and selectors", "", ""]
              },
              {
                text: "Modular Design System with SCSS & CSS Flexbox: Created a scalable design system using SCSS partials and variables. Implemented responsive layouts using CSS Flexbox and utility-first class patterns to ensure consistent UX across mobile, tablet, and desktop devices.",
                highlights: ["SCSS partials and variables", "responsive layouts using CSS Flexbox", "", ""]
              },
              {
                text: "Vue.js Feature Integration: Integrated and maintained several legacy Vue.js widgets (e.g., product sliders, filters) into the React-based frontend through micro-frontend-like composition strategies, enabling gradual migration without regression.",
                highlights: ["micro-frontend-like composition strategies", "Vue.js ", "", ""]
              },
              {
                text: "Backend Integration with PHP (CodeIgniter & Laravel): Collaborated with backend engineers to consume RESTful APIs developed in Laravel, ensuring smooth data flow for product catalogs, user profiles, and checkout processes. Debugged and optimized endpoints when performance issues arose.",
                highlights: ["RESTful APIs", "Laravel", "Debugged and optimized endpoints", ""]
              },
              {
                text: "Magento Catalog Sync: Contributed to the Magento integration layer responsible for syncing product data, inventory levels, and promotional rules from the backend into the storefront. Wrote logic to normalize Magento structures into frontend-consumable formats.",
                highlights: ["Magento integration layer", "", "", ""]
              },
              {
                text: "Test-Driven Development & Automation: Wrote unit tests using Jest for key UI components and helper functions. Developed mocking utilities for asynchronous API responses to increase test coverage and reliability.",
                highlights: ["tests using Jest for key UI components", "asynchronous API responses", "", ""]
              },
              {
                text: "Technical Documentation & Task Scoping: Created technical specs, diagrams, and implementation plans for all new modules. Worked closely with product owners to break down business requirements into granular dev tasks and ensured technical feasibility across the pipeline.",
                highlights: ["Created technical specs, diagrams, and implementation plans", "", "", ""]
              },
              {
                text: "Team Collaboration & Agile Process: Participated in daily stand-ups, sprint planning, and retrospectives. Championed code reviews and pair programming sessions to improve code quality and share frontend best practices.",
                highlights: ["daily stand-ups, sprint planning, and retrospectives", "", "", ""]
              },
            ]
          }}
          skills={[
            "REACT.JS",
            "REDUX",
            "TYPESCRIPT",
            "VUE.JS",
            "LARAVEL",
            "PHP",
            "CODEIGNITER",
            "MAGENTO",
            "SCSS",
            "SASS",
            "HTML5",
            "CSS3",
            "JEST",
            "JAVASCRIPT",
            "CSS FLEXBOX",
            "CSS GRID",
          ]}
          industry="E-Commerce"
        />

        <li className="timeline-item flex justify-between w-full">
          <div className="left-side-section pr-4">
            <div className="circle-avatar start flex items-center justify-center rounded-full"></div>
          </div>
        </li>

      </ul>
    </SectionBlock>
  )
}