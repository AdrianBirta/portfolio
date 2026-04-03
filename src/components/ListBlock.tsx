export default function ListBlock({
  intro1,
  focus,
  items
}: {
  intro1?: string;
  focus?: string;
  items: { text: string }[];
}) {

  // Funcție care parsează **bold** și returnează React nodes
  const renderBoldText = (text: string): React.ReactNode => {
    const regex = /\*\*(.*?)\*\*/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Text normal înainte de **
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // Textul bold
      parts.push(<strong key={parts.length}>{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }

    // Text rămas după ultimul **
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="main-education-section mt-4">
      {intro1 && (
        <div className="intro mb-2 xl:text-base sm:text-sm text-xs">
          {renderBoldText(intro1)}
        </div>
      )}
      {focus && (
        <div className="intro mb-2 font-bold xl:text-base sm:text-sm text-xs">
          {focus}
        </div>
      )}
      <ul className="list-disc pl-8 xl:text-base sm:text-sm text-xs">
        {items.map((item: { text: string }, i) => (
          <li key={i} className="m-2">
            {renderBoldText(item.text)}
          </li>
        ))}
      </ul>
    </div>
  );
}