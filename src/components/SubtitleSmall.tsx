export default function SubtitleSmall({
  icon,
  text,
  className
}: {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div className={`text-md text-gray-400 p-2 flex flex-wrap items-center ${className}`}>
      {icon && icon} {text}
    </div>
  )
}