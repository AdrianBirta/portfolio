import SlideTestimonial from "@/components/sections/About/Slider/Slide";
import { SwiperSlide } from "swiper/react";

const Slides = [
  <SwiperSlide>
    <SlideTestimonial
      text={"Based on very few designs and prior business knowledge Adrian managed to idenpendently create an impressive flow of business functions, mirroring our front-end websites. Adrian worked methodically and managed his own workloads well within a wider team. Would recommend!"}
      picture={"person-1"}
      name={"Dean Hodson"}
      role={"Digital Product Owner"}
      linkedin={"https://www.linkedin.com/in/dean-hodson-925a0bb1/"}
      company={"Safety Shield Global"}
    />
  </SwiperSlide>,

  <SwiperSlide>
    <SlideTestimonial
      text={"Adrian Birta is an excellent communicator, analytical and a team player. He is an asset to any technical team and capable of taking the lead to shape a product and process. I highly recommend Adrian Birta, he will be a valuable asset to any company."}
      picture={"person-2"}
      name={"Giridhar S R"}
      role={"Project Manager"}
      linkedin={"https://www.linkedin.com/in/giridhar-s-r-82564137/"}
      company={"Persistent Systems"}
    />
  </SwiperSlide>,

  <SwiperSlide>
    <SlideTestimonial
      text={"Adrian showcased exceptional technical proficiency in ReactJS and demonstrated a remarkable ability to adapt to various challenges. His problem-solving skills and innovative approach significantly impacted the successful delivery of our projects."}
      picture={"person-3"}
      name={"Alexa Alexandru"}
      role={"Senior Software Engineer"}
      linkedin={"https://www.linkedin.com/in/alexa-alexandru-17a960172/"}
      company={"Amdaris"}
    />
  </SwiperSlide>,

  <SwiperSlide>
    <SlideTestimonial
      text={"I really enjoyed working with Adrian on a challenging React and MapBox complex project. His frontend expertise was invaluable - especially when it came to geospatial data visualization and performance optimization. He has a knack for turning complex technical challenges into clean, user-friendly solutions."}
      picture={"person-4"}
      name={"Antonia Carmazan"}
      role={"Senior React Developer"}
      linkedin={"https://www.linkedin.com/in/antonia-carmazan-18b693162/"}
      company={"Modu"}
    />
  </SwiperSlide>,

  <SwiperSlide>
    <SlideTestimonial
      text={"What I appreciate about Adrian is his proactive attitude. He doesn’t just tick boxes, he thinks about the bigger picture, how users interact with the product, and how to make things better for the long term. He’s collaborative, easy to communicate with, and always brings a positive, professional approach."}
      picture={"person-5"}
      name={"Krishnakant Kumar"}
      role={"Global Recruitment Lead"}
      linkedin={"https://www.linkedin.com/in/therecruitersradar/"}
      company={"Axiom Software Solutions"}
    />
  </SwiperSlide>,
]

export default Slides;