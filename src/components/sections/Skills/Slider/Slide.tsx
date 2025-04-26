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
    <div className="
      slide-wrapper w-full bg-light-highlight 
      p-8 rounded-2xl 
      flex flex-col items-center text-center
      xl:h-80 sm:h-72 h-72
    ">
      {icon}
      <div className="w-5/6 mb-6">{title}</div>
      {content}
    </div>
  )
}