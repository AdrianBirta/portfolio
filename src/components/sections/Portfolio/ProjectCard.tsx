import Icon from "@/components/icons/Icon";
import { RichTextItem } from "@/components/TextBlock";
import TextBlock from "@/components/TextBlock";
import { Globe02 } from "@untitled-ui/icons-react";

export default function ProjectCard({
  companyName,
  subtitle,
  badges,
  textItem,
  websiteURL,
  linkedinURL
}: {
  companyName: string;
  subtitle: string;
  badges: string[];
  textItem: RichTextItem;
  websiteURL: string;
  linkedinURL: string;
}) {
  return (
    <div className="project-card relative el-highlight flex flex-col w-[30%] h-80 p-4 rounded-2xl justify-between">
      <div className="flex flex-col">
        <div className="head-card mb-4">
          <h3 className="text-highlight text-2xl">{companyName}</h3>
          <div className="subtitle text-gray-400 text-sm">{subtitle}</div>
        </div>
        <div className="badges flex flex wrap gap-2 items-start">
          {badges.map(badge => (
            <div key={badge} className="badge text-xs px-2 py-1 badge-bg-highlight rounded-md">{badge}</div>
          ))}
        </div>
        <div className="description">
          <TextBlock
            item={{
              text: textItem.text,
              highlights: textItem.highlights
            }}
          />
        </div>
      </div>
      <div className="links flex gap-2">
        <a href={websiteURL} className="website p-1 badge-bg-highlight rounded-full flex items-center justify-center">
          <Globe02 className="w-9 h-8" />
        </a>
        <a href={linkedinURL} className="linkedin p-1 badge-bg-highlight rounded-full flex items-center justify-center">
          <Icon name="linkedin" className="w-8 h-5" />
        </a>
      </div>

      <span className="absolute -top-3 -right-3 el-highlight p-1 rounded-full flex items-center justify-center">
        <Globe02 className="w-14 h-13" />
      </span>
    </div>
  )
}