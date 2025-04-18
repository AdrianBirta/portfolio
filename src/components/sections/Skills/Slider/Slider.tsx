"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slides from "@/components/sections/Skills/Slider/Slides";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,

      }}
      loop={true}
      speed={1000}
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      mousewheel={true}
      draggable={true}
    >
      {Slides}
    </Swiper>
  )
}