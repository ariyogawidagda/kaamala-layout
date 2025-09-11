import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function KaamalaMantras() {
  const mantras = [
    {
      number: "01",
      title: "Empowering Local People",
      desc: "We grow with the people around us — hiring local talents, collaborating with local communities, and letting their spirit shape every guest experience.",
    },
    {
      number: "02",
      title: "Respect Local Culture",
      desc: "Each brand lives in harmony with its location. We respect local values, adapt with intention, and honor the traditions that shape how we serve.",
    },
    {
      number: "03",
      title: "Responsible to Mother Earth",
      desc: "Nature is not a resource — she’s a partner. We design in balance with the land and take real actions to protect and regenerate what we touch.",
    },
    {
      number: "04",
      title: "Intentional Personalization",
      desc: "Every guest is seen, heard, and remembered — through thoughtful details that feel human and intentional.",
    },
    {
      number: "05",
      title: "Technology Adaptation",
      desc: "Technology is a tool, not the hero. We apply tech to enhance clarity, comfort, and emotional connection — never at the cost of human touch.",
    },
    {
      number: "06",
      title: "Meaningful Story Telling",
      desc: "From scent to sound, from welcome to farewell — every step in the guest journey is part of a narrative designed to feel meaningful and memorable.",
    },
    {
      number: "07",
      title: "Sustainability Impact",
      desc: "We take action that lasts. Our commitment to sustainability is grounded in visible results — for people, nature, and future generations.",
    },
    {
      number: "08",
      title: "Pioneer Concept",
      desc: "We don’t play safe — we pioneer. Every concept is an opportunity to build what’s never been done before, led by imagination, courage, and purpose.",
    },
  ];

  const firstGroup = mantras.slice(0, 4);
  const secondGroup = mantras.slice(4, 8);

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Ini Vie 8 Mantras
            </h1>
          </div>
        </section>

        {/* MANTRAS SECTION */}
        <section className="py-[100px] max-[560px]:py-[80px] space-y-[120px]">
          <div className="container">
            {/* FIRST BLOCK - Left Image, Right Text */}
            <div className="grid md:grid-cols-2 gap-[60px] items-center max-[560px]:gap-[40px]">
              {/* Image kiri */}
              <div className="relative w-full h-full  shadow-lg">
                <img
                  src="/rooms/suite-forest.webp"
                  alt="Suite Forest"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Text kanan */}
              <div className="grid gap-[40px]">
                {firstGroup.map((item) => (
                  <div
                    key={item.number}
                    className="flex flex-col justify-center items-center md:items-start space-y-4"
                  >
                    <span className="text-[30px]  font-serif text-white/50">
                      {item.number}
                    </span>
                    <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="leading-[180%] tracking-[0.5px] text-white/70 text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECOND BLOCK - Right Image, Left Text */}
            <div className="grid md:grid-cols-2 gap-[60px] items-center mt-[80px] max-[560px]:mt-[60px] max-[560px]:gap-[40px]">
              {/* Text kiri */}
              <div className="order-2 md:order-1 grid gap-[40px]">
                {secondGroup.map((item) => (
                  <div
                    key={item.number}
                    className="flex flex-col justify-center items-center md:items-start space-y-4"
                  >
                    <span className="text-[30px] font-serif text-white/50">
                      {item.number}
                    </span>
                    <h3 className="text-[22px]  tracking-[0.5px] capitalize leading-[120%] text-white/80 text-center md:text-left">
                      {item.title}
                    </h3>
                    <p className="leading-[180%] tracking-[0.5px] text-white/70 text-center md:text-left">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Image kanan */}
              <div className="order-1 md:order-2 relative w-full h-full  overflow-hidden shadow-lg">
                <img
                  src="/rooms/suite-forest.webp"
                  alt="Suite Forest"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
