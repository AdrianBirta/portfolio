export default function ListBlock({
  intro1,
  focus,
  items
}: {
  intro1?: string;
  focus?: string;
  items: { text: string }[];
}) {

  return (
    <div className="main-education-section mt-4">
      {intro1 && (
        <div className="intro mb-2 xl:text-base sm:text-sm text-xs">
          {intro1}
        </div>
      )}
      {focus && (
        <div className="intro mb-2 font-bold xl:text-base sm:text-sm text-xs">
          {focus}
        </div>
      )}
      <ul className="list-disc pl-8 xl:text-base sm:text-sm text-xs">
        {
          items.map((item: { text: string }, i) => (
            <li key={i} className="m-2">
              {item.text}
            </li>
          ))
        }
      </ul>
    </div>
  )
}