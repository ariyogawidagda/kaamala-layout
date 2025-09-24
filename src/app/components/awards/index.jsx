"use client";

import dynamic from "next/dynamic";
const KalendarNew = dynamic(() => import("./kalendar"), {
  ssr: false,
});
import { useInView } from "react-intersection-observer";
export default function Awards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section
        id="section2"
        className="bg-[#3c5160] relative pb-[100px] max-[560px]:pb-[70px] "
      >
        <div ref={ref} className="max-[900px]:hidden pt-[70px]">
          {inView ? <KalendarNew /> : <div style={{ height: 250 }} />}
        </div>
        <div className="h-[120px] max-[560px]:h-[50px]" />

        <div className="container ">
          <div className="">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[180%] text-white/80">
              Kaamala Luxury Resort and Spa in Ubud
            </h1>
          </div>
          <div className="h-[50px] max-[560px]:h-[50px]"></div>
          {/* Deskripsi Resort */}
          <div className="grid grid-cols-2 min-[768px]:mt-[30px] gap-[80px] max-[560px]:gap-[40px]  max-[1024px]:grid-cols-1">
            <div className="relative">
              <img
                src="/homepage/about.webp"
                alt="Luxury Resort Ubud"
                className="w-full h-full object-cover shadow-md "
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="space-y-5 flex flex-col justify-center items-center">
              <h2 className="text-[28px] text-center tracking-[0.5px] capitalize leading-[120%] text-white/80">
                A Lotus-inspired Eco Luxury Resort with Multi Experience
              </h2>
              <p
                className={`leading-[180%] tracking-[0.5px] text-white/60 text-center transition-all duration-300 `}
              >
                Guided by the sacred spirit of the lotus, Kaamala Resort is a
                living tribute to the unity of purity, soulfulness, romance, and
                nature. As the lotus rises unstained from the mud, so too does
                your journey here, where the weight of pain and stress gently
                dissolves into stillness. In the serene heart of Ubud, your
                senses are gracefully reawakened. Cradled by lush tropical
                greenery, our villas and suites mirror the quiet beauty of
                lotus, spaces where stillness breathes, emotions soften, and
                every detail speaks of balance and intention. This is where
                romance becomes sacred, and the soul rediscovers itself, held
                gently in the quiet, unfolding grace of nature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
