export default function SectionBlock({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="pt-16">
      {children}
    </section>
  )
}