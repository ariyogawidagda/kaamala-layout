"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function SwiperClient() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        className=" !overflow-visible mt-[60px] max-[560px]:mt-[40px]"
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="cursor-pointer">
            <Image
              src={`/gallery-1.webp`}
              alt="Gambar Responsif"
              className="w-full h-[327px] min-w-767:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <Image
              src={`/gallery-2.webp`}
              alt="Gambar Responsif"
              className="w-full h-[327px] min-w-767:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <Image
              src={`/gallery-3.webp`}
              alt="Gambar Responsif"
              className="w-full h-[327px] min-w-767:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <Image
              src={`/gallery-4.webp`}
              alt="Gambar Responsif"
              className="w-full h-[327px] min-w-767:h-[358px] object-cover object-center"
              width={1080}
              height={1080}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
