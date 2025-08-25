import Awards from "./components/awards";
import Facilities from "./components/facilities";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Hero from "./components/hero";
import Offers from "./components/offers";
import Room from "./components/rooom";
import SectionBookM from "./components/sectionbook";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Awards />
      <section className="bg-[#FAF8F6] pb-[160px] max-[560px]:pb-[100px]">
        <div className="container text-center">
          <h2 className="text-[28px] tracking-[0.5px] capitalize leading-[180%] text-[#1A1A1A]">
            Our Awards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] mt-[60px]">
            <div className="p-6 py-10 bg-white space-y-3 border border-[#E6E2DF] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-[22px] tracking-[0.5px] text-[#1A1A1A] leading-[180%]">
                Best Luxury Resort 2023
              </h3>
              <p className="text-[#1A1A1A]/70 italic tracking-[0.5px]">
                TripAdvisor
              </p>
            </div>

            <div className="p-6 py-10 bg-white space-y-3 border border-[#E6E2DF] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-[22px]  text-[#1A1A1A] tracking-[0.5px] leading-[180%]">
                Top 10 Honeymoon Destination 2024
              </h3>
              <p className="text-[#1A1A1A]/70 italic tracking-[0.5px]">
                Conde Nast Traveler
              </p>
            </div>

            <div className="p-6 py-10 bg-white space-y-3 border border-[#E6E2DF] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-[22px]  text-[#1A1A1A] tracking-[0.5px] leading-[180%]">
                World Luxury Hotel Awards 2025
              </h3>
              <p className="text-[#1A1A1A]/70 italic tracking-[0.5px]">
                Global Winner
              </p>
            </div>
          </div>
        </div>
      </section>
      <Room />
      <Facilities />
      <Offers />
      <section className="relative">
        <div className="background-test absolute w-full bottom-0"></div>
        <Gallery />
      </section>
      <Footer />
      <SectionBookM />
    </>
  );
}
