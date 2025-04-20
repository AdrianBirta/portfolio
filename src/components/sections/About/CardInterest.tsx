export default function CardInterest({
  icon,
  name,
  description,
  descriptionLink
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  descriptionLink?: {
    phone?: boolean;
    email?: boolean;
  }
}) {
  return (
    <div className="interest-card el-highlight flex w-[48%] items-center p-4 rounded-2xl">
      <span className="bg-highlight rounded-full mr-5 p-2 flex items-center justify-center text-gray-100">{icon}</span>
      <div className="interest-content">
        <div className="interest-name font-bold text-xl">{name}</div>

        {
          !descriptionLink ? (
            <div className="interest-description text-md text-gray-400">{description}</div>
          ) : (
            descriptionLink.email && (
              <a className="text-highlight font-bold" href="mailto: adrian.birta.dev@gmail.com">adrian.birta.dev@gmail.com</a>
            ),
            descriptionLink.phone && (
              <a className="text-highlight font-bold" href="tel: +40771322909">+40 771 322 909</a>
            )
          )
        }
      </div>
    </div>
  )
}