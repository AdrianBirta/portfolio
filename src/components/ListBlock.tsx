export default function ListBlock({
  intro1,
  focus,
  items
}: {
  intro1?: string;
  focus?: string;
  items: string[];
}) {
  return (
    <div className="main-education-section mt-4">
      {intro1 && (
        <div className="intro mb-2">
          {intro1}
        </div>
      )}
      {focus && (
        <div className="intro mb-2 font-bold">
          {focus}
        </div>
      )}
      <ul className="list-disc pl-8">
        {
          items.map(item => (
            <li key={item} className="">{item}</li>
          ))
        }
      </ul>
    </div>
  )
}