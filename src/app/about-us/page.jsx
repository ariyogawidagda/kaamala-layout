"use client";
import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaStory() {
  const [activeTab, setActiveTab] = useState("morning");
  const [activeTab1, setActiveTab1] = useState("lotus");

  const tabs = [
    { id: "morning", label: "Morning Rituals" },
    { id: "midday", label: "Midday Rituals" },
    { id: "evening", label: "End of The Day Rituals" },
  ];

  const content = {
    morning: [
      {
        title: "The Offering of Gratitude",
        desc: "Begin your day the Balinese way with canang sari and guided walk.",
      },
      {
        title: "Lotus Flow Pilates",
        desc: "Reconnect with yourself through in-room Pilates with affirmations.",
      },
      {
        title: "The Water of Life x TERRA",
        desc: "Mindful pour from TERRA filter, reducing waste and honoring waters.",
      },
      {
        title: "Lotus Infusion Station",
        desc: "Create your own refreshing lotus-infused drink.",
      },
    ],
    midday: [
      {
        title: "Lotus-Inspired Welcome",
        desc: "Hand cleanse, bamboo music, and aroma mist on arrival.",
      },
      {
        title: "A Sacred Refresh",
        desc: "Chilled aromatic towel wrapped with lotus petal for relaxation.",
      },
      {
        title: "Farewell Ritual",
        desc: "Lotus bracelet or leather keychain blessed for safe return.",
      },
    ],
    evening: [
      {
        title: "Lotus Turndown",
        desc: "Fragrance, gratitude cards, and ornaments for restful night.",
      },
      {
        title: "Sacred Silence",
        desc: "At 9 PM, one minute of stillness to reconnect with spirit.",
      },
      {
        title: "Lotus Lights",
        desc: "Twilight ceremony with floating lotus candles of gratitude.",
      },
    ],
  };

  const tabsContentt = [
    { id: "lotus", label: "The Lotus Essence" },
    { id: "nature", label: "Inspired by Nature" },
  ];
  const tabContent = {
    lotus: [
      {
        title: "Lotus Inspired Eco-Luxury Resort",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni consequuntur quae ducimus, earum unde hic quibusdam omnis nisi in ea.",
      },
      {
        title: "The Lotus Experience: Discover Luxury Multi Experience",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni consequuntur quae ducimus, earum unde hic quibusdam omnis nisi in ea.",
      },
      {
        title: "Meet the Little Friends of the Forest",
        desc: "At Kaamala, we are blessed with visits from our Sacred Neighbors — playful monkeys from the nearby forest. Their presence is a gentle reminder that our resort is part of Ubud’s living ecosystem, where people, nature, and wildlife exist in harmony. With mindful care, we ensure every encounter is safe, respectful, and sustainable, so guests may enjoy these little guardians of the forest as part of Kaamala’s unique charm.",
      },
    ],
    nature: [
      {
        title:
          "Strategic Location Close to Ubud Central & Sacred Monkey Forest",
        desc: "Perfectly positioned near Ubud Central and the Sacred Monkey Forest, Kaamala offers effortless access to the island’s most treasured cultural landmark",
      },
      {
        title: "Top Notch Hospitality",
        desc: "We welcome you as part of this island’s soul, curating meaningful moments and timeless stories throughout your stay.",
      },
      {
        title: "Sustainability is Our Quiet Luxury",
        desc: "We honor the land we stand on and give back through meaningful actions that nurture the earth’s gifts. For us, true luxury is found in harmony with nature.",
      },
      {
        title: "Breathtaking Views Close to Nature",
        desc: "Framed by pristine landscapes, we invite you to savor breathtaking views that blend seamlessly with Ubud’s serene natural surroundings",
      },
    ],
  };

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/aboutus/hero.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              The Story of Kaamala Resort Ubud
            </h1>
            {/* <p className="text-white/70 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              Like the lotus rising from the water, Kaamala Luxury Resort & Spa
              Ubud by Ini Vie Hospitality embodies purity, renewal, and harmony,
              rooted deeply in Balinese philosophy and tradition. As a luxury
              resort in Ubud, its timeless elegance is carried by heartfelt
              hospitality and expressed through curated experiences in dining,
              wellness, and romance. Sustained by a commitment to
              sustainability, this sanctuary offers every guest a stay that is
              both meaningful and mindful.
            </p> */}
          </div>
        </section>

        <div className="pt-[100px] max-w-[1024px] mx-auto text-center px-4">
          <p className="text-white/60  leading-[180%] tracking-[0.5px]">
            Inspired by the lotus, a sacred symbol in Balinese culture,
            Hinduism, and Buddhism, the name Kaamala was born. Derived from the
            Sanskrit word “Kamala,” meaning lotus flower, it reflects not only a
            name but a philosophy that breathes through every detail of this
            luxury resort in Ubud.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-10 max-w-[1024px] mx-auto px-4">
          {[
            {
              title: "Root",
              desc: "The essence of life. Kaamala stands deeply rooted in Balinese culture, embracing philosophy, rituals, and timeless traditions.",
            },
            {
              title: "Stem",
              desc: "A foundation that nurtures growth. Just as the lotus thrives, Kaamala translates its virtues into genuine hospitality.",
            },
            {
              title: "Petals",
              desc: "The beauty experienced by the senses. From dining to wellness and romance, offerings unfold like petals.",
            },
            {
              title: "Water",
              desc: "The source of life and renewal. In harmony with nature, Kaamala sustains and gives back to the world.",
            },
            {
              title: "Soil – The 8 Mantras Foundation",
              desc: "The fertile ground of Kaamala is our 8 Mantras, guiding principles that anchor our vision, inspire our creativity, and nurture authenticity in everything we do",
            },
            {
              title: "Leaves – Community Support",
              desc: "The leaves that surround and protect the bloom represent our people and partners. Kaamala flourishes by uplifting the community and creating shared prosperity.",
            },
          ].map((item, idx) => (
            <div key={idx} className=" p-6 shadow-md space-y-4">
              <h3 className="text-white/80 text-[22px] ">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-[1024px] mx-auto text-center px-4">
          <p className="text-white/60  leading-[180%]">
            From the five lotus pillars of Kaamala’s commitment, your journey
            unfolds as a narrative penned by the soul itself... You are invited
            to savor the essence of every moment, discover deeper meaning in
            togetherness, and let love flourish as you journey forward.
          </p>
        </div>

        {/* WHAT MAKES SPECIAL */}
        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              What Makes Kaamala Resort Ubud Special?
            </h2>
            {/* <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
              <div className="relative">
                <img
                  src="/aboutus/about.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Lotus Inspired Eco-Luxury Resort
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Perfectly positioned near Ubud Central and the Sacred Monkey
                    Forest, Kaamala offers effortless access to the island’s
                    most treasured cultural landmark
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    The Lotus Experience: Discover Luxury Multi Experience
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Framed by pristine landscapes, we invite you to savor
                    breathtaking views that blend seamlessly with Ubud’s serene
                    natural surroundings
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Kaamala Signature Rituals
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Every day at Kaamala unfolds like the lotus — from its roots
                    in gratitude to its bloom in serenity. Our curated rituals
                    guide your journey from morning light to evening calm,
                    turning each moment into something meaningful, restorative,
                    and unforgettable.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Meet the Little Friends of the Forest
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    At Kaamala, we are blessed with visits from our Sacred
                    Neighbors — playful monkeys from the nearby forest. Their
                    presence is a gentle reminder that our resort is part of
                    Ubud’s living ecosystem, where people, nature, and wildlife
                    exist in harmony. With mindful care, we ensure every
                    encounter is safe, respectful, and sustainable, so guests
                    may enjoy these little guardians of the forest as part of
                    Kaamala’s unique charm.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto mt-[80px]">
              <div className="relative">
                <img
                  src="/aboutus/about.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Strategic Location Close to Ubud Central & Sacred Monkey
                    Forest
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Perfectly positioned near Ubud Central and the Sacred Monkey
                    Forest, Kaamala offers effortless access to the island’s
                    most treasured cultural landmark
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Top Notch Hospitality
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    We welcome you as part of this island’s soul, curating
                    meaningful moments and timeless stories throughout your
                    stay.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Sustainability is Our Quiet Luxury
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    We honor the land we stand on and give back through
                    meaningful actions that nurture the earth’s gifts. For us,
                    true luxury is found in harmony with nature.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                    Breathtaking Views Close to Nature
                  </h3>
                  <p className="leading-[180%] tracking-[0.5px] text-white/70">
                    Framed by pristine landscapes, we invite you to savor
                    breathtaking views that blend seamlessly with Ubud’s serene
                    natural surroundings
                  </p>
                </div>
              </div>
            </div> */}
            <div className="mt-[80px]">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
                {/* Left Side: Image */}
                <div className="relative ">
                  <img
                    src="/aboutus/about.webp"
                    alt="Kaamala Resort"
                    className="shadow-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Right Side: Tabs + Content */}
                <div className="space-y-6 max-lg:order-1">
                  <div className="flex gap-4 border-b border-white/20 pb-2">
                    {tabsContentt.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab1(tab.id)}
                        className={`pb-2 text-sm tracking-wide transition-all ${
                          activeTab1 === tab.id
                            ? "text-white border-b-2 border-white"
                            : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {tabContent[activeTab1].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                          {item.title}
                        </h3>
                        <p className="leading-[180%] tracking-[0.5px] text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-[100px]  max-[560px]:pb-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              Kaamala Signature Rituals
            </h2>
            <div className="mt-[80px]">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
                {/* Right Side: Tabs + Content */}
                <div className="space-y-6 max-lg:order-2">
                  {/* Tabs */}
                  <div className="flex gap-4 border-b border-white/20 pb-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 text-sm tracking-wide transition-all ${
                          activeTab === tab.id
                            ? "text-white border-b-2 border-white"
                            : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {content[activeTab].map((item, i) => (
                      <div key={i} className="space-y-3">
                        <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                          {item.title}
                        </h3>
                        <p className="leading-[180%] tracking-[0.5px] text-white/60">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Side: Image */}
                <div className="relative">
                  <img
                    src="/aboutus/about.webp"
                    alt="Rituals"
                    className="shadow-lg w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
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
            <div className="grid md:grid-cols-2 gap-10 max-w-[1024px] mx-auto">
              <div className="bg-transparent shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Luxury, Unfolded in Every Stay
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  Every stay is defined by thoughtful details, creating a
                  seamless and elevated luxury experience for our guests.
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Explore the Nature’s Magic and Timeless Culture
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  We thoughtfully curate each activity and experience to immerse
                  our guests in Bali’s pristine nature and timeless culture.
                </p>
              </div>
              <div className="bg-transparent  shadow-md p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[180%] text-white/80">
                  Discover the Journey of Renewal
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  At Kaamala, wellness is not just a ritual, it is a journey of
                  renewal. Inspired by the lotus, our spa and wellness programs
                  guide you into calm and balance.
                </p>
              </div>
              <div className="bg-transparent shadow-lg p-6 space-y-3">
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80">
                  Stay with Impact
                </h3>
                <p className="leading-[180%] tracking-[0.5px] text-white/70">
                  Guided by the purity of the lotus, every moment becomes a
                  petal of significance, crafted to inspire and transform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  Stories of Warmth, Care, and Connection */}
        <section className="pb-[100px]  max-[560px]:pb-[80px]">
          <div className="container">
            <h2 className="tracking-[0.5px] capitalize leading-[120%] text-center text-white/80 mb-[60px]">
              Stories of Warmth, Care, and Connection
            </h2>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-15 max-[560px]:gap-8 max-w-6xl mx-auto">
              <div className="flex justify-center flex-col space-y-4 max-lg:order-2">
                <p className="text-white/60  leading-[180%]">
                  Upon the sacred land of the Gods, where harmony binds all
                  beings, Kaamala Resort draws its breath. Guided by Sukerta
                  Tata Pawongan, the living essence of Tri Hita Karana, we
                  cherish the noble art of treating every soul as kin, every
                  encounter as a bond of warmth.
                </p>
                <p className="text-white/60  leading-[180%]">
                  To us, our guests are not mere visitors but kindred spirits,
                  honored, cherished, and ever at the heart of our every deed.
                  With the gentle grace of Balinese hospitality, our devoted
                  staffs attend to you with care so personal, it feels as though
                  the world itself has conspired to make you feel treasured.
                </p>
              </div>
              <div className="relative max-lg:order-1">
                <img
                  src="/rooms/presidential.webp"
                  alt="Ubud Nature"
                  className="shadow-lg w-full h-full object-cover"
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
