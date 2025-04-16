export default function CardInterest({
  icon,
  name,
  description
}: {
  icon: React.ReactNode;
  name: string;
  description: string
}) {
  return (
    <div className="interest-card el-highlight flex w-[48%] items-center p-4 rounded-2xl">
      <span className="bg-highlight rounded-full mr-5 p-2 flex items-center justify-center text-gray-100">{icon}</span>
      <div className="interest-content">
        <div className="interest-name font-bold text-xl">{name}</div>
        <div className="interest-description text-md text-gray-400">{description}</div>
      </div>
    </div>
  )
}