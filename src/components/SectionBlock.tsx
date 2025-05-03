import clsx from "clsx"

export default function SectionBlock({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <section className={clsx(
      className ? className : "pt-16"
    )}>
      {children}
    </section>
  )
}