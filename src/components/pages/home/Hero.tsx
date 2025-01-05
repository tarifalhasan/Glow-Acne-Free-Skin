import TokenPresale from "./TokenPresel";

const Hero = () => {
  return (
    <section
      style={{}}
      className=" overflow-hidden flex flex-col items-center justify-center relative bg-no-repeat bg-[100%_100%] bg-[length:100%_100%] h-full"
    >
      <img
        src="/img/hero/1.webp"
        className="hidden lg:block absolute inset-0 w-full"
        alt="hero section"
      />
      <div className="relative  w-full h-full  pt-16 pb-[8rem]">
        <TokenPresale />

        <img
          src="/img/hero/hero.gif"
          alt="hero"
          className="absolute lg:max-w-[160px] xl:max-w-[260px] z-50  bottom-[10rem] left-[5%] xl:left-[6] 2xl:left-[10%] hidden lg:block"
        />

        <img
          src="/img/hero/hero-bottle.webp"
          className="absolute lg:max-w-[160px] xl:max-w-[260px] 2xl:max-w-[360px] z-50  bottom-[10rem] right-[5%] xl:right-[6] 2xl:right-[10%] hidden lg:block"
          alt="hero"
        />
      </div>
      <img
        src="/img/hero/bottom-shape.webp"
        className="absolute  z-40  bottom-0   w-full left-0 right-0"
        alt="hero section"
      />

      <img
        src="/img/hero/2.webp"
        className="hidden lg:block absolute z-0 inset-0 top-[600px] w-full"
        alt="hero"
      />
      <img
        src="/img/hero/3.webp"
        className="absolute max-w-[460px] z-20 xl:max-w-[512px] 2xl:max-w-fit bottom-[-9rem] 2xl:bottom-[-12rem] right-0 hidden lg:block"
        alt="hero section"
      />
      <img
        src="/img/hero/right-mask.webp"
        className="absolute lg:max-w-[499px] xl:max-w-[560px] z-40 2xl:max-w-fit bottom-[-5rem] 2xl:bottom-[-8rem] left-0 hidden lg:block"
        alt="hero section"
      />
      <img
        src="/img/hero/center-mask.webp"
        className="absolute max-w-[6550px] bottom-[-12rem] z-10 left-1/2 -translate-x-1/2 hidden lg:block"
        alt="hero section"
      />
    </section>
  );
};

export default Hero;
