import SectionBlock from "@/components/SectionBlock";
import TimelineItem from "@/components/sections/Education/TimelineItem";

export default function TimelineList() {
  return (
    <SectionBlock>
      <ul className="timeline-list">
        <TimelineItem
          headBlock={{ titleHigh: "Certification", title: "- React with Redux, React-Router, Hooks & Auth0", location: "Udemy", date: "Jan 2021" }}
          listBlock={{
            intro1: "Focused on building real-world, scalable applications using the modern React ecosystem. Emphasis on state management, routing strategies, and authentication workflows using Auth0.",
            focus: "Focus Areas:",
            items: [
              { text: "React fundamentals and component architecture." },
              { text: "Redux state management and middleware." },
              { text: "Routing with React-Router (v6)." },
              { text: "Handling authentication and protected routes with Auth0." },
              { text: "Reusable components and hooks." }
            ]
          }}
          skills={["REACT.JS", " REDUX", " REACT ROUTER", " HOOKS", " STATE MANAGEMENT", " SPA ARCHITECTURE"]}
        />

        <TimelineItem
          headBlock={{ titleHigh: "Certification", title: "- Front-end Web Development", location: "IT School - Oradea", date: "Sep 2019" }}
          listBlock={{
            intro1: "Completed a comprehensive front-end program covering core web development skills and modern JavaScript frameworks. Strong foundation in responsive design and component-based development.",
            focus: "Focus Areas:",
            items: [
              { text: "Semantic HTML and CSS layout techniques." },
              { text: "JavaScript fundamentals and ES6+ features." },
              { text: "Responsive web design and Flexbox/Grid." },
              { text: "Intro to React.js and component lifecycles." },
              { text: "TypeScript and type-safe front-end patterns." }
            ]
          }}
          skills={["REACT.JS", "TYPESCRIPT", "JAVASCRIPT", "HTML", "CSS", "GIT", "WEB FUNDAMENTALS", "RESPONSIVE DESIGN", "VERSION CONTROL", "REACT ROUTER"]}
        />

        <TimelineItem
          headBlock={{ titleHigh: "Bachelor", title: "in Automation and Applied Informatics", location: "Technical University of Oradea", date: "Oct 2013 ➔ Jul 2017" }}
          listBlock={{
            intro1: "Earned a Bachelor's degree in Automation and Applied Informatics with a strong foundation in computer science, software development, and control systems.",
            focus: "Focus Areas:",
            items: [
              { text: "Frontend & Backend Development – Gained experience working with JavaScript, React.js, TypeScript, and Node.js." },
              { text: "Automation & Control Systems – Studied embedded systems, automation logic, and applied informatics principles." },
              { text: "Database Management – Worked with SQL and NoSQL databases for application data handling." },
              { text: "Problem Solving & Algorithms – Developed skills in logical thinking, system optimization, and software design." },
              { text: "Software Engineering Principles – Focused on clean code practices, debugging, and application lifecycle management." }
            ]
          }}
          skills={["REACT.JS", "TYPESCRIPT", "JAVASCRIPT", "REDUX", "HTML", "CSS", "NODE.JS", "GIT", "WEB DEVELOPMENT", "COMPONENT DESIGN", "HOOKS", "REACT ROUTER", "AUTH0", "UI/UX"]}
        />

        <TimelineItem
          headBlock={{ titleHigh: "High School", title: "- Informatics & Mathematics", location: "High School (Informatic - mathematic, intensive informatic profile) - Oradea", date: "Sep 2009 ➔ Jun 2013" }}
          listBlock={{
            intro1: "Earned a Bachelor's degree in Automation and Applied Informatics with a strong foundation in computer science, software development, and control systems.",
            focus: "Focus Areas:",
            items: [
              { text: "Informatics (C++, pseudocode, logic design)." },
              { text: "Advanced Mathematics (algebra, calculus, geometry)." },
              { text: "Algorithmic thinking & competitive exercises." },
              { text: "Basic web technologies (HTML, CSS, JS, PHP)." },
              { text: "Project work and lab exercises." }
            ]
          }}
          skills={["C++", "ALGORITHMS", "HTML", "CSS", "JAVASCRIPT", "PHP", "PROBLEM SOLVING", "ANALYTICAL THINKING"]}
        />

        <li className="timeline-item flex justify-between w-full lg:h-full h-1 md:mb-4 mb-15">
          <div className="left-side-section pr-4">
            <div className="circle-avatar start flex items-center justify-center rounded-full"></div>
          </div>
        </li>
      </ul>
    </SectionBlock>
  )
}