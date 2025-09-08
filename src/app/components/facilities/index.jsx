export default function Facilities() {
  return (
    <>
      <section className="bg-[#FAF8F6] pt-[100px] pb-[100px] max-[560px]:py-[70px] max-[560px]:pb-[30px]">
        <div className="container">
          <h2 className="text-[28px] text-center tracking-[0.5px] mb-[40px] capitalize leading-[180%] text-[#1A1A1A]">
            Dinings
          </h2>
          <div className="space-y-[80px] max-lg:space-y-[60px] max-[560px]:space-y-[40px]">
            {/* Habitat Bistro */}
            <div className="grid grid-cols-12 gap-[40px] max-lg:gap-[20px]">
              {/* Image */}
              <div className="col-span-5 max-lg:col-span-12">
                <div className="img-container relative overflow-hidden">
                  <img
                    src={"/habitat.webp"}
                    alt="Habitat Bistro"
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[350px] object-cover object-center"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 max-lg:col-span-12 flex justify-end max-[1024px]:justify-start max-lg:my-[40px]">
                <div className="flex flex-col h-full gap-[24px] max-w-[580px] w-full justify-center px-4 max-lg:px-0">
                  {/* <span
                    className="text-[11px] text-black uppercase tracking-[3.75px]"
                    style={{ fontFamily: "var(--font-arsenal)" }}
                  >
                    OUR RESTAURANT
                  </span> */}
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-[#1A1A1A]">
                    Habitat Bistro
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-[14px] leading-[180%] tracking-[0.5px]">
                    Set within this luxury resort in Ubud Bali, Habitat Bistro
                    offers a soulful dining experience with serene forest views,
                    featuring nourishing local cuisine and refined Italian
                    specialties
                  </p>
                  <div className="mt-[16px]">
                    <a
                      href={"#"}
                      className="px-[22px] py-[12px] bg-[var(--primaryColor)] text-[14px] text-white inline-block"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Shichirin Ubud */}
            <div className="grid grid-cols-12 gap-[40px] max-lg:gap-[20px]">
              {/* Image */}
              <div className="col-span-5 max-lg:col-span-12 order-2 max-lg:order-1">
                <div className="img-container relative overflow-hidden">
                  <img
                    src={"/shichirin.webp"}
                    alt="Shichirin Ubud"
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[350px] object-cover object-center"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 max-lg:col-span-12 flex justify-start order-1 max-lg:order-2 max-lg:my-[40px]">
                <div className="flex flex-col h-full gap-[24px] max-w-[580px] w-full justify-center px-4 max-lg:px-0">
                  {/* <span
                    className="text-[11px] text-black uppercase tracking-[3.75px]"
                    style={{ fontFamily: "var(--font-arsenal)" }}
                  >
                    OUR RESTAURANT
                  </span> */}
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-[#1A1A1A]">
                    Shichirin Ubud
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-[14px] leading-[180%] tracking-[0.5px]">
                    Shichirin Ubud brings the essence of Japanese culinary
                    artistry to life through elegant teppanyaki, expertly
                    prepared sushi, and signature gyukatsu, all within a serene
                    setting where modern refinement meets Balinese soul.
                  </p>
                  <div className="mt-[16px]">
                    <a
                      href={"#"}
                      className="px-[22px] py-[12px] bg-[var(--primaryColor)] text-[14px] text-white inline-block"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Seven Paintings */}
            <div className="grid grid-cols-12 gap-[40px] max-lg:gap-[20px]">
              {/* Image */}
              <div className="col-span-5 max-lg:col-span-12">
                <div className="img-container relative overflow-hidden">
                  <img
                    src={"/facilities1.webp"}
                    alt="Seven Paintings Ubud"
                    loading="lazy"
                    className="w-full h-[550px] max-[560px]:h-[350px] object-cover object-center"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="col-span-7 max-lg:col-span-12 flex justify-end max-[1024px]:justify-start max-lg:my-[40px]">
                <div className="flex flex-col h-full gap-[24px] max-w-[580px] w-full justify-center px-4 max-lg:px-0">
                  {/* <span
                    className="text-[11px] text-black uppercase tracking-[3.75px]"
                    style={{ fontFamily: "var(--font-arsenal)" }}
                  >
                    OUR RESTAURANT
                  </span> */}
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-[#1A1A1A]">
                    Seven Paintings Ubud
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-[14px] leading-[180%] tracking-[0.5px]">
                    Seven emotional journeys unfold in a symphony of flavor and
                    feeling at Seven Paintings Ubud, where each course becomes a
                    canvas and every moment, a performance of art and soul.
                  </p>
                  <div className="mt-[16px]">
                    <a
                      href={"#"}
                      className="px-[22px] py-[12px] bg-[var(--primaryColor)] text-[14px] text-white inline-block"
                    >
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="justify-center mt-[80px] flex max-[560px]:hidden">
            <a
              href={"#"}
              className="bg-[var(--bodyColor)] text-[14px] py-[12px] px-[24px] flex items-center w-fit gap-[10px] border-white border-[1px] text-white capitalize cursor-pointer"
              target="_blank"
            >
              Show All Facilities
              <img src="/arrow.png" alt="arrow" className="w-[25px] h-[14px]" />
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}
