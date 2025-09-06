"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function RoomTypeSlider() {
  const roomTypes = [
    {
      name: "One Bedroom Villa with Private Pool",
      image: "/onebdr.webp",
    },
    {
      name: "Suite Forest View",
      image: "/rooms/forest-view.jpg",
    },
    {
      name: "Grand Suite with Forest View",
      image: "/rooms/forest-view.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[100vh] max-[560px]:h-[80vh] w-full">
      {/* Background image berubah sesuai item aktif */}
      <img
        src={roomTypes[activeIndex].image}
        alt={roomTypes[activeIndex].name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/60" />

      {/* <div className="absolute "></div> */}

      {/* Slider teks */}
      <div className="absolute top-[120px] max-[560px]:top-[80px] w-full z-10">
        <div className="container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={60}
            className="text-white"
          >
            {roomTypes.map((room, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <h3
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer transition text-[22px] ${
                    idx === activeIndex ? "opacity-100 font-bold" : "opacity-60"
                  }`}
                >
                  {room.name}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
