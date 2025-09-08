"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
export default function Media() {
  const data = [
    "/media/1.png",
    "/media/2.png",
    "/media/3.png",
    "/media/4.png",
    "/media/5.png",
    "/media/6.png",
    "/media/7.png",
    "/media/8.png",
    "/media/9.png",
    "/media/10.png",
    "/media/11.png",
  ];
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
                  src={item}
                  className="w-full max-[560px]:h-[180px] h-auto duration-500 ease-in-out object-cover  hover:scale-105"
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
