import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaStory() {
  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Kaamala Luxury Resort and Spa in Ubud
            </h1>
            <p className="text-white/70 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Like the lotus rising from the water, Kaamala Luxury Resort & Spa
              Ubud by Ini Vie Hospitality embodies purity, renewal, and harmony,
              rooted deeply in Balinese philosophy and tradition. As a luxury
              resort in Ubud, its timeless elegance is carried by heartfelt
              hospitality and expressed through curated experiences in dining,
              wellness, and romance. Sustained by a commitment to
              sustainability, this sanctuary offers every guest a stay that is
              both meaningful and mindful.
            </p>
          </div>
        </section>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              What Makes Kaamala Resort Ubud Special?
            </h2>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
              <div className="relative">
                <img
                  src="/rooms/presidential.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    1. Strategic Location Close to Ubud Central & Sacred Monkey
                    Forest
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Perfectly positioned near Ubud Central and the Sacred Monkey
                    Forest, Kaamala offers effortless access to the island’s
                    most treasured cultural landmark.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    2. Breathtaking Views Close to Nature
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Framed by pristine landscapes, we invite you to savor
                    breathtaking views that blend seamlessly with Ubud’s serene
                    natural surroundings.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    3. Top Notch Hospitality
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    We welcome you as part of this island’s soul, curating
                    meaningful moments and timeless stories throughout your
                    stay.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    4. Sustainability is Our Quiet Luxury
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    We honor the land we stand on and give back through
                    meaningful actions that nurture the earth’s gifts. For us,
                    true luxury is found in harmony with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE MAKE BEYOND ORDINARY */}
        <section className="pb-[100px] max-[560px]:pb-[80px]  ">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize text-white/80 leading-[120%] text-center mb-[60px] max-[560px]:mb-[20px]">
              How We Make Your Stays Beyond the Ordinary
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="bg-transparent shadow-md p-8 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  1. Luxury, Unfolded in Every Stay
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  Every stay is defined by thoughtful details, creating a
                  seamless and elevated luxury experience for our guests.
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-8 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  2. Explore the Nature’s Magic and Timeless Culture
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  We thoughtfully curate each activity and experience to immerse
                  our guests in Bali’s pristine nature and timeless culture.
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-8 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  3. Discover the Journey of Renewal
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  At Kaamala, wellness is not just a ritual, it is a journey of
                  renewal. Inspired by the lotus, our spa and wellness programs
                  guide you into calm and balance.
                </p>
              </div>
              <div className="bg-transparent shadow-lg p-8 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                  4. Stay with Impact
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  Guided by the purity of the lotus, every moment becomes a
                  petal of significance, crafted to inspire and transform.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
