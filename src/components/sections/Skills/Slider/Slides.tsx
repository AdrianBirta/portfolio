import Slide from "@/components/sections/Skills/Slider/Slide";
import TitleSection from "@/components/TitleSection";
import { AlignVerticalCenter02, Code01, Lock01, Server01 } from "@untitled-ui/icons-react";
import { SwiperSlide } from "swiper/react";

const Slides = [
  <SwiperSlide>
    <Slide
      icon={<Code01 className="min-w-14 min-h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="Frontend Web"
          timeline={true}
        />}
      content={<div className="md:text-sm text-xs">Building scalable web applications with <span className="text-highlight">modern technologies like React.js, Next.js</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<AlignVerticalCenter02 className="min-w-14 min-h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="Web App"
          timeline={true}
        />}
      content={<div className="sm:text-sm text-xs">I can turn your best ideas into a <span className="text-highlight">dynamic real-world Web Application</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Server01 className="min-w-14 min-h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          highFirst
          titleHigh="REST & GraphQL"
          timeline={true}
        />}
      content={<div className="sm:text-sm text-xs">Building backend services using <span className="text-highlight">Node.js, Express.js</span>, and <span className="text-highlight">GraphQL</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Code01 className="min-w-14 min-h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="MERN Stack"
          timeline={true}
        />}
      content={<div className="sm:text-sm text-xs">Building full-stack web applications using <span className="text-highlight">MongoDB, Express.js, React.js,</span> and <span className="text-highlight">Node.js</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Lock01 className="min-w-14 min-h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Information"
          titleHigh="Security"
          timeline={true}
        />}
      content={<div className="sm:text-sm text-xs">Security is my middle name.</div>}
    />
  </SwiperSlide>,
]

export default Slides;