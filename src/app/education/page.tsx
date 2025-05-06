import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const Education = dynamic(() => import('@/components/sections/Education/Education'), {
  loading: () => <SectionLoading name="Education" />,
});

export default function EducationPage() {
  return <Education className="hashSection sm:rounded-xl rounded-sm sm:p-6 sm:pl-8 pr-6 pb-10 pl-12 active" />
}
