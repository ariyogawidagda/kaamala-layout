"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function RoomTypeSlider() {
  const roomTypes = [
    {
      name: "Suite Forest View",
      text: "Waking up to birdsong in the heart of Ubud’s lush forest is an enchanting moment made for those seeking untamed natural beauty. Your sanctuary opens to a soothing panoramic forest view, best enjoyed from the comfort of private jacuzzi, surrounded by treetop serenity.",
      image: "/rooms/suite-forest.webp",
    },
    {
      name: "Grand Suite with Forest View",
      text: "Unwind in the quiet luxury of an expansive suite that invites you into a serene sanctuary, where soft morning light filters through the treetops and the forest becomes your companion. Soak in your private jacuzzi as the jungle hums around you, a perfect harmony of comfort and wild Ubud beauty.",
      image: "/rooms/grand-suite-forest.webp",
    },
    {
      name: "One Bedroom Villa with Private Pool",
      text: "The One Bedroom Villa with Private Pool at this luxury resort in Ubud is a romantic haven wrapped in natural elegance, featuring wood textures, natural stone, and tropical details overlooking lush jungle. Designed for stillness and connection, it offers a tranquil escape in the heart of Ubud.",
      image: "/rooms/one-bedroom.webp",
    },
    {
      name: "Grand One Bedroom Private Pool Villa with Ricefield View",
      text: "Framed by the golden shimmer of Ubud’s iconic rice fields, this villa is a tranquil haven for couples seeking seclusion and serenity. Infused with tropical Balinese charm, it offers a private pool, open-air elegance, and an intimate connection to the rhythms of nature.",
      image: "/rooms/grand-one.webp",
    },
    {
      name: "Grand 2 Bedroom Private Pool Villa with Ricefield View",
      text: "Embraced by the gentle sway of emerald rice paddies, this tropical haven invites families or groups into a soulful escape where open-air living and Balinese elegance turn every moment into a shared memory.",
      image: "/rooms/grand-two.webp",
    },
    {
      name: "Presidential 2 Bedroom Private Pool Villa with Ricefield View",
      text: "A pinnacle of tropical elegance, this sanctuary blends Balinese design with modern indulgence, featuring panoramic rice field views, a ricefield view jacuzzi, and a private pool for soulful gatherings in nature’s embrace.",
      image: "/rooms/presidential.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // buat ref untuk swiper
  const swiperRef = useRef(null);

  return (
    <section className="relative h-[100vh] max-[560px]:h-[80vh] w-full">
      {/* Background image berubah sesuai item aktif */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${roomTypes[activeIndex].image})`,
        }}
      />
      {/* Overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Konten tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <div className="max-w-[700px] mx-auto space-y-8 mt-[100px]">
          <p className="text-white/90 text-[14px] tracking-[0.5px]">
            {roomTypes[activeIndex].text}
          </p>
          <Link
            href={"#"}
            className="flex gap-[10px] justify-center items-center"
          >
            <p className="text-[14px] text-white/90">Discover More</p>
            <img
              src="arrow.png"
              loading="lazy"
              alt="arrow"
              className="w-[27px] h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Slider teks */}
      <div className="absolute top-[120px] max-[560px]:top-[80px] w-full z-10">
        <div className="container relative">
          <h2 className="text-white text-center mb-10 max-[560px]:mb-5 tracking-[0.5px]">
            Accomodations
          </h2>
          <div className="relative max-w-[1150px] mx-auto px-6 sm:px-10">
            <Swiper
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 40,
                },
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  setActiveIndex(swiper.activeIndex);
                }
              }}
              className="text-white"
            >
              {roomTypes.map((room, idx) => (
                <SwiperSlide key={idx} className=" !h-auto min-[560px]:!w-auto">
                  <h3
                    onClick={() => setActiveIndex(idx)}
                    className={`cursor-pointer transition w-full max-[560px]:max-w-[280px] max-[560px]:ml-[20px] max-[400px]:ml-[10px]  max-[560px]:text-center flex justify-center items-center h-full text-base sm:text-lg md:text-[22px] ${
                      idx === activeIndex
                        ? "opacity-100 font-bold"
                        : "opacity-60"
                    }`}
                  >
                    {room.name}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Panah kiri */}
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="absolute -left-4 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <img
                src="arrow.png"
                alt="prev"
                className="w-5 sm:w-6 md:w-[27px] h-auto rotate-180"
              />
            </button>

            {/* Panah kanan */}
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="absolute -right-4 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <img
                src="arrow.png"
                alt="next"
                className="w-5 sm:w-6 md:w-[27px] h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
