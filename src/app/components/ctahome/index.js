"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";

export default function CtaOffers() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scaleX: 0.93, transformOrigin: "center center" }, // start dari agak kecil
      {
        scaleX: 1, // penuh lagi
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom", // mulai saat elemen masuk viewport
          end: "top top", // selesai saat nyentuh atas
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="h-[100vh] w-full relative max-[560px]:h-[80vh]">
        <div className="relative" ref={bgRef}>
          <img
            src="/offers-home.webp"
            alt="bg"
            className="object-cover object-center h-[100vh] w-full"
          />
          <div className="bg-black opacity-70 absolute inset-0" />
        </div>
        <div className="absolute inset-0 z-20 w-full">
          <div className="flex justify-center items-center w-full h-full px-[16px]">
            <div className="max-w-[900px] mx-auto text-center space-y-5">
              <h2 className="text-[28px] tracking-[0.5px]  leading-[180%] text-white/80 ">
                Elevate Your Stay with Exclusive Offers
              </h2>
              <p className="text-white/60 text-[14px] tracking-[0.5px]  ">
                Discover curated promos and exclusive offers at Kaamala Resort,
                designed to elevate every moment of your stay. <br />
                From romantic escapes to indulgent experiences, our privileges
                bring you closer to the heart of luxury in Ubud.
              </p>
              <Link
                href={`#`}
                className="flex gap-[10px] justify-center items-center pt-2"
              >
                <p className="text-[14px] text-white/80">Discover More</p>
                <img
                  src={`arrow.png`}
                  loading="lazy"
                  alt="arrow"
                  className="w-[27px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
