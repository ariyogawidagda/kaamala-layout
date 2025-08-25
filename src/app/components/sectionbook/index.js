export default function SectionBookM() {
  return (
    <>
      <section className="fixed bottom-0 w-full bg-white z-[200] hidden max-[900px]:block py-[12px] px-[12px]">
        <a
          className="bg-[var(--headerColor)] inline-block w-full py-[12px] px-[12px]"
          href={"/"}
        >
          <div className="flex justify-center items-center gap-[10px]">
            <p className="text-[14px] text-white">Book Now!</p>
            <div>
              <img src={`/arrow.png`} alt="arrow" className="w-[26px] h-auto" />
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
