import Link from "next/link";

export default function ContactDekstop({ setContact }) {
  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber) {
      const countryCode = "+62 ";
      const areaNumber = phoneNumber.substring(2, 5);
      const firstPart = phoneNumber.substring(5, 9);
      const secondPart = phoneNumber.substring(9);

      return `${countryCode}${areaNumber}-${firstPart}-${secondPart}`;
    }
  };
  return (
    <>
      <div className=" grid-cols-12 h-full max-[767px]:hidden grid">
        <div className="col-span-8 relative  max-[1200px]:col-span-6">
          <img
            src={"/presidential.webp"}
            alt={"#"}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute  top-[50px] left-[50px] z-20  gap-[20px]">
            <div
              onClick={() => setContact(false)}
              className="relative w-[25px] h-[25px] cursor-pointer flex gap-[20px]"
            >
              <img
                src="/close.png"
                alt="close"
                loading="eager"
                className="w-full h-full"
              />
              <p className="text-white">Close</p>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full bg-black opacity-10"></div>
        </div>
        <div className="col-span-4 max-[1200px]:col-span-6 h-[100vh] flex flex-col justify-between">
          <div className="px-[50px]">
            <div className="container py-[40px]">
              <div className="flex justify-center">
                <Link
                  prefetch={false}
                  href={`/`}
                  onClick={() => setContact(false)}
                >
                  <div>
                    <img
                      src={`/logo.webp`}
                      alt="logo"
                      loading="eager"
                      className="w-[120px] h-auto object-cover object-center"
                    />
                  </div>
                </Link>
              </div>
              <div className="mt-[24px]">
                <p className="text-white text-center text-[14px]">
                  Have questions or need assistance? We’re here to help. Whether
                  you're planning your stay or need support during your visit,
                  feel free to reach out through any of the options below:
                </p>
              </div>
              <div className="mt-[40px] text-white text-center">
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  <div className="text-[24px]">Location</div>
                  <p className="text-[14px] mt-[5px]">
                    Jl. Bisma No.888A, Ubud, Kecamatan Ubud, Kabupaten Gianyar,
                    Bali 80571
                  </p>
                </a>
              </div>
              <div className="mt-[24px] flex justify-between text-center text-white">
                <div>
                  <div className="text-[24px]">Reservation</div>
                  <a href={`https://wa.me/`}>
                    <p className="text-[14px]">+62 811-3960-7249</p>
                  </a>
                </div>
                <div>
                  <div className="text-[24px]">E-Butler</div>
                  <a href={`https://wa.me/`}>
                    <p className="text-[14px]">+62 813-3750-4188</p>
                  </a>
                </div>
              </div>
              <div className="text-center text-white mt-[24px]">
                <div className="text-[24px]">Email</div>
                <a href={`mailto:`}>
                  <p className="text-[14px]">kaamalaresort@inivie.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="py-[40px] px-[38px]    bg-[#2D3D49] ">
            <div className="flex justify-center">
              <picture>
                <source
                  srcSet="/logo-inivie-pt.png"
                  media="(max-width: 600px)"
                />
                <source
                  srcSet="logo-inivie-ln.png"
                  media="(min-width: 601px)"
                />
                <img
                  src="/logo-inivie-ln.png"
                  alt="Gambar Responsif"
                  loading="eager"
                  className="w-[81px] h-auto min-w-767:w-[120px] object-cover object-center"
                />
              </picture>
            </div>
            <div className="mt-[16px]">
              <p className="text-[14px] text-white text-center ">
                This property is a proud member of the Inivie family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
