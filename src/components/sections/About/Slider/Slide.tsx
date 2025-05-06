import Image from "next/image";

export default function SlideTestimonial({
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
}) {
  return (
    <div className="testimonial-card h-120">
      <div className="qoute-test text-xs el-highlight p-4 rounded-2xl mb-8 relative xl:h-35 lg:h-48 md:h-52 min-h-38">
        <span className="text-5xl text-highlight font-extrabold align-bottom leading-0 mr-2">"</span>
        <p className="inline">{text}</p>
        <span className="text-5xl text-highlight font-extrabold align-bottom leading-0 ml-2">"</span>
        <div className="triangle"></div>
      </div>
      <div className="avatar-client flex flex-col items-center">
        <Image
          width={160}
          height={164}
          src={`/images/${picture}.webp`}
          alt="avatar"
          className="rounded-full mb-2"
        />
        <a href={linkedin} target="_blank" className="name text-xl text-highlight link">{name}</a>
        <div className="title text-xs text-gray-400">{role} at <span className="font-bold">{company}</span></div>
      </div>
    </div>
  )
}