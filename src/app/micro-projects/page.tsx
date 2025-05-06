import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const MicroProjects = dynamic(() => import('@/components/sections/MicroProjects/MicroProjects'), {
  loading: () => <SectionLoading name="MicroProjects" />,
});

export default function MicroProjectsPage() {
  return <MicroProjects className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active" />
}