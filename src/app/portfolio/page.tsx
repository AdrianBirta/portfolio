import SectionLoading from "@/components/SectionLoading";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import('@/components/sections/Portfolio/Portfolio'), {
  loading: () => <SectionLoading name="Portfolio" />,
});

export default function PortfolioPage() {
  return <Portfolio className="hashSection sm:rounded-xl rounded-sm p-6 pb-10 active" />
}