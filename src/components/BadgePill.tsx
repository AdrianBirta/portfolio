import { CameraLens } from "@untitled-ui/icons-react";
import clsx from "clsx";

export default function BadgePill({
  text,
  date
}: {
  text: string;
  date?: boolean
}) {
  return (
    <div className={clsx(
      "badge-bg-highlight flex items-center justify-center",
      date ? "sm:text-base px-4 mx-2 mb-1 text-sm sm:h-11 h-8 lg:min-w-32 sm:rounded-2xl rounded-xl" : "rounded-2xl md:text-sm sm:text-xs text-[8px] sm:px-3 px-2 sm:py-2 py-1 m-1"
    )}>
      {!date && <CameraLens className="w-4 h-4 mr-2" />}
      {text}
    </div>
  )
}