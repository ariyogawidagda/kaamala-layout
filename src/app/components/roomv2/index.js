"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
      image: "/rooms/onebdr.webp",
    },

    {
      name: "Grand One Bedroom Private Pool Villa with Ricefield View",
      text: "Framed by the golden shimmer of Ubud’s iconic rice fields, this villa is a tranquil haven for couples seeking seclusion and serenity. Infused with tropical Balinese charm, it offers a private pool, open-air elegance, and an intimate connection to the rhythms of nature.",
      image: "/rooms/grand-one-bedroom.webp",
    },
    {
      name: "Grand Two Bedroom Private Pool Villa with Ricefield View",
      text: "Surrounded by the gentle sway of emerald rice paddies, this is a tropical haven crafted for families or groups seeking both connection and privacy. With its open-air living spaces, richly textured interiors, and the serene embrace of Balinese design, it offers a soulful retreat where every sunrise feels sacred and every moment feels shared",
      image: "/rooms/grand-two-bedroom.webp",
    },
    {
      name: "Presidential Two Bedroom Private Pool Villa with Ricefield View",
      text: "Surrounded by the gentle sway of emerald rice paddies, this is a tropical haven crafted for families or groups seeking both connection and privacy. With its open-air living spaces, richly textured interiors, and the serene embrace of Balinese design, it offers a soulful retreat where every sunrise feels sacred and every moment feels shared",
      image: "/rooms/presidential.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[100vh] max-[560px]:h-[80vh] w-full">
      {/* Background image berubah sesuai item aktif */}
      <img
        src={roomTypes[activeIndex].image}
        alt={roomTypes[activeIndex].name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
      />

      {/* Overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/75" />

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
              src={`arrow.png`}
              loading="lazy"
              alt="arrow"
              className="w-[27px] h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Slider teks */}
      <div className="absolute top-[120px] max-[560px]:top-[80px] w-full z-10">
        <div className="container">
          <h2 className="text-white text-center mb-10 max-[560px]:mb-5 tracking-[0.5px]">
            Accomodations
          </h2>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
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
