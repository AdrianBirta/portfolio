export default function Slide({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="slide-wrapper w-full bg-light-highlight p-8 mb-20 rounded-2xl h-70 flex flex-col items-center text-center">
      {icon}
      <div className="w-5/6 mb-6">{title}</div>
      {content}
    </div>
  )
}