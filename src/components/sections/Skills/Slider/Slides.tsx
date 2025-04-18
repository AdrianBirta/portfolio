import Slide from "@/components/sections/Skills/Slider/Slide";
import TitleSection from "@/components/TitleSection";
import { AlignVerticalCenter02, Code01, Lock01, Server01, Square } from "@untitled-ui/icons-react";
import { SwiperSlide } from "swiper/react";

const Slides = [
  <SwiperSlide>
    <Slide
      icon={<Code01 className="w-14 h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="Frontend Web"
        />}
      content={<div className="text-sm">Building high-performance, responsive, and scalable web applications with <span className="text-highlight">modern technologies like React.js, Next.js</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<AlignVerticalCenter02 className="w-14 h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="Web App"
        />}
      content={<div className="text-sm">I can turn your best ideas into a <span className="text-highlight">dynamic real-world Web Application</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Server01 className="w-14 h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="REST & GraphQL"
        />}
      content={<div className="text-sm">Building scalable and effiecent backend services using <span className="text-highlight">Node.js, Express.js</span>, and <span className="text-highlight">GraphQL</span>.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Code01 className="w-14 h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Development"
          highFirst
          titleHigh="MERN Stack"
        />}
      content={<div className="text-sm">Building full-stack web applications using <span className="text-highlight">MongoDB, Express.js, React.js,</span> and <span className="text-highlight">Node.js</span> for high-performance, scalable solutions.</div>}
    />
  </SwiperSlide>,
  <SwiperSlide>
    <Slide
      icon={<Lock01 className="w-14 h-14 bg-highlight text-white p-2 rounded-full mb-2" />}
      title={
        <TitleSection
          title="Information"
          titleHigh="Security"
        />}
      content={<div className="text-sm">Security is my middle name.</div>}
    />
  </SwiperSlide>,
]

export default Slides;