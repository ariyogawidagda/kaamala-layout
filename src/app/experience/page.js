"use client";

import { useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default function KaamalaDinings() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Immersive Experience at Kaamala Resort
            </h1>
          </div>
        </section>

        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <div className="mb-[80px]">
              <p className="text-white/60 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
                Provide a paragraph for beginning about Ubud, whats the nature
                beauty of there, whats the natural destination in Ubud? Mention
                if Kaamala wraps up to invite guest to experience the nature
                beauty destination in Ubud and make it special for guest journey
                experience in Ubud. <br />
                Ubud has long been revered as a sanctuary of healing, not only
                for its timeless traditions but also for its enchanting natural
                beauty in the highlands. From cascading waterfalls and winding
                rivers to emerald forests alive with diverse wildlife, the
                landscape itself feels like a living poem. At Kaamala Resort &
                Spa Ubud, we invite you to embrace this harmony with nature and
                transform your journey into something truly extraordinary.
              </p>
            </div>

            <ul className="text-white/80 flex justify-center tracking-[0.5px] flex-wrap gap-[30px] pb-[20px] border-b-[1px] border-white/20 max-[768px]:text-center max-md:hidden">
              <li>
                <a href="#">Daily Guest Activities</a>
              </li>
              <li>
                <a href="#">Wellness Yoga Class</a>
              </li>
              <li>
                <a href="#">Spiritual Awakening Journey</a>
              </li>
              <li>
                <a href="#">Nature Exploration</a>
              </li>
              <li>
                <a href="#">Private Sunrise Trekking</a>
              </li>
              <li className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-1 cursor-pointer hover:text-white"
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute left-0 mt-2 min-w-[160px] bg-white text-black/80 rounded-sm shadow-lg z-[999]">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Bali Island Tour (Half Day or Full Day Tour)
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Customized Tour
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Bali Twin Lake Jungle Trekking & Canoeing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Silver Making
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Village Trekking
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Ancient Temple Tour
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Cooking Class
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-black/10 border-b border-black/10"
                    >
                      Meet the Healer
                    </a>
                  </div>
                )}
              </li>
            </ul>
            <div className="border-b border-white/20 pb-4 md:border-none">
              <select className=" text-white/80  bg-[#3C5160] tracking-[0.5px] w-full md:hidden ">
                <option className="text-white/80">
                  Daily Guest Activities
                </option>
                <option className="text-white/80">EV Charging Station</option>
                <option className="text-white/80">Wellness Yoga Class</option>
                <option className="text-white/80">
                  Spiritual Awakening Journey
                </option>
                <option className="text-white/80">Nature Exploration</option>
                <option className="text-white/80">
                  Private Sunrise Trekking
                </option>
                <option className="text-white/80">
                  Bali Island Tour (Half Day or Full Day Tour)
                </option>
                <option className="text-white/80">Customized Tour</option>
              </select>
            </div>

            <div>
              <div className="grid grid-cols-12 mt-[40px]  gap-[60px] max-[1024px]:gap-[20px]">
                <div className="col-span-7 max-[1024px]:col-span-12 max-[1024px]:mb-[30px]">
                  <div className="sticky top-[0px]">
                    <div className="relative">
                      <img
                        src="/signature/infinity-pool.webp"
                        alt=""
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Daily Guest Activities
                      </h3>
                      <p className="text-white/60 tracking-[1.2px] leading-[180%] flex-grow">
                        At Kaamala Resort, each day brings a new way to immerse
                        yourself in culture, creativity, and connection. From
                        live cooking shows and Balinese culinary traditions to
                        mocktail and sushi classes, our curated activities are
                        designed to delight the senses. Discover the art of
                        towel folding, craft sacred Canang Sari offerings, or
                        embrace the beauty of language through our “Learn in
                        Bahasa” session. Every experience is thoughtfully
                        created to enrich your journey. <br />
                        Each day at Kaamala Resort & Spa is an invitation to
                        rouse the senses and walk closer with the soul of Bali.
                        From the artistry of noble feasts to the reverent
                        crafting of sacred offerings, every moment is a verse in
                        a living poem. Thus is woven a journey of culture,
                        beauty, and devotion, where thou art both guest and
                        muse.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 space-y-15 max-[1024px]:col-span-12 tracking-[0.5px]">
                  <div>
                    <div className="relative">
                      <img
                        src="/experiences/wellness-yoga.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Wellness Yoga Class
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Unfolds in a serene venue embraced by the lush beauty of
                        Ubud’s forest, offering an atmosphere of calm and
                        renewal. Guided by certified instructors, each session
                        takes you on a curated journey through Yoga Pilates,
                        Vinyasa, and Hatha, designed to restore balance of mind
                        and body.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/experiences/spritual.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Spiritual Awakening Journey
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        This journey is a seamless blend of sacred rituals,
                        mindful movement, and restorative treatments, each
                        crafted to bring balance and renewal. Guided by the
                        wisdom of a Balinese healer, it unfolds as an intimate
                        experience designed to harmonize body, mind, and spirit.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/experiences/nature.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Nature Exploration
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        To revisit the wellspring of life is to return unto
                        Mother Earth, where all things find their rest. In her
                        embrace, thou art grounded, and in the hush of
                        adventure, serenity doth unveil her face.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Private Sunrise Trekking
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Begin thy day in gentle grace, where golden light breaks
                        upon the sacred hills. Let the hush of dawn, the kiss of
                        morning air, and nature’s quiet majesty lead thee to a
                        realm where the sun crowns the earth in splendour.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Bali Island Tour (Half Day or Full Day Tour)
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Unveil the beauty of Bali by walking hand in hand with
                        her natural wonders and the noble soul of her people.
                        Partake in the rhythm of daily life, where earth,
                        culture, and spirit entwine to weave a living poem.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Customized Tour
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Shape your own journey and uncover what is most rare and
                        wondrous in Bali. Discover her beauty through the
                        whisper of forests and the timeless grace of her people,
                        where nature and culture entwine as a living sonnet.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Bali Twin Lake Jungle Trekking & Canoeing
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Trek through lush rainforest trails to breathtaking lake
                        views, then glide peacefully across the water on a
                        traditional canoe.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Silver Making
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Enter the timeless craft of silver, where fire and hand
                        unite in artistry. Guided by a master artisan, thou
                        shalt shape beauty from raw metal, and carry home a
                        treasure wrought by thine own touch.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Village Trekking
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Wander softly through the village lanes, where life
                        flows gently as the paddy breeze. Greet the folk, walk
                        the emerald fields, and let each step weave thee closer
                        to the soul of Bali.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/signature/shutle.png"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Ancient Temple Tour
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Traverse the hallowed path of Bali’s spirit, where the
                        cliffs of Uluwatu whisper to the sea, Tanah Lot rises as
                        a sentinel of the tides, and Taman Ayun blooms in regal
                        grace—a journey through temples where divinity and
                        beauty entwine.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/experiences/cooking.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Cooking Class
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        Immerse yourself in the art of culinary culture as you
                        learn to craft exquisite dishes from the very first
                        step. Guided by professional chefs, premium spices and
                        handpicked ingredients are transformed into masterpieces
                        that delight both the palate and the soul.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src="/experiences/meet-healer.webp"
                        alt=""
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute bg-black/40 inset-0" />
                    </div>
                    <div className="mt-[20px]">
                      <h3 className="text-[22px] leading-[180%] tracking-[0.5px] mb-3 text-white/80">
                        Meet the Healer
                      </h3>
                      <p className="text-white/60  leading-[180%] flex-grow">
                        In the hush of intimacy, thou art welcomed into counsel
                        with a Balinese healer, keeper of ancient wisdom.
                        Thereafter unfolds a sacred rite, where tradition
                        breathes through touch and chant, guiding thee into
                        stillness. Thus is revealed a restorative journey, where
                        body, mind, and spirit are bound once more in harmony’s
                        eternal embrace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
