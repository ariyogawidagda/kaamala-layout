"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Swipers() {
  const swiperRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;

      const totalSlides = swiper.slides.length;

      const slidesPerView = swiper.params.slidesPerView;

      const totalPages = Math.ceil(totalSlides / slidesPerView);

      if (totalPages > 1) {
        setShowNav(true);
      }
    }
  }, []);
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1.2}
        className="container !overflow-visible swiperRooms"
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
          1020: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Link href={"/room"}>
            <div>
              <Image
                src={"/onebdr.webp"}
                alt={"#"}
                width={1080}
                height={1080}
                className="w-full max-[560px]:h-[327px] h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute w-full bottom-10 px-[20px] py-[20px] min-w-767:px-[30px] min-w-767:py-[36px] text-white z-10">
              <h3 className="text-[22px]  tracking-[0.5px] leading-[180%]">
                One Bedroom Villa With Private Pool
              </h3>
            </div>
            <div className="absolute h-[50%] w-full bg-gradient-to-t from-black to-transparent bottom-0 "></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/room"}>
            <div>
              <Image
                src={"/gonebdr.webp"}
                alt={"#"}
                width={1080}
                height={1080}
                className="w-full max-[560px]:h-[327px] h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute w-full bottom-10 px-[20px] py-[20px] min-w-767:px-[30px] min-w-767:py-[36px] text-white z-10">
              <h3 className="text-[22px]  tracking-[0.5px] leading-[180%]">
                Grand One Bedroom Private Pool Villa with Ricefield View
              </h3>
            </div>
            <div className="absolute h-[50%] w-full bg-gradient-to-t from-black to-transparent bottom-0 "></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/room"}>
            <div>
              <Image
                src={"/gtwobdr.webp"}
                alt={"#"}
                width={1080}
                height={1080}
                className="w-full max-[560px]:h-[327px] h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute w-full bottom-10 px-[20px] py-[20px] min-w-767:px-[30px] min-w-767:py-[36px] text-white z-10">
              <h3 className="text-[22px]  tracking-[0.5px] leading-[180%]">
                Grand Two Bedroom Private Pool Villa with Ricefield View
              </h3>
            </div>
            <div className="absolute h-[50%] w-full bg-gradient-to-t from-black to-transparent bottom-0 "></div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/room"}>
            <div>
              <Image
                src={"/gsuite.webp"}
                alt={"#"}
                width={1080}
                height={1080}
                className="w-full max-[560px]:h-[327px] h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute w-full bottom-10 px-[20px] py-[20px] min-w-767:px-[30px] min-w-767:py-[36px] text-white z-10">
              <h3 className="text-[22px]  tracking-[0.5px] leading-[180%]">
                Grand Suite with Forest View
              </h3>
            </div>
            <div className="absolute h-[50%] w-full bg-gradient-to-t from-black to-transparent bottom-0 "></div>
          </Link>
        </SwiperSlide>

        <div className=" absolute bottom-[-70px] w-[130px] left-[50%] translate-x-[-50%] z-20 max-[767px]:hidden">
          <div className="swiper-button-prev  ">
            <div className={`${showNav ? "block" : "hidden"}`}>
              <svg
                width="26"
                height="14"
                viewBox="0 0 26 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.2964 13.8018C6.4086 13.5135 5.99678 11.6421 5.60312 10.6514C5.12797 9.45579 4.64176 8.68094 3.93566 7.99454L3.3281 7.40384L12.4563 7.40385L21.5845 7.40385L21.8098 7.86988C22.2469 8.7741 23.6982 9.16139 24.6051 8.61606C25.303 8.19646 25.6177 7.59406 25.5581 6.79269C25.4937 5.929 25.0555 5.32673 24.2784 5.03408C23.4141 4.70844 22.7913 4.8685 22.0809 5.59852L21.5031 6.19231L12.5394 6.19231L3.57571 6.19231L4.34815 5.39363C5.35647 4.35104 5.99255 3.04634 6.21668 1.56059C6.42512 0.178634 6.37024 -1.67808e-06 5.73716 -1.73342e-06C5.30296 -1.77138e-06 5.25491 0.0366145 5.25287 0.370191C5.2485 1.04596 4.85143 2.61073 4.51045 3.29579C3.87232 4.57786 2.47744 5.67982 0.880547 6.16323C0.000406927 6.42977 -1.24557e-06 6.43017 -1.29003e-06 6.93875L-1.33452e-06 7.44759L0.864583 7.62152C1.89405 7.82856 2.73283 8.28571 3.34503 8.97346C4.14491 9.87175 4.86876 11.6541 5.18175 13.4952C5.26174 13.9658 5.29982 14 5.74344 14C6.03637 14 6.2489 13.9238 6.2964 13.8018ZM24.1751 7.43777C24.9611 6.81863 24.2648 5.67533 23.3056 6.01021C22.6049 6.25477 22.5789 7.32055 23.267 7.5827C23.7342 7.76053 23.7734 7.75427 24.1751 7.43777Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
          <div className="swiper-button-next ">
            <div className={`${showNav ? "block" : "hidden"}`}>
              <svg
                width="26"
                height="14"
                viewBox="0 0 26 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.834 0.198154C19.7218 0.4865 20.1336 2.35792 20.5273 3.34856C21.0025 4.54421 21.4887 5.31906 22.1948 6.00546L22.8023 6.59615H13.6741H4.54594L4.32058 6.13012C3.88352 5.2259 2.43227 4.83861 1.52537 5.38394C0.827454 5.80354 0.512689 6.40594 0.572339 7.20731C0.636766 8.071 1.07493 8.67327 1.85201 8.96592C2.71632 9.29156 3.33916 9.1315 4.0495 8.40148L4.6273 7.80769H13.591H22.5547L21.7823 8.60637C20.774 9.64896 20.1379 10.9537 19.9137 12.4394C19.7053 13.8214 19.7602 14 20.3933 14C20.8275 14 20.8755 13.9634 20.8776 13.6298C20.8819 12.954 21.279 11.3893 21.62 10.7042C22.2581 9.42213 23.653 8.32017 25.2499 7.83677C26.13 7.57023 26.1304 7.56983 26.1304 7.06125V6.5524L25.2659 6.37848C24.2364 6.17144 23.3976 5.71429 22.7854 5.02654C21.9855 4.12825 21.2617 2.34594 20.9487 0.504808C20.8687 0.0341923 20.8306 0 20.387 0C20.0941 0 19.8815 0.0761923 19.834 0.198154ZM1.95532 6.56223C1.16936 7.18137 1.86567 8.32467 2.82481 7.98979C3.52551 7.74523 3.55158 6.67945 2.86338 6.4173C2.39625 6.23947 2.35701 6.24573 1.95532 6.56223Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
