import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const About = dynamic(() => import('@/components/sections/About/About'), {
  loading: () => <SectionLoading name="About" />,
});

export default function AboutPage() {
  return <About className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active" />
}