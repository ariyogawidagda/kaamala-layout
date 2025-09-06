import Swipers from "./swiper";

export default function Room() {
  return (
    <>
      <section
        id="accomodation"
        className="relative overflow-hidden h-full bg-[#3c5160]"
      >
        <div className="absolute z-[1] w-full h-full ">
          {/* <img
            src={"/bg-room.webp"}
            alt="Hero background"
            loading="lazy"
            className={`object-cover object-center w-full h-full `}
          /> */}
        </div>
        <div className="  py-[160px] max-[560px]:py-[100px] h-full relative z-[10] ">
          <div className="pb-[50px]">
            <h2 className="text-white text-[28px] tracking-[0.5px] text-center leading-[180%]">
              The Award Winning Resort in Bali
            </h2>
          </div>
          <div>
            <Swipers />
          </div>
        </div>
        {/* <div className="absolute w-full z-[2] inset-0 bg-black opacity-45"></div> */}
      </section>
    </>
  );
}
