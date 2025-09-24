import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Romantic Moments & Surprises at Kaamala Resort
            </h1>
          </div>
        </section>

        <section className="container">
          <div className="mt-[80px]">
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Just as the lotus rises with quiet grace from still waters, love
              flourishes at Kaamala through curated experiences and intimate
              moments that awaken the heart. Celebrate romance in its most
              unforgettable form at this Ubud luxury resort, where every detail
              is thoughtfully crafted to turn fleeting moments into lasting
              memories. <br />
              Kaamala offers deeply personal service, curated surprises, and
              delicate touches that elevate every moment with meaning. Within an
              ambiance steeped in soulful intimacy, it becomes a sanctuary where
              couples can honor their journey and fall in love all over again.
            </p>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[80px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20 max-[560px]:text-center">
              <li>
                <a href="#">Hot Tub Breakfast</a>
              </li>
              <li>
                <a href="#">Flower Decorations</a>
              </li>
              <li>
                <a href="#">Candle Light Dinner</a>
              </li>
            </ul>
            <div className="mt-[40px] space-y-15">
              <div className="grid grid-cols-12  bg-white/5">
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/rooms/presidential.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12  p-5">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px]  leading-[120%]  text-white/80">
                      Hot Tub Breakfast
                    </h2>
                    <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] ">
                      One of Kaamala Resort’s most coveted romantic experiences
                      begins with a private hot tub breakfast in our special
                      room, where jungle views, morning sunlight, and floating
                      trays create a setting of relaxing serenity. It's an
                      intimate ritual for couples to start the day surrounded by
                      warmth, nature, and love.
                    </p>
                  </div>
                  {/* <div className="pb-2">
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
                  </div> */}
                </div>
              </div>
              <div className="grid grid-cols-12  bg-white/5">
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12  p-5 max-[1024px]:order-2">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px]  leading-[120%]  text-white/80">
                      Flower Decorations
                    </h2>
                    <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] ">
                      Flower decoration at Kaamala is thoughtfully designed to
                      transform your suite or villa into a blooming sanctuary of
                      love. From heart-shaped petals on the bed to full floral
                      pools, every arrangement is handcrafted to surprise,
                      delight, and mark the beauty of your shared moments.
                    </p>
                  </div>
                  {/* <div className="pb-2">
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
                  </div> */}
                </div>
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/rooms/presidential.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12  bg-white/5">
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/rooms/presidential.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </div>
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12  p-5">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px]  leading-[120%]  text-white/80">
                      Candle Light Dinner
                    </h2>
                    <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] ">
                      Romantic dinners at Kaamala come alive in two enchanting
                      settings: within the privacy of your villa or enchanting
                      Italian dinner experience at Habitat Bistro, overlooking
                      the lush forest. With soft lighting, curated menus, and
                      serene ambiance, every candlelit meal becomes a timeless
                      expression of love.
                    </p>
                  </div>
                  {/* <div className="pb-2">
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
                  </div> */}
                </div>
              </div>
              <div className="grid grid-cols-12  bg-white/5">
                <div className="col-span-5 flex justify-between flex-col max-[1024px]:col-span-12  p-5 max-[1024px]:order-2">
                  <div className="space-y-4">
                    <h2 className="text-[28px] tracking-[0.5px]  leading-[120%]  text-white/80">
                      Romantic Wedding Proposal
                    </h2>
                    <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] ">
                      Proposing at Kaamala Resort is more than a moment, it’s a
                      story destined to be cherished for a lifetime. With
                      curated settings that are private, intimate, and deeply
                      romantic, from your villa and private pool to a secluded
                      garden, Kaamala transforms your proposal into a
                      breathtaking celebration of love and lasting commitment.
                    </p>
                  </div>
                  {/* <div className="pb-2">
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
                  </div> */}
                </div>
                <div className="col-span-7 max-[1024px]:col-span-12">
                  <div className="relative">
                    <img
                      src="/rooms/presidential.webp"
                      alt="tes"
                      className="w-full max-h-[550px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
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
