"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
export default function Media() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={10}
        breakpoints={{
          370: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="!static"
      >
        <div>
          {data.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="overflow-hidden flex h-full items-center">
                <img
                  src={item.logo}
                  className="w-full h-auto duration-500 ease-in-out object-cover  hover:scale-105"
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
