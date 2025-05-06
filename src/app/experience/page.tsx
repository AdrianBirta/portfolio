import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import('@/components/sections/Experience/Experience'), {
  loading: () => <SectionLoading name="Experience" />,
});

export default function ExperiencePage() {
  return <Experience className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12 active" />
}
