import Sidebar from "@/components/navigation/Sidebar";
import SectionsWrapper from "@/components/sections/SectionsWrapper";

export default function Home() {
  return (
    <div className="portfolio-wrapper sm:flex-row flex-col sm:p-5 p-1">
      <Sidebar />
      <SectionsWrapper />
    </div>
  );
}
