import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import('@/components/sections/Skills/Skills'), {
  loading: () => <SectionLoading name="Skills" />,
});

export default function SkillsPage() {
  return <Skills className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active" />
}