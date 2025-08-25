"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar({ setOpen, slug }) {
  const ref = useRef(null);
  const refButton = useRef(null);
  const promo = useRef(null);

  useEffect(() => {
    let previousScrollPosition = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (ref.current) {
        const scrollTop = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          if (currentScrollPosition > previousScrollPosition) {
            // ref.current.classList.add("hideY");
            ref.current.classList.add("bg-[var(--headerColor)]");
          } else {
            if (currentScrollPosition === 0) {
              ref.current.classList.remove("bg-[var(--headerColor)]");
            } else {
              ref.current.classList.add("bg-[var(--headerColor)]");
            }
            ref.current.classList.remove("hideY");
          }

          previousScrollPosition = currentScrollPosition;
        } else {
          if (scrollTop > 50) {
            ref.current.classList.add("bg-[var(--headerColor)]");
            refButton?.current?.classList.add(
              "hover:bg-[var(--btnHoverColor)]"
            );
            refButton?.current?.classList.add(
              "hover:border-[var(--btnHoverColor)]"
            );
            refButton?.current?.classList.remove(
              "hover:bg-[var(--headerColor)]"
            );
            refButton?.current?.classList.remove(
              "hover:border-[var(--headerColor)]"
            );
          } else {
            ref.current.classList.remove("bg-[var(--headerColor)]");
            refButton?.current?.classList.remove(
              "hover:bg-[var(--btnHoverColor)]"
            );
            refButton?.current?.classList.remove(
              "hover:border-[var(--btnHoverColor)]"
            );
            refButton?.current?.classList.add("hover:bg-[var(--headerColor)]");
            refButton?.current?.classList.add(
              "hover:border-[var(--headerColor)]"
            );
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (promo.current) {
        const scrollTop = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          if (currentScrollPosition === 0) {
            promo.current.classList.remove("hiddenn");
          } else {
            promo.current.classList.add("hiddenn");
          }
        } else {
          if (scrollTop > 50) {
            promo.current.classList.add("hiddenn");
          } else {
            promo.current.classList.remove("hiddenn");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={ref}
        className="bg-[var(--headerColor)] fixed w-full h-fit inset-0 z-[100] duration-500 ease-in-out"
      >
        <div className="flex container py-[16px] justify-between items-center ">
          <div className="order-2 max-[560px]:order-1">
            <Link href={`/`}>
              <img
                alt="Logo Responsif"
                height="100"
                width="100"
                loading="edge"
                fetchPriority="high"
                src={"/logo.webp"}
                className=" object-cover object-center max-[560px]:w-[70px] max-[560px]:h-[70px]"
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="w-[34px] h-[14px]  relative cursor-pointer order-1"
          >
            <img
              src={`burgerMenu.png`}
              width={34}
              height={14}
              alt="burger menu"
            />
          </div>
          <div className="order-3 max-[560px]:hidden">
            <a
              href={"3"}
              ref={refButton}
              className="py-[12px] px-[24px] inline-block border-white border-[1px] text-white duration-500 ease-in-out"
              aria-label="Link Booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
