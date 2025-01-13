"use client";

import { useEffect, useState } from "react";
import TokenPresale from "./TokenPresel";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <section className="overflow-hidden flex flex-col items-center justify-center relative bg-no-repeat bg-[100%_100%] bg-[length:100%_100%] h-full">
      <img
        src="/img/hero/1.webp"
        className="hidden lg:block absolute inset-0 w-full"
        alt="hero section"
      />
      <div className="relative container w-full h-full pt-16 pb-[8rem]">
        <TokenPresale />

        <img
          src="/img/hero/hero.gif"
          alt="hero"
          className="absolute lg:max-w-[160px] xl:max-w-[260px] 2xl:max-w-[450px] left-[5%] 2xl:left-[-15rem] z-50 hidden lg:block"
          style={{
            bottom: `calc(37rem - ${Math.min(scrollY * 0.5, 240)}px)`,

            transform: `translateY(${Math.min(scrollY * 0.5, 240)}px)`,
          }}
        />

        <img
          src="/img/hero/hero-product.webp"
          className="absolute lg:max-w-[200px] right-[5%] 2xl:right-[-15rem] xl:max-w-[300px]  2xl:w-[150%] 2xl:max-w-[550px] z-50 hidden lg:block"
          alt="hero"
          style={{
            bottom: `calc(36rem - ${Math.min(scrollY * 0.5, 240)}px)`,

            transform: `translateY(${Math.min(scrollY * 0.5, 240)}px)`,
          }}
        />
      </div>
      <img
        src="/img/hero/bottom-shape.webp"
        className="absolute z-40 bottom-0 w-full left-0 right-0"
        alt="hero section"
      />

      <img
        src="/img/hero/2.webp"
        className="hidden lg:block absolute z-0 inset-0 top-[600px] w-full"
        alt="hero"
      />
      <img
        src="/img/hero/left-globe.webp"
        className="absolute max-w-[460px] z-20 xl:max-w-[512px] 2xl:max-w-max w-full bottom-[-9rem] 2xl:bottom-[-8rem] right-0 hidden lg:block"
        alt="hero section"
      />
      <img
        src="/img/hero/right-mask.webp"
        className="absolute lg:max-w-[499px] xl:max-w-[560px] z-40 2xl:max-w-fit bottom-[-8rem] 2xl:bottom-[-9rem] left-0 hidden lg:block"
        alt="hero section"
      />
      <img
        src="/img/hero/center-mask.webp"
        className="absolute w-full max-w-[600px] 2xl:max-w-[980px] bottom-[-12rem] z-10 left-1/2 -translate-x-1/2 hidden lg:block"
        alt="hero section"
      />
    </section>
  );
};

export default Hero;
