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
    whatsapp?: boolean;
    email?: boolean;
    linkedin?: boolean;
  }
}) {

  const href = descriptionLink?.phone
    ? "tel:+40771322909"
    : descriptionLink?.whatsapp
      ? "https://wa.me/+40771322909"
      : descriptionLink?.linkedin
        ? "https://www.linkedin.com/in/adrianbirta-react-front-end-developer"
        : descriptionLink?.email
          ? "mailto: adrian.birta.dev@gmail.com"
          : ""

  return (
    <div className="interest-card el-highlight flex w-[48%] items-center p-4 rounded-2xl">
      <span className="bg-highlight rounded-full mr-5 p-2 flex items-center justify-center text-gray-100">{icon}</span>
      <div className="interest-content">
        <div className="interest-name font-bold text-xl">{name}</div>
        {
          !descriptionLink ? (
            <div className="interest-description text-md text-gray-400">{description}</div>
          ) : (
            <a className="text-highlight font-bold" href={href}>{description}</a>
          )
        }
      </div>
    </div>
  )
}