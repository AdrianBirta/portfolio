import clsx from "clsx";

export default function TitleSection({
  highFirst,
  titleHighMd,
  titleHigh,
  title,
  leftBorder,
  headTitle,

}: {
  highFirst?: boolean;
  titleHighMd?: string;
  titleHigh?: string;
  title?: string;
  leftBorder?: boolean;
  headTitle?: boolean;
}) {
  return (
    <div className={clsx(
      headTitle
        ? "xl:text-5xl lg:text-4xl text-3xl mb-6"
        : "xl:text-3xl lg:text-2xl text-xl",
      leftBorder
        ? "border-l-4 border-color-highlight pl-4 mb-8"
        : ""
    )}>
      {
        highFirst ? (
          <>
            {titleHigh && (
              <span className="lg:inline md:hidden sm:hidden hidden">
                <span className="text-highlight">{titleHigh}</span> {title && title}
              </span>
            )}
          </>
        ) : (
          <>
            {title &&
              titleHighMd ? (
              <span className="lg:inline md:hidden sm:hidden hidden">{title} </span>
            ) : title
            }

            {titleHigh &&
              titleHighMd ? (
              <>
                <span className="text-highlight lg:hidden md:inline sm:inline inline">{titleHighMd}</span>
                <span className="text-highlight lg:inline md:hidden sm:hidden hidden">{titleHigh}</span>
              </>
            ) : (
              <span className="text-highlight"> {titleHigh}</span>
            )
            }
          </>
        )
      }

    </div>
  )
}