import { Button } from "@/components/ui/button";
import { Copy, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

interface ReferralInputProps {
  referralLink: string;
}

const ReferralInput: React.FC<ReferralInputProps> = ({ referralLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-col w-full px-0 md:flex-row items-center gap-2 mb-6 relative">
      {/* Input Field */}
      <div className="bg-[#F8FAFB] w-full rounded-[12px] px-2  md:flex-1 h-12 items-center border flex border-[#92DDE7] bg-[#D3FAFF4D]/30">
        <input
          value={referralLink}
          readOnly
          placeholder="Https://Yourwebsite.Com/Ref?Ad..."
          className="text-base flex-1   p-0 w-full outline-none focus-within:ring-0 focus:right-0 focus:border-none focus:outline-none bg-transparent border-none text-[#1D1F2C] placeholder:text-[#1D1F2C]"
        />
        <div
          className=" text-gray-500 cursor-pointer"
          data-tooltip-id="referral-tooltip"
        >
          <HelpCircle className="h-5 w-5" />
        </div>
      </div>
      {/* Question Mark Icon with Tooltip */}

      <Tooltip id="referral-tooltip" place="top">
        Enter a referral link to get rewards!
      </Tooltip>

      {/* Copy Link Button */}
      <Button
        onClick={handleCopyLink}
        className="bg-[#92DDE7] w-[124px] hover:bg-[#7DD8D7] h-10 md:h-12 inline-flex items-center text-black gap-2"
      >
        <Copy className="h-4 w-4" />
        {copied ? "Copied!" : "Copy Link"}
      </Button>
    </div>
  );
};

export default ReferralInput;
