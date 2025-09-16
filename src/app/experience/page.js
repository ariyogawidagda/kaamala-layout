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
              Immersive Experience at Kaamala Resort
            </h1>
            <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Ubud has long been revered as a sanctuary of healing, not only for
              its timeless traditions but also for its enchanting natural beauty
              in the highlands. From cascading waterfalls and winding rivers to
              emerald forests alive with diverse wildlife, the landscape itself
              feels like a living poem. At Kaamala Resort & Spa Ubud, we invite
              you to embrace this harmony with nature and transform your journey
              into something truly extraordinary.
            </p>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="text-white/80 flex justify-center gap-[30px] pb-[20px] border-b-[1px] border-white/20 max-[768px]:text-center ">
              <li>
                <a href="#">Daily Guest Activities</a>
              </li>
              <li>
                <a href="#">Wellness Yoga Class</a>
              </li>
              <li>
                <a href="#">Spiritual Awakening Journey</a>
              </li>
            </ul>
            <div>
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
                        Daily Guest Activities
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Every day is an invitation to awaken your senses and
                        connect more deeply with Bali at Kaamala Resort & Spa,
                        through curated experiences. From the artistry of local
                        cuisine to the creation of sacred offerings, you’re
                        guided into moments that weave culture, creativity, and
                        connection into your journey.
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
                        Wellness Yoga Class
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Unfolds in a serene venue embraced by the lush beauty of
                        Ubud’s forest, offering an atmosphere of calm and
                        renewal. Guided by certified instructors, each session
                        takes you on a curated journey through Yoga Pilates,
                        Vinyasa, and Hatha, designed to restore balance of mind
                        and body.
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
                        Spiritual Awakening Journey
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        This journey is a seamless blend of sacred rituals,
                        mindful movement, and restorative treatments, each
                        crafted to bring balance and renewal. Guided by the
                        wisdom of a Balinese healer, it unfolds as an intimate
                        experience designed to harmonize body, mind, and spirit.
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
                        Nature Exploration
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Trek through lush rainforest trails to breathtaking lake
                        views, then glide peacefully across the water on a
                        traditional canoe
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
                        Cooking Class
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Immerse yourself in the art of culinary culture as you
                        learn to craft exquisite dishes from the very first
                        step. Guided by professional chefs, premium spices and
                        handpicked ingredients are transformed into masterpieces
                        that delight both the palate and the soul.
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
                        Meet the Healer
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        A private consultation with a Balinese healer followed
                        by an immersive traditional session offers a deeply
                        restorative journey, harmonizing body, mind, and spirit.
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
