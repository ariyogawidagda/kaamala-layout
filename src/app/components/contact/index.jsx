import ContactDekstop from "./dekstop";
import ContactMobile from "./mobile";

export default function Contact({ contact, setContact }) {
  return (
    <>
      <section
        className={`h-[100vh] w-full bg-[var(--contactColor)] absolute z-[999] bottom-0  sideBar ${
          contact ? "!opacity-100 !visible" : " "
        }`}
      >
        <ContactMobile setContact={setContact} />
        <ContactDekstop setContact={setContact} />
      </section>
    </>
  );
}
