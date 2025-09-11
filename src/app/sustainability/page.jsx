"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
export default function KaamalaSustainability() {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const openPopup = (src) => {
    setImageSrc(src);
    setShow(true);
  };

  const Popup = () => {
    if (!show || !imageSrc) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="relative w-[90%] max-w-xl  overflow-hidden shadow-lg">
          {/* Tombol Close */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-3 right-3 z-10  p-1  text-black text-[22px] cursor-pointer"
          >
            X{/* <FiX className="w-5 h-5" /> */}
          </button>

          {/* Gambar Banner */}
          <img
            src={imageSrc}
            alt="Popup Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />

      <main className="bg-[#3c5160]">
        {/* HERO SECTION */}
        <section className="relative h-[80vh] flex items-end justify-center bg-[url('/rooms/suite-forest.webp')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-[80px] container space-y-4">
            <h1 className="text-[36px] tracking-[0.5px] text-center leading-[120%] max-w-[1024px] mx-auto text-white/80">
              Our Commitments in Sustainability & Eco-Friendly Tourism
            </h1>
            <p className="text-white/70 text-[14px] tracking-[0.5px] leading-[180%] text-center max-w-[1024px] mx-auto">
              For us, sustainability is not an added feature, it is the
              foundation of what we call conscious luxury. Every guest who stays
              at our Ubud luxury resort, contributes to a greener, more mindful
              future. Here, every moment of indulgence becomes an act of
              preservation.
            </p>
          </div>
        </section>

        <section className="py-[100px]  max-[560px]:py-[80px]">
          <div className="container">
            <ul className="space-y-8 ">
              <li>
                <button
                  className="text-white/80 text-[22px] leading-[120%] underline cursor-pointer text-start"
                  onClick={() =>
                    openPopup("/sustainability/green-purchasing.webp")
                  }
                >
                  Green Purchasing
                </button>
              </li>
              <li>
                <button
                  className="text-white/80 text-[22px] leading-[120%] underline text-start cursor-pointer"
                  onClick={() =>
                    openPopup("/sustainability/protect-endangered.webp")
                  }
                >
                  Protect Endangered Species
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Conservation of Biodiversity, Ecosystem and Landscapes
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Resource Conservation
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Wildlife Interaction
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Waste Reduction And Responsible Disposal
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Low-Carbon And Eco-Friendly Transportation
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Education And Environmental Awareness
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Water Conservation And Management
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Supporting Local Communities And Culture
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Renewable Energy
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Energy-Saving Operations
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Safe And Legal Water Sourcing
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Qualified Wastewater Treatment
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Eco-Friendly Materials And Design
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Tree Preservation And Landscaping
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Responsible Natural Site Visits
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Animal Welfare
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Food Waste Minimization
                </button>
              </li>
              <li>
                <button className="text-white/80 text-[22px] leading-[120%] underline text-start">
                  Sustainable Cultural Integration
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Popup />
      <Footer />
    </>
  );
}
