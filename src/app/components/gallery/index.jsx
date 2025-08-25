import SwiperClient from "./swiperClient";

export default function Gallery() {
  return (
    <>
      <section className="pb-[160px] overflow-hidden bg-[#FAF8F6] max-[560px]:pb-[100px]">
        <div className="container relative z-10">
          <h2 className="text-[28px] max-w-[800px] tracking-[0.5px] capitalize leading-[180%] text-[#1A1A1A]">
            Reimagined into a relaxing retreat, blending modern luxury with
            traditional Indonesian elegance
          </h2>
          <div>
            <SwiperClient />
          </div>
        </div>
      </section>
    </>
  );
}
