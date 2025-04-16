export default function CardTestimonial({
  text,
  picture,
  name,
  role,
  linkedin,
  company
}: {
  text: string;
  picture: string;
  name: string;
  role: string;
  linkedin: string;
  company: string;
}
) {
  return (
    <div className="testimonial-card w-1/4 px-2">
      <div className="qoute-test text-xs el-highlight p-4 rounded-2xl mb-8 relative h-44">
        <span className="text-5xl text-highlight font-extrabold align-bottom leading-0 mr-2">"</span>
        <p className="inline">{text}</p>
        <span className="text-5xl text-highlight font-extrabold align-bottom leading-0 ml-2">"</span>
        <div className="triangle"></div>
      </div>
      <div className="avatar-client flex flex-col items-center">
        <img src={`/images/${picture}.png`} alt="avatar" className="rounded-full w-40 mb-2" />
        <a href={linkedin} target="_blank" className="name text-xl text-highlight">{name}</a>
        <div className="title text-xs text-gray-400">{role} at <span className="font-bold">{company}</span></div>
      </div>
    </div>
  )
}