import Link from "next/link";

export default function SidebarMobile({ setOpen, setContact }) {
  return (
    <div className="container flex-col h-full justify-between col-span-4 max-[767px]:flex hidden">
      <div className="pt-[20px]  flex justify-between items-center">
        <div className="relative w-[90px] h-auto">
          <img
            src={`/logo.webp`}
            alt="logo"
            loading="eager"
            className="w-full h-full"
          />
        </div>
        <div>
          <div
            onClick={() => setOpen(false)}
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
      <div className="flex justify-between ">
        <ul className="text-[28px] text-white  flex flex-col gap-[20px] w-fit">
          <li>
            <Link
              href={`/#accomodation`}
              className=" capitalize"
              aria-label="Link Accomodation"
              onClick={() => setOpen(false)}
            >
              accomodation
            </Link>
          </li>
          <li>
            <Link
              href={`/experience`}
              className=" capitalize"
              aria-label="Link experience"
              onClick={() => setOpen(false)}
            >
              experience
            </Link>
          </li>

          <li>
            <Link
              href={`/promo`}
              className=" capitalize"
              onClick={() => setOpen(false)}
            >
              special offers
            </Link>
          </li>

          <li>
            <Link
              href={`/wedding`}
              className=" capitalize"
              onClick={() => setOpen(false)}
            >
              wedding
            </Link>
          </li>
          <li>
            <Link
              href={`/gallery`}
              className=" capitalize"
              aria-label="Link   gallery"
              onClick={() => setOpen(false)}
            >
              gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => setContact(true)}
              className=" capitalize max-[560px]:text-[14px]"
            >
              contact
            </button>
          </li>
        </ul>
        <ul className="flex flex-col gap-[20px] justify-center items-center">
          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link facebook">
              <img
                src="/facebook.png"
                alt="facebook"
                className="w-[8px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>

          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link youtube">
              <img
                src="/youtube.png"
                alt="youtube"
                className="w-[15px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>

          <li className="w-[30px] h-[30px] rounded-[50%] flex justify-center items-center bg-[var(--bodyColor)]">
            <a href={"#"} aria-label="Link Instagram">
              <img
                src="/instagram.png"
                alt="instagram"
                className="w-[15px] h-[12px]"
                loading="eager"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="pb-[20px]  flex justify-between items-center">
        <div className="">
          <Link href="/" prefetch={false}>
            <div className="">
              <img
                src="/logo-inivie-ln.png"
                alt="Gambar Responsif"
                loading="eager"
                className="w-[109px] h-auto max-[560px]:w-[90px] object-cover object-center"
              />
            </div>
          </Link>
        </div>
        <div>
          <a href={"#"} target="_blank" rel="noopener noreferrer">
            <p className="text-[13px] text-white text-center">Recommended on</p>
            <div className=" w-[131px] h-[20px] mt-[10px] ">
              <img
                src="/tripadvisor.png"
                alt="tripadvisor"
                className="w-full h-full"
                loading="eager"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
