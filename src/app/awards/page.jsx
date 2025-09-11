import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaAwards() {
  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%]  max-w-[1024px]  mx-auto text-white/80">
              Our Journey of Excellence Marked by Awards as The Best Resort in
              Bali
            </h1>
            <p className="text-white/70 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              As one of Bali’s most celebrated luxury resorts in Ubud, Bali, we
              are proud of the recognition that Kaamala has earned through
              prestigious awards around the world. We remain dedicated to
              crafting experiences that are as meaningful as they are memorable.
            </p>
          </div>
        </section>

        <section className="py-[100px] max-[560px]:py-[80px]">
          <div className="container ">
            <h2 className="text-[28px] tracking-[0.5px] text-center capitalize leading-[180%] text-white/80">
              Our Awards
            </h2>
            <div className="flex flex-wrap justify-center gap-[60px] max-[560px]:gap-[40px] mt-[40px] max-w-[1280px] mx-auto max-[560px]:mt-[20px]">
              <div className="p-6 py-6 bg-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] tracking-[0.5px] text-white/80 leading-[160%]">
                  Best Luxury Resort 2023
                </h3>
                <p className="text-white/70 italic tracking-[0.5px] mt-3">
                  TripAdvisor
                </p>
              </div>

              <div className="p-6 py-6 bg-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                  Top 10 Honeymoon Destination 2024
                </h3>
                <p className="text-white/70 italic tracking-[0.5px] mt-3">
                  Conde Nast Traveler
                </p>
              </div>

              <div className="p-6 py-6 bg-transparent shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-[768px]:max-w-[300px] w-full flex flex-col justify-between">
                <h3 className="!text-[19px] text-white/80 tracking-[0.5px] leading-[160%]">
                  World Luxury Hotel Awards 2025
                </h3>
                <p className="text-white/70 italic tracking-[0.5px] mt-3">
                  Global Winner
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
