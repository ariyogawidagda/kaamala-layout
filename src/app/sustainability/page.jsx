import Header from "../components/header";
import Footer from "../components/footer";
import SustainabilityTabs from "../components/sustainabilitytabs";

export default function KaamalaSustainability() {
  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Our Commitments in Sustainability & Eco-Friendly Tourism
            </h1>
          </div>
        </section>
        <div className="mt-[80px]">
          <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
            For us, sustainability is not an added feature, it is the foundation
            of what we call conscious luxury. Every guest who stays at our Ubud
            luxury resort, contributes to a greener, more mindful future. Here,
            every moment of indulgence becomes an act of preservation.
          </p>
        </div>
        {/* <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <div className="grid grid-cols-2 gap-[40px] max-[1024px]:grid-cols-1">
              <div className="relative">
                <img
                  src="/sustainability/sustainability.webp"
                  alt="te"
                  className="w-full h-full object-cover"
                />
                <div className="bg-black/40 absolute inset-0" />
              </div>
              <div className="space-y-4">
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%]  max-w-[1024px] mx-auto">
                  At Kaamala, we believe that true luxury is inseparable from
                  responsibility. Just as the lotus rises pure and radiant from
                  its waters, our philosophy is to bloom beautifully while
                  honoring the source that sustains us. Every element of your
                  stay—our architecture, dining, spa rituals, and curated
                  experiences—has been designed with care for Bali’s land,
                  water, and community.
                </p>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%]  max-w-[1024px] mx-auto">
                  From mindful resource management to cultural preservation and
                  community empowerment, Kaamala is committed to creating
                  moments of serenity that also safeguard the island’s future.
                </p>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%]  max-w-[1024px] mx-auto">
                  Your journey with us is not only one of renewal and romance,
                  but also one of impact—each stay a promise to live gently, and
                  to leave Bali more beautiful than you found it.
                </p>
                <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%]  max-w-[1024px] mx-auto">
                  Discover more about our sustainability commitments and
                  initiatives at{" "}
                  <a
                    className="font-semibold"
                    href="https://inivie.com/sustainability"
                  >
                    inivie.com/sustainability
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <SustainabilityTabs />
      </main>
      <Footer />
    </>
  );
}
