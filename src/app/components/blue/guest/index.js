"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: "We had the most wonderful stay here in a two bedroom villa. The villa was amazing and comfy. The staff were incredible and so nice. They were particularly amazing with my two year old. The proximity to Ubud town is great too. My family had such a great time here and set us up for a wonderful adventure in Ubud.",
    author: "Bianca Guerrieri",
    source: "Google Review",
  },
  {
    text: "This is a great hotel to stay in during the time in Ubud. All of the staff is very friendly and helpful, which creates a great experience. The resort itself is nice and clean. The hotel restaurant Habitat is to be recommended as well, very good dining!",
    author: "Samuel Lanter",
    source: "Google Review",
  },
  {
    text: "Facilities were amazing and the staff are so friendly, with their ready smiles very much willing to assist. Rooms were well maintained. Fantastic view of the forest from the pool and restaurant. Enjoyed the breakfast (a la carte) as well.",
    author: "Rosarie",
    source: "Agoda",
  },
  {
    text: "Great location, comfortable and stylish room, gorgeous views from our room as well as from the Habitat restaurant where we had breakfast. It was so cool to see monkeys pop by the pool at breakfast!",
    author: "Lisa",
    source: "Booking.com",
  },
  {
    text: "Perfect stay, wonderful experience. We were so happy to spend our honeymoon here. The hotel is close to Ubud Center, which made it easy for us to get around and visit several places in Ubud.",
    author: "Maxim Jack",
    source: "Tripadvisor",
  },
];

export default function GuestReviews() {
  return (
    <section className="bg-[#3c5160] pb-[100px] max-[560px]:pb-[70px]">
      <div className="container mx-auto text-center">
        <h2 className="text-[28px] tracking-[0.5px] text-white mb-14 max-[560px]:mb-[40px]">
          Guest Reviews
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={60}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="bg-white px-10 py-12 flex flex-col justify-between text-left">
                <p className="relative review-text text-[16px]  text-[#1A1A1A]/85 italic font-light leading-[1.8] tracking-wide mb-10">
                  “{review.text}”
                </p>
                <div className="mt-auto border-t border-[#E6E2DF] pt-6">
                  <p className="text-[16px] font-medium text-[#1A1A1A]">
                    — {review.author}
                  </p>
                  <p className="text-[13px] text-[#3c5160]/70 uppercase tracking-[1.5px] mt-1">
                    {review.source}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-10 max-[560px]:mt-4 gap-2 cursor-pointer flex justify-center" />
      </div>
    </section>
  );
}
