import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Info } from "lucide-react";
import { useState } from "react";

export default function TokenPresale() {
  const [selectedToken, setSelectedToken] = useState("Ether");

  const handleSelectionToken = (token: string) => {
    setSelectedToken(token);
  };

  return (
    <div className="e p-4 relative z-50">
      <div className=" mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="heading-1 font-fredoka-one">
            Ever-first Utility + Meme Token
          </h1>
          <div className="space-y-3">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-familjen text-[#000D25]">
              GLAS - Glow Acne Free Skin (Glow-up Acne Shrek)
            </h2>
            <p className="text-skin-gray-black text-sm lg:text-base font-normal font-figtree max-w-2xl mx-auto">
              Two tokens in one - designed for everyone on a skincare journey,
              especially those taking acne, while also embracing the lighter
              side of life through memes and community engagement.
            </p>
          </div>
        </div>

        {/* Presale Card */}
        <Card className="bg-white max-w-[515px] mx-auto text-black">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle>GLAS PreSale</CardTitle>
              <div className="flex gap-2">
                <a
                  href="http://"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-[#070707]"
                  target="_blank"
                  style={{
                    boxShadow: "3px 0px 0px 0px #000",
                  }}
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M13.9377 13.7406C13.8947 13.819 13.8314 13.8845 13.7544 13.9301C13.6775 13.9757 13.5897 13.9999 13.5002 14H10.5002C10.4161 14 10.3333 13.9787 10.2596 13.9382C10.1858 13.8976 10.1235 13.8392 10.0784 13.7681L7.54774 9.79125L3.87024 13.8363C3.78059 13.9326 3.6566 13.9896 3.52515 13.9951C3.39369 14.0006 3.26537 13.9541 3.168 13.8656C3.07063 13.7771 3.01206 13.6538 3.005 13.5224C2.99793 13.391 3.04293 13.2622 3.13024 13.1637L6.99087 8.91375L3.07837 2.76875C3.03018 2.69315 3.00321 2.60599 3.00027 2.51639C2.99733 2.42679 3.01854 2.33804 3.06167 2.25945C3.1048 2.18086 3.16826 2.11531 3.24542 2.06966C3.32258 2.02402 3.41059 1.99996 3.50024 2H6.50024C6.58439 2.00003 6.66718 2.02129 6.74092 2.06182C6.81467 2.10236 6.87699 2.16085 6.92212 2.23188L9.45274 6.20875L13.1302 2.16375C13.2199 2.06745 13.3439 2.01036 13.4753 2.00487C13.6068 1.99938 13.7351 2.04592 13.8325 2.13441C13.9299 2.2229 13.9884 2.3462 13.9955 2.47758C14.0026 2.60896 13.9576 2.73783 13.8702 2.83625L10.0096 7.08313L13.9221 13.2319C13.97 13.3075 13.9968 13.3946 13.9995 13.4841C14.0023 13.5736 13.9809 13.6622 13.9377 13.7406Z"
                      fill="#070707"
                    />
                  </svg>
                </a>
                <a
                  href="http://"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-[#070707]"
                  target="_blank"
                  style={{
                    boxShadow: "3px 0px 0px 0px #000",
                  }}
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M14.8054 1.63676C14.7279 1.56987 14.6337 1.52538 14.5328 1.50808C14.4319 1.49079 14.3282 1.50136 14.2329 1.53864L1.56665 6.49551C1.38714 6.56531 1.23517 6.69154 1.1336 6.85519C1.03204 7.01884 0.986392 7.21105 1.00352 7.40289C1.02066 7.59473 1.09964 7.77582 1.2286 7.91888C1.35755 8.06194 1.52949 8.15925 1.71853 8.19614L5.0004 8.84051V12.4999C4.99976 12.6992 5.05899 12.8941 5.17043 13.0594C5.28187 13.2247 5.44037 13.3526 5.6254 13.4268C5.81015 13.5022 6.01332 13.5203 6.20849 13.4787C6.40367 13.4372 6.58182 13.3378 6.71978 13.1936L8.30228 11.5524L10.8129 13.7499C10.994 13.9106 11.2277 13.9995 11.4698 13.9999C11.5759 13.9998 11.6813 13.9831 11.7823 13.9505C11.9472 13.8982 12.0956 13.8035 12.2126 13.676C12.3296 13.5485 12.4112 13.3925 12.4492 13.2236L14.986 2.18739C15.0087 2.08785 15.0039 1.98402 14.9721 1.88702C14.9403 1.79002 14.8826 1.70351 14.8054 1.63676ZM11.471 12.9999L6.30353 8.46864L13.741 3.13801L11.471 12.9999Z"
                      fill="#070707"
                    />
                  </svg>
                </a>
                <a
                  href="http://"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-[#070707]"
                  target="_blank"
                  style={{
                    boxShadow: "3px 0px 0px 0px #000",
                  }}
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M5.12764 3.33296C5.12739 3.87583 4.79804 4.36435 4.29488 4.56816C3.79172 4.77197 3.21523 4.65037 2.83725 4.26071C2.45927 3.87103 2.35528 3.29111 2.57432 2.79439C2.79336 2.29767 3.29168 1.98334 3.8343 1.99963C4.55502 2.02126 5.12796 2.61192 5.12764 3.33296ZM5.16764 5.65296H2.50097V13.9996H5.16764V5.65296ZM9.38098 5.65296H6.72764V13.9996H9.35432V9.61961C9.35432 7.17961 12.5343 6.95294 12.5343 9.61961V13.9996H15.1677V8.71294C15.1677 4.59963 10.461 4.75296 9.35432 6.77294L9.38098 5.65296Z"
                      fill="#070707"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <h3 className="text-xl lg:text-2xl font-bold text-center">
              Stage 1 - Buy $GLAS NOW
            </h3>

            {/* Price Information */}
            <div className="flex justify-between gap-4 text-sm">
              <div className="bg-primary  rounded-md px-4 py-2">
                <p className="text-base font-normal text-black font-figtree">
                  Current Price: $0.015
                </p>
              </div>
              <div className="bg-primary  rounded-md px-4 py-2">
                <p className="text-base font-normal text-black font-figtree">
                  Next Price: $0.08
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <Progress value={50} className="h-2" />

            {/* Stats */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-base lg:text-lg font-normal font-familjen">
                  USD Raised:
                </span>
                <span className="text-xl font-semibold">
                  $100 / $100,000,000
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-base lg:text-lg font-normal font-familjen">
                  Tokens Sold:
                </span>
                <span className="text-xl font-semibold">100 / 100,000,000</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="flex gap-2">
              <Button
                onClick={() => handleSelectionToken("Ether")}
                variant="outline"
                className="flex-1 "
                style={{
                  backgroundColor:
                    selectedToken === "Ether" ? "#D3FAFF" : "#f0f0f0",
                }}
              >
                <img src="/img/ethr.svg" className="w-4 h-4" alt="ether" />
                Ether
              </Button>
              <Button
                onClick={() => handleSelectionToken("USDT")}
                variant="outline"
                className="flex-1"
                style={{
                  backgroundColor:
                    selectedToken === "USDT" ? "#D3FAFF" : "#f0f0f0",
                }}
              >
                <img src="/img/usdt.svg" className="w-4 h-4" alt="ether" />
                USDT
              </Button>
              <Button
                onClick={() => handleSelectionToken("USDC")}
                variant="outline"
                className="flex-1"
                style={{
                  backgroundColor:
                    selectedToken === "USDC" ? "#D3FAFF" : "#f0f0f0",
                }}
              >
                <img src="/img/usdc.svg" className="w-4 h-4" alt="ether" />
                USDC
              </Button>
            </div>

            {/* Exchange Inputs */}

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4">
              <div>
                <label className="text-xs sm:text-sm mb-2 block">
                  Amount in ETH you pay
                </label>
                <Input type="number" placeholder="0.0" />
              </div>
              <div className="flex  rotate-90 sm:rotate-0 sm:mt-5 justify-center">
                <span className="text-2xl">⇄</span>
              </div>
              <div>
                <label className="text-xs sm:text-sm mb-2 block">
                  Amount in GLAS you receive
                </label>
                <Input type="number" placeholder="0.0" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-[#92DDE7] hover:bg-[#92DDE7]/90 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M12.3125 6.18579C12.1633 6.18579 12.0202 6.24505 11.9148 6.35054C11.8093 6.45603 11.75 6.59911 11.75 6.74829C11.75 7.98917 10.7409 8.99829 9.5 8.99829C8.25912 8.99829 7.25 7.98917 7.25 6.74829C7.25 6.59911 7.19074 6.45603 7.08525 6.35054C6.97976 6.24505 6.83668 6.18579 6.6875 6.18579C6.53832 6.18579 6.39524 6.24505 6.28975 6.35054C6.18426 6.45603 6.125 6.59911 6.125 6.74829C6.125 8.6096 7.63869 10.1233 9.5 10.1233C11.3613 10.1233 12.875 8.6096 12.875 6.74829C12.875 6.59911 12.8157 6.45603 12.7102 6.35054C12.6048 6.24505 12.4617 6.18579 12.3125 6.18579Z"
                    fill="black"
                  />
                  <path
                    d="M16.9566 13.6226L15.6499 5.36175C15.5887 4.96408 15.3868 4.60159 15.081 4.3402C14.7751 4.07882 14.3855 3.93592 13.9832 3.9375H12.8245C12.5545 2.34394 11.169 1.125 9.50008 1.125C7.83114 1.125 6.44514 2.34394 6.1757 3.9375H5.01695C4.61461 3.93592 4.22507 4.07882 3.9192 4.3402C3.61332 4.60159 3.41143 4.96408 3.35026 5.36175L2.04358 13.6226C1.97978 14.0242 2.00393 14.4349 2.11435 14.8263C2.22477 15.2177 2.41884 15.5804 2.68314 15.8895C2.94704 16.1988 3.27494 16.4471 3.64418 16.6172C4.01342 16.7874 4.41521 16.8753 4.82176 16.875H14.1784C15.0025 16.875 15.7815 16.5156 16.317 15.8895C16.5813 15.5804 16.7754 15.2177 16.8858 14.8263C16.9962 14.4349 17.0204 14.0242 16.9566 13.6226ZM9.50008 2.25C10.5452 2.25 11.4182 2.97 11.6702 3.9375H7.32995C7.58139 2.97 8.45495 2.25 9.50008 2.25ZM15.4615 15.1582C15.3032 15.3439 15.1065 15.4929 14.8849 15.5951C14.6634 15.6973 14.4223 15.7501 14.1784 15.75H4.82176C4.32733 15.75 3.85989 15.5346 3.5387 15.1582C3.38006 14.973 3.26354 14.7554 3.19721 14.5207C3.13087 14.2859 3.11631 14.0396 3.15451 13.7987L4.4612 5.53725C4.48156 5.40465 4.54887 5.28377 4.65088 5.19663C4.75288 5.10949 4.8828 5.06189 5.01695 5.0625H13.9832C14.2616 5.0625 14.4951 5.26219 14.539 5.53725L15.8456 13.7987C15.8838 14.0396 15.8693 14.2859 15.8029 14.5207C15.7366 14.7554 15.6201 14.973 15.4615 15.1582Z"
                    fill="black"
                  />
                </svg>
                <span className="text-sm lg:text-base xl:text-lg font-bold">
                  Buy
                </span>
              </Button>
              <div className="text-center">Or</div>
              <Button
                variant="outline"
                className="w-full border-[#92DDE7] bg-[#D3FAFF] text-sm lg:text-base xl:text-lg font-bold"
              >
                Buy & Stake
              </Button>
            </div>

            {/* Footer Links */}
            <div className="flex justify-between text-sm text-[#000]">
              <button className="flex  items-center gap-2">
                <Info color="#A5A5AB" />
                How To Buy
              </button>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <rect
                    x="18.833"
                    y="2.5"
                    width="15"
                    height="16.6667"
                    rx="4"
                    transform="rotate(90 18.833 2.5)"
                    stroke="#A5A5AB"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.4997 8.13658C9.98822 8.59435 9.66634 9.25958 9.66634 10C9.66634 10.7404 9.98822 11.4057 10.4997 11.8634M10.4997 8.13658C10.942 7.74071 11.526 7.5 12.1663 7.5C13.5471 7.5 14.6663 8.61929 14.6663 10C14.6663 11.3807 13.5471 12.5 12.1663 12.5C11.526 12.5 10.942 12.2593 10.4997 11.8634M10.4997 8.13658C10.0574 7.74071 9.4733 7.5 8.83301 7.5C7.4523 7.5 6.33301 8.61929 6.33301 10C6.33301 11.3807 7.4523 12.5 8.83301 12.5C9.4733 12.5 10.0574 12.2593 10.4997 11.8634"
                    stroke="#A5A5AB"
                    strokeWidth="1.5"
                  />
                </svg>
                Pay With Card
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
