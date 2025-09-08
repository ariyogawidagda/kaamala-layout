import SwiperClient from "./swiperClient";

export default function Gallery() {
  return (
    <>
      <section className="py-[100px] overflow-hidden bg-[#3c5160] max-[560px]:py-[70px]">
        <div className="container relative z-10">
          <h2 className="text-[28px] max-w-[800px] tracking-[0.5px] capitalize leading-[180%] text-white">
            Your Kaamala Journey
          </h2>
          <div>
            <SwiperClient />
          </div>
        </div>
      </section>
    </>
  );
}
