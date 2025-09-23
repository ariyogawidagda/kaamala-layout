import Awards from "./components/awards";
import CtaOffers from "./components/ctahome";
import Facilities from "./components/facilities";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Media from "./components/media";
import Offers from "./components/offers";
import GuestReviews from "./components/review";
import RoomV2 from "./components/roomv2";
import Room from "./components/rooom";
import SectionBookM from "./components/sectionbook";
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#3c5160]">
        <Hero />
        <Awards />
        <section className="bg-[#3c5160] pb-[120px] max-[560px]:pb-[80px]">
          <div className="container text-center">
            <h2 className="text-[28px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
              Our Awards
            </h2>

            <div className="flex flex-wrap justify-center gap-[60px] max-[560px]:gap-[40px] mt-[40px] max-w-[1280px] mx-auto">
              <div className="p-6 py-6 bg-transparent  shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] tracking-[0.5px] text-white/80 leading-[160%]">
                  Best Luxury Resort 2023
                </h3>
                <p className="text-white/60 italic tracking-[0.5px] mt-3">
                  TripAdvisor
                </p>
              </div>

              <div className="p-6 py-6 bg-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                  Top 10 Honeymoon Destination 2024
                </h3>
                <p className="text-white/60 italic tracking-[0.5px] mt-3">
                  Conde Nast Traveler
                </p>
              </div>

              <div className="p-6 py-6 bg-transparent  shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                  World Luxury Hotel Awards 2025
                </h3>
                <p className="text-white/60 italic tracking-[0.5px] mt-3">
                  Global Winner
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <Room /> */}
        <RoomV2 />
        <Facilities />
        <Offers />
        <CtaOffers />
        <section className="relative">
          <Gallery />
        </section>
        <section>
          <GuestReviews />
        </section>
        <section className="bg-[#3c5160] pb-[100px] max-[560px]:pb-[80px]">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-[28px] tracking-[0.5px] text-center capitalize leading-[180%] text-white/80 mb-[20px]">
              Featured On
            </h2>
            <Media />
          </div>
        </section>
      </main>
      <Footer />
      <SectionBookM />
    </>
  );
}
