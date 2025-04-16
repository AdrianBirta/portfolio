import CardInterest from "@/components/sections/About/CardInterest";
import { AlertHexagon, BookOpen01, Code02, CodeCircle03, CpuChip01, Edit04, VideoRecorder } from "@untitled-ui/icons-react";

export default function Interests() {
  return (
    <section className="professional-interests pt-16">
      <div className="title border-l-4 border-highlight text-3xl pl-4 mb-8">Professional <span className="text-highlight">Interests</span></div>

      <div className="interests flex flex-wrap gap-6 justify-center">
        <CardInterest
          icon={<AlertHexagon className="w-10 h-10" />}
          name={"Bug Fixing"}
          description={"Enjoy identifying and resolving issues to ensure smooth performance."}
        />
        <CardInterest
          icon={<VideoRecorder className="w-10 h-10" />}
          name={"Problem-Solving"}
          description={"Enjoy tackling complex coding challenges."}
        />
        <CardInterest
          icon={<BookOpen01 className="w-10 h-10" />}
          name={"Continuous Learning"}
          description={"Always looking to expand my knowledge and skills."}
        />
        <CardInterest
          icon={<CpuChip01 className="w-10 h-10" />}
          name={"Technology"}
          description={"Love exploring new web development trends and innovations."}
        />
        <CardInterest
          icon={<Edit04 className="w-10 h-10" />}
          name={"Performance Optimization"}
          description={"Always looking for ways to make applications faster and more efficient."}
        />
        <CardInterest
          icon={<Code02 className="w-10 h-10" />}
          name={"Coding"}
          description={"Love building scalable applications and solving complex problems."}
        />
      </div>
    </section>
  )
}