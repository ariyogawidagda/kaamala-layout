import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const rooms = [
    {
      name: "Infinity Pool",
      image: "/habitat.webp",
      desc: "Overlooking the lush jungle and sacred river valley, the infinity pool at Kaamala is a tranquil escape where water meets sky. Guests can unwind in total serenity while soaking in panoramic views that reflect the timeless beauty of Ubud’s greenery.",
      link: "/rooms/luxury-pool-villa",
    },
    {
      name: "EV Charging Station",
      image: "/shichirin.webp",
      desc: "Thoughtfully integrated into the resort, the EV charging station empowers sustainable travel without compromise. Guests driving electric vehicles can explore Bali with ease, knowing their journey is both seamless and environmentally conscious.",
      link: "/rooms/suite-room",
    },
    {
      name: "Shuttle Service",
      image: "/facilities1.webp",
      desc: "Our complimentary shuttle service brings Ubud’s cultural heart closer to you, from exploring local art markets to arriving at a romantic dinner. Designed for comfort and convenience, it ensures every journey is as effortless as your stay.",
      link: "/rooms/family-villa",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Signature Facilities for Elevated Stays
            </h1>
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Designed to enhance every aspect of your stay, Kaamala Resort's
              signature facilities offer more than just convenience, they
              reflect a thoughtful balance of luxury, sustainability, and soul.
              From serene spaces that invite connection to seamless services
              that honor your time, each facility is crafted to elevate your
              Ubud experience in effortless grace.
            </p>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20">
              <li>
                <a href="#">Infinity Pool</a>
              </li>
              <li>
                <a href="#">EV Charging Station</a>
              </li>
              <li>
                <a href="#">Shuttle Service</a>
              </li>
            </ul>
            <div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-13 mt-[40px]">
                {rooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent flex flex-col shadow-md overflow-hidden "
                  >
                    <div className="h-[350px] max-md:h-[225px] overflow-hidden relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>

                    <div className="p-8 max-md:p-5 flex flex-col flex-grow">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        {room.name}
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        {room.desc}
                      </p>
                      <a
                        href={room.link}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/60 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-12 mt-[40px]  gap-[60px] max-[1024px]:gap-[20px]">
                <div className="col-span-8 max-[1204px]:col-span-12 max-[1024px]:mb-[30px]">
                  <div className="sticky top-[100px]">
                    <div className="relative">
                      <img
                        src="/signature/infinity-pool.webp"
                        alt=""
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Infinity Pool
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Overlooking the lush jungle and sacred river valley, the
                        infinity pool at Kaamala is a tranquil escape where
                        water meets sky. Guests can unwind in total serenity
                        while soaking in panoramic views that reflect the
                        timeless beauty of Ubud’s greenery.
                      </p>
                      <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 space-y-15 max-[1024px]:col-span-12">
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/ev-charger.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        EV Charging Station
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Thoughtfully integrated into the resort, the EV charging
                        station empowers sustainable travel without compromise.
                        Guests driving electric vehicles can explore Bali with
                        ease, knowing their journey is both seamless and
                        environmentally conscious.
                      </p>
                      <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Shuttle Service
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Our complimentary shuttle service brings Ubud’s cultural
                        heart closer to you, from exploring local art markets to
                        arriving at a romantic dinner. Designed for comfort and
                        convenience, it ensures every journey is as effortless
                        as your stay.
                      </p>
                      <a
                        href={"#"}
                        className="mt-6 flex items-center gap-[10px] text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        Discover More{" "}
                        <img
                          src={`arrow.png`}
                          loading="lazy"
                          alt="arrow"
                          className="w-[27px] h-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
