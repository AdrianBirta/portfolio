export type RichTextItem = {
  text: string;
  highlights?: string[];
}

export default function TextBlock({
  item
}: {
  item: RichTextItem;
}) {
  function highlightWords(text: string, highlights?: string[]) {
    if (!highlights || highlights.length === 0) return text;

    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, idx) =>
      highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={idx} className="font-semibold text-highlight">{part}</span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  }

  return (
    <div className="main-education-section mt-4">
      <div>
        {highlightWords(item.text, item.highlights)}
      </div>
    </div>
  )
}