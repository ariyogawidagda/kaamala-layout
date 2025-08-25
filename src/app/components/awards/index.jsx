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
        className="bg-[#FAF8F6] relative pb-[160px] max-[560px]:pb-[100px] "
      >
        <div ref={ref} className="max-[900px]:hidden pt-[110px]">
          {inView ? <KalendarNew /> : <div style={{ height: 250 }} />}
        </div>
        <div className="h-[180px] max-[560px]:h-[100px]" />

        <div className="container ">
          <div className="">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[180%] text-[#1A1A1A]">
              Luxury Experience to Remember
            </h1>
          </div>
          <div className="flex justify-center items-center my-[60px] space-x-2">
            <div className="w-[40px] h-[1px] bg-[#D4AF37]"></div>
            <div className="w-[6px] h-[6px] bg-[#D4AF37] rounded-full"></div>
            <div className="w-[40px] h-[1px] bg-[#D4AF37]"></div>
          </div>
          {/* Deskripsi Resort */}
          <div className="grid grid-cols-2 mt-[30px] gap-[40px] max-[560px]:grid-cols-1">
            <div className="space-y-4 text-center">
              {/* <h2 className="text-[28px] tracking-[0.5px] capitalize leading-[120%] text-[#1A1A1A]">
                Kaamala Resort Ubud is one of the best resort for relaxing
                retreat
              </h2> */}
              <p className="leading-[180%] tracking-[0.5px] text-[#1A1A1A]/70">
                Kaamala Resort Ubud, an Ubud 5-star resort, is nestled among
                lush rice fields and tropical forests, offering an exclusive
                blend of luxury and nature. This serene retreat provides
                unparalleled tranquility and romantic comfort, enhanced by
                world-class facilities designed for an unforgettable stay in the
                heart of Bali.
              </p>
            </div>
            <div className="space-y-4 text-center">
              {/* <h2 className="text-[28px] tracking-[0.5px] capitalize leading-[120%] text-[#1A1A1A]">
                Kaamala Resort Ubud is One of the Best Resort for Relaxing
                Retreat
              </h2> */}
              <p className="leading-[180%] tracking-[0.5px] text-[#1A1A1A]/70">
                Our commitment is to make your honeymoon and holiday dreams a
                reality, offering an oasis of serenity at a premier luxury
                resort Ubud. Immerse yourself in more than just a stay—discover
                a refined lifestyle with exceptional culinary delights,
                world-class rejuvenation, and unparalleled tranquility amidst
                Bali’s lush beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
