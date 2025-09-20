"use client";

import { useState } from "react";

const tabs = ["Environmental", "Community", "Business"];

const data = {
  Environmental: [
    {
      title: "Green Space Commitment",
      desc: "Maintaining 70% of the land as green, with only 30% designated for construction.",
    },
    {
      title: "Reforestation Initiative",
      desc: "Planting 15,000 trees to enhance biodiversity and sequester carbon.",
    },
    {
      title: "Waste Management Excellence",
      desc: "Recycling 70% of waste produced within the facility.",
    },
    {
      title: "Sustainable Water Bodies",
      desc: "Supporting clean water environments for species like dragonflies.",
    },
    {
      title: "Enhanced Biodiversity Support",
      desc: "Increasing butterfly survival rates to 20%, above natural 2%.",
    },
    {
      title: "Mangrove Conservation",
      desc: "Replanting mangrove seedlings and native coastal trees.",
    },
    {
      title: "Ecosystem Preservation",
      desc: "No large trees cut; relocation instead when necessary.",
    },
    {
      title: "Zero-emission Transition",
      desc: "Gradually adopting zero-emission vehicles.",
    },
  ],
  Community: [
    {
      title: "Local Employment",
      desc: "Prioritizing recruitment from nearby villages.",
    },
    {
      title: "Education Program",
      desc: "Partnering with schools to teach sustainability.",
    },
  ],
  Business: [
    {
      title: "Green Supply Chain",
      desc: "Selecting partners with eco-friendly practices.",
    },
    {
      title: "Sustainable Packaging",
      desc: "Using biodegradable or recycled materials.",
    },
  ],
};

export default function SustainabilityTabs() {
  const [activeTab, setActiveTab] = useState("Environmental");

  return (
    <section className="bg-[#3c5160] py-16 px-4">
      <div className="container text-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2  transition-all
                ${
                  activeTab === tab
                    ? "text-white border-b-2 border-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 text-left">
          {data[activeTab].map((item, idx, arr) => {
            const lastTwoStart = arr.length - 2; // index mulai 2 item terakhir

            if (idx >= lastTwoStart) {
              return (
                <div
                  key={idx}
                  className="shadow-sm p-10 lg:col-span-6  h-[200px] space-y-3"
                >
                  <h3 className="text-lg font-semibold text-white/80 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-[180%]">
                    {item.desc}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className=" shadow-sm p-10   lg:col-span-4 h-[200px] space-y-3"
              >
                <h3 className="text-[22px] tracking-[0.5px] capitalize leading-[120%] text-white/80 ">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-[180%]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
