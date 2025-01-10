const Tokenomics = () => {
  return (
    <section id="tokenomics" className="pt-6 scroll-mt-20 lg:pt-10">
      <div className="container">
        <div className="text-center mb-5 ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-fredoka-one  mb-4 text-skin-dark-green">
            Tokenomics
          </h2>
          <p className="max-w-xl font-figtree text-sm lg:text-base text-center mx-auto">
            Total token{" "}
            <span className="text-[#007180] font-medium">
              (10 Billion Tokens)
            </span>
          </p>
        </div>
        <img
          className="w-full max-w-[850px] block mx-auto"
          src="/img/tokenmise.webp"
          alt="tokemise"
        />
      </div>
    </section>
  );
};

export default Tokenomics;
