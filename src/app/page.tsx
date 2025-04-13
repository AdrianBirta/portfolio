import HashRedirect from "@/components/navigation/HashRedirect";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <div className="relative">
      <HashRedirect />
      <Sections />
    </div>
  );
}
