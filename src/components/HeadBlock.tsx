import BadgePill from "@/components/BadgePill";
import SubtitleSmall from "@/components/SubtitleSmall";
import TitleSection from "@/components/TitleSection";
import { Building01 } from "@untitled-ui/icons-react";

export default function HeadBlock({
  titleHigh,
  title,
  location,
  date
}: {
  titleHigh: string;
  title: string;
  location: string;
  date: string;
}) {
  return (
    <div className="head-education-section flex justify-between items-top">
      <div>
        <TitleSection title={title} titleHigh={titleHigh} highFirst={true} />
        <SubtitleSmall icon={<Building01 className="w-5 h-5 mr-2" />} text={location} />
      </div>
      <BadgePill date={true} text={date} />
    </div>
  )
}