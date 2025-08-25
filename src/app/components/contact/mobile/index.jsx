export default function ContactMobile({ setContact }) {
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
      <div className="hidden max-[767px]:flex justify-evenly flex-col h-full">
        <div className="container py-[40px]">
          <div className="flex justify-between">
            <div></div>
            <div className="ml-[20px]">
              <img
                src={`/logo.webp`}
                alt="logo"
                loading="eager"
                className="w-[90px] h-[90px] object-cover object-center"
              />
            </div>
            <div className="flex items-center">
              <div
                onClick={() => setContact(false)}
                className="relative w-[25px] h-[25px] cursor-pointer"
              >
                <img
                  src="/close.png"
                  alt="close"
                  loading="eager"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-[24px]">
            <p className="text-white text-center text-[14px]">
              Have questions or need assistance? We’re here to help. Whether
              you're planning your stay or need support during your visit, feel
              free to reach out through any of the options below:
            </p>
          </div>
          <div className="mt-[40px] text-white text-center">
            <a href={"#"} target="_blank" rel="noopener noreferrer">
              <div className="text-[24px]">Location</div>
              <p className="text-[14px] mt-[5px]">
                Jl. Bisma No.888A, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali
                80571
              </p>
            </a>
            <div></div>
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

        <div className="py-[40px] px-[38px] h-[100vh] max-[767px]:flex justify-center flex-col   bg-[#2D3D49] hidden">
          <div className="flex justify-center">
            <picture>
              <img
                src="/logo-inivie-ln.png"
                alt="Gambar Responsif"
                loading="eager"
                className="max-[560px]:w-[81px] h-auto w-[120px] object-cover object-center"
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
    </>
  );
}
