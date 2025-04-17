export default function SubtitleSmall({
  icon,
  text
}: {
  icon?: React.ReactNode;
  text: string;
}) {
  return (
    <div className="text-md text-gray-400 p-2 flex items-center">
      {icon && icon} {text}
    </div>
  )
}