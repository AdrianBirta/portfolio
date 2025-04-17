import clsx from "clsx";

export default function TitleSection({
  highFirst,
  titleHigh,
  title,
  leftBorder,
  headTitle,
}: {
  highFirst?: boolean;
  titleHigh?: string;
  title?: string;
  leftBorder?: boolean;
  headTitle?: boolean;
}) {
  return (
    <div className={clsx(
      headTitle
        ? "text-5xl mb-6"
        : "text-3xl",
      leftBorder
        ? "border-l-4 border-highlight pl-4 mb-8"
        : ""
    )}>
      {highFirst ? (
        <>
          {titleHigh && <span className="text-highlight">{titleHigh}</span>} {title && title}
        </>
      ) : (
        <>
          {title && title} {titleHigh && <span className="text-highlight">{titleHigh}</span>}
        </>
      )
      }

    </div>
  )
}