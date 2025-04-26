export default function TextBlock({
  item
}: {
  item: { text: string };
}) {

  return (
    <div className="main-education-section py-4 xl:text-sm sm:text-sm text-base">
      {item.text}
    </div>
  )
}