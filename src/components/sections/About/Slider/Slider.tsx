"use client"

import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slides from "@/components/sections/About/Slider/Slides";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 24 },
        640: { slidesPerView: 1, spaceBetween: 24 },
        768: { slidesPerView: 2, spaceBetween: 32 },
        1024: { slidesPerView: 2, spaceBetween: 40 },
        1280: { slidesPerView: 3, spaceBetween: 40 },
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,

      }}
      loop={Slides.length < 4}
      speed={1000}
      spaceBetween={30}
      slidesPerView={2}
      grabCursor={true}
      mousewheel={true}
      draggable={true}
    >
      {Slides}
    </Swiper>
  )
}