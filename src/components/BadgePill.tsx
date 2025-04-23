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
      "badge-bg-highlight px-6 mx-2 my-1 flex items-center",
      date ? "sm:text-base text-sm sm:h-11 h-8 sm:rounded-2xl rounded-xl" : "rounded-2xl text-xs h-8"
    )}>
      {!date && <CameraLens className="w-4 h-4 mr-2" />}
      {text}
    </div>
  )
}