import BadgePill from "@/components/BadgePill";
import HeadBlock from "@/components/HeadBlock";
import ListBlock, { RichTextItem } from "@/components/ListBlock";
import { Tool02 } from "@untitled-ui/icons-react";

export default function TimelineItem({
  headBlock,
  listBlock,
  skills,
  industry
}: {
  headBlock: { titleHigh: string, title: string, location: string, date: string },
  listBlock: { intro1: string, focus: string, items: RichTextItem[] },
  skills: string[],
  industry: string;
}) {
  return (
    <li className="timeline-item flex justify-between w-full lg:pb-8 pb-20">
      <div className="left-side-section sm:pr-4 pr-0">
        <div className="circle-avatar flex items-center justify-center rounded-full">
          <Tool02 className="sm:w-10 sm:h-10 sm:w-5 sm:h-5" />
        </div>
      </div>
      <div className="timeline-content w-full el-highlight rounded-2xl p-4 flex flex-col gap-1">
        <HeadBlock
          titleHigh={headBlock.titleHigh}
          title={headBlock.title}
          location={headBlock.location}
          date={headBlock.date}
          timeline={true}
        />

        <span className="industry-badge bg-highlight text-white px-3 py-1 mx-2 rounded-xl self-start">{industry}</span>

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