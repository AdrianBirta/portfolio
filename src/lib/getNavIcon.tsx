import {
  Briefcase02,
  Clock,
  FolderCheck,
  GraduationHat02,
  Image04,
  PresentationChart01,
  Send01,
  Tool02,
  User03,
} from "@untitled-ui/icons-react";

export function getNavIcon(name: string, className = "w-5 h-5") {
  switch (name) {
    case "Home":
    case "About me":
      return <User03 className={className} />;
    case "Education":
      return <GraduationHat02 className={className} />;
    case "Skills":
      return <Tool02 className={className} />;
    case "Experience":
      return <Briefcase02 className={className} />;
    case "Portfolio":
      return <FolderCheck className={className} />;
    case "Contact":
      return <Send01 className={className} />;
    case "History":
      return <Clock className={className} />;
    case "Showcase":
      return <Image04 className={className} />;
    case "Micro Projects":
      return <PresentationChart01 className={className} />;
    default:
      return null;
  }
}
