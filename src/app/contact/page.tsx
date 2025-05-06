import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import('@/components/sections/Contact/Contact'), {
  loading: () => <SectionLoading name="Contact" />,
});

export default function ContactPage() {
  return <Contact className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active" />
}