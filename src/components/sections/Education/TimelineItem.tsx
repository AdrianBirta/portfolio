import BadgePill from "@/components/BadgePill";
import HeadBlock from "@/components/HeadBlock";
import ListBlock from "@/components/ListBlock";
import { GraduationHat02 } from "@untitled-ui/icons-react";

export default function TimelineItem({
  headBlock,
  listBlock,
  skills
}: {
  headBlock: { titleHigh: string, title: string, location: string, date: string },
  listBlock: { intro1: string, focus: string, items: { text: string }[] },
  skills: string[]
}) {
  return (
    <li className="timeline-item flex justify-between w-full lg:pb-8 pb-20">
      <div className="left-side-section sm:pr-4 pr-0 ">
        <div className="circle-avatar flex items-center justify-center rounded-full">
          <GraduationHat02 className="sm:w-10 sm:h-10 sm:w-5 sm:h-5" />
        </div>
      </div>
      <div className="timeline-content w-full el-highlight rounded-2xl p-4">
        <HeadBlock
          titleHigh={headBlock.titleHigh}
          title={headBlock.title}
          location={headBlock.location}
          date={headBlock.date}
          timeline={true}
        />

        <ListBlock
          intro1={listBlock.intro1}
          focus={listBlock.focus}
          items={listBlock.items}
        />

        <div className="footer-education-section flex flex-wrap mt-4">
          {skills.map(skill => <BadgePill key={`${skill} ${headBlock.date}`} text={skill} />)}
        </div>
      </div>
    </li>
  )
}