import Link from "next/link";
export default function Offers() {
  return (
    <>
      <section className=" bg-[#FAF8F6] pb-[160px] max-[560px]:pb-[100px]">
        <div className="container">
          <div className="max-w-[600px]  mx-auto space-y-6">
            <h2 className="text-[28px] text-center tracking-[0.5px] capitalize leading-[180%] text-[#1A1A1A]">
              Explore our exclusive stay packages and offers
            </h2>
            <p className="text-[#1A1A1A]/70 leading-[180%] text-center tracking-[0.5px]">
              Enhance your experience with one of our package deals, allowing
              you to enjoy more of Kaamala Resort at an exclusive promotional
              rate.
            </p>
          </div>
          <div className=" grid grid-cols-12 gap-[40px] max-[560px]:mt-[40px] mt-[90px] max-[560px]:gap-[20px] max-[560px]:space-y-[40px]">
            <div className="relative col-span-4 max-lg:col-span-12">
              <div className="">
                <img
                  src={"/offers-1.webp"}
                  alt="Gambar Responsif"
                  loading="lazy"
                  className="w-full h-[550px] max-[560px]:h-[450px] object-cover object-center"
                />
              </div>
              <div
                className="absolute inset-0 w-full h-full z-10  "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)",
                }}
              ></div>
              <div className="absolute w-[80%]  text-center top-[50%] left-[50%] translate-x-[-50%] z-20">
                <h3 className="text-[22px]  text-white tracking-[0.5px] leading-[120%]">
                  Special Offers
                </h3>
              </div>
              <div className="absolute bottom-[60px] left-[50%] translate-x-[-50%] z-20">
                <Link href={`#`} className="flex gap-[10px] items-center">
                  <p className="text-[14px] text-white">Learn More</p>
                  <img
                    src={`arrow.png`}
                    loading="lazy"
                    alt="arrow"
                    className="w-[27px] h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative col-span-4 max-lg:col-span-12">
              <div className="">
                <img
                  src={"/offers-2.webp"}
                  alt="Gambar Responsif"
                  loading="lazy"
                  className="w-full h-[550px] max-[560px]:h-[450px] object-cover object-center"
                />
              </div>
              <div
                className="absolute inset-0 w-full h-full z-10  "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)",
                }}
              ></div>
              <div className="absolute w-[80%]  text-center top-[50%] left-[50%] translate-x-[-50%] z-20">
                <h3 className="text-[22px]  text-white tracking-[0.5px] leading-[120%]">
                  Romantic Surprise
                </h3>
              </div>
              <div className="absolute bottom-[60px] left-[50%] translate-x-[-50%] z-20">
                <Link href={`#`} className="flex gap-[10px] items-center">
                  <p className="text-[14px] text-white">Learn More</p>
                  <img
                    src={`arrow.png`}
                    loading="lazy"
                    alt="arrow"
                    className="w-[27px] h-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative col-span-4 max-lg:col-span-12">
              <div className="">
                <img
                  src={"/offers-3.webp"}
                  alt="Gambar Responsif"
                  loading="lazy"
                  className="w-full h-[550px] max-[560px]:h-[450px] object-cover object-center"
                />
              </div>
              <div
                className="absolute inset-0 w-full h-full z-10  "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)",
                }}
              ></div>
              <div className="absolute w-[80%]  text-center top-[50%] left-[50%] translate-x-[-50%] z-20">
                <h3 className="text-[22px]  text-white tracking-[0.5px] leading-[120%]">
                  Stay Experience
                </h3>
              </div>
              <div className="absolute bottom-[60px] left-[50%] translate-x-[-50%] z-20">
                <Link href={`#`} className="flex gap-[10px] items-center">
                  <p className="text-[14px] text-white">Learn More</p>
                  <img
                    src={`arrow.png`}
                    loading="lazy"
                    alt="arrow"
                    className="w-[27px] h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
