import { Marquee } from "./marquee";

const TopHeader = () => {
  return (
    <div className="flex justify-center items-center py-2">
      <Marquee pauseOnHover={true} className="[--duration:20s]">
        <p
          style={{ fontFamily: '"Inter", serif' }}
          className="text-xs hidden lg:block font-medium text-black capitalize"
        >
          🚀Glow Acne-free skin Presale is NOW LIVE! Be part of the future—claim
          your discounted tokens and exclusive access to revolutionary
          AI-blockchain technology. 🌐 Don't wait, join the innovation wave
          today!💥
        </p>
      </Marquee>
    </div>
  );
};

export default TopHeader;
