export type RichTextItem = {
  text: string;
  highlights?: string[];
}

export default function ListBlock({
  intro1,
  focus,
  items
}: {
  intro1?: string;
  focus?: string;
  items: RichTextItem[];
}) {
  function highlightWords(text: string, highlights?: string[]) {
    if (!highlights || highlights.length === 0) return text;

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, idx) =>
      highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={idx} className="font-semibold text-highlight">{part}</span>
      ) : (
        part
      )
    );
  }

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
          items.map((item: RichTextItem, i) => (
            <li key={i} className="m-2">
              {highlightWords(item.text, item.highlights)}
            </li>
          ))
        }
      </ul>
    </div>
  )
}