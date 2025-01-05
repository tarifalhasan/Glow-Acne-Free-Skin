import TokenPresale from "./TokenPresel";

const Hero = () => {
  return (
    <section
      style={{}}
      className="bg-[url('/img/hero-bg.png')] overflow-hidden flex flex-col items-center justify-center relative bg-no-repeat bg-[100%_100%] bg-[length:100%_100%] h-full min-h-[916px]"
    >
      <TokenPresale />
      <img
        src="/img/hero-bottom-assets.png"
        className="absolute bottom-[-10rem] z-0 left-1/2 -translate-x-1/2"
        alt=""
      />
    </section>
  );
};

export default Hero;
