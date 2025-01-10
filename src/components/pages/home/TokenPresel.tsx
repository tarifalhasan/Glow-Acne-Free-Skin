import TransitionErrorDialog from "@/components/pages/home/TransitionErrorDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Info, ShoppingBagIcon } from "lucide-react";
import { useState } from "react";
import TransitionSuccessDIalog from "./TransitionSuccessDIalog";
export default function TokenPresale() {
  const [selectedToken, setSelectedToken] = useState("Ether");
  const [transitionSubmitSuccessfully, setTranstionSubmitSuccessfully] =
    useState(false);
  const [transitionSubmitError, setTranstionSubmitError] = useState(false);
  const handleSelectionToken = (token: string) => {
    setSelectedToken(token);
  };

  const handleTransiotion = () => {
    // if successfull transition
    setTranstionSubmitSuccessfully(true);
    // if error transition
    // setTranstionSubmitError(true);
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
                className="flex-1 border h-10 rounded-[12px] border-[#DFE1E7]"
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
                className="flex-1 border h-10 rounded-[12px] border-[#DFE1E7]"
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
                className="flex-1 border h-10 rounded-[12px] border-[#DFE1E7]"
                style={{
                  backgroundColor:
                    selectedToken === "USDC" ? "#D3FAFF" : "#f0f0f0",
                }}
              >
                <img src="/img/usdc.svg" className="w-4 h-4" alt="ether" />
                USDC
              </Button>
            </div>

            {/* Banalnce */}
            <div className="flex items-center gap-1">
              <div className="flex-1 h-[1px] bg-[#E9E9EA]" />
              <p className="text-sm lg:text-base font-figtree text-[#4A4C56]">
                ETH Balance: 0.01456
              </p>
              <div className="flex-1 h-[1px] bg-[#E9E9EA]" />
            </div>

            {/* Exchange Inputs */}

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4">
              <div>
                <label className="text-xs sm:text-sm mb-2 block">
                  Amount in ETH you pay
                </label>
                <div className="flex items-center justify-between bg-[#F6F8FA] border-[#DFE1E7] h-9 rounded-[12px] px-3">
                  <input
                    type="text"
                    className="flex-1 border-0 outline-none focus:outline-none text-sm font-figtree text-black bg-transparent w-full placeholder:text-black"
                    placeholder="0"
                  />
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.67185 10.6878L5.72553 15.8883C5.61252 16.0374 5.388 16.0372 5.27506 15.8883L1.32874 10.6878C1.2368 10.5669 1.37399 10.406 1.50765 10.4775L5.36735 12.5339C5.40779 12.5555 5.45287 12.5668 5.4987 12.5671C5.54454 12.5673 5.58974 12.5564 5.63041 12.5353L9.49294 10.4775C9.62659 10.406 9.76378 10.5669 9.67185 10.6878Z"
                      fill="#6E6F80"
                    />
                    <path
                      d="M9.67156 10.6878L5.72353 15.8906C5.65123 15.984 5.5 15.9275 5.5 15.8093V12.6805C5.50001 12.6576 5.50625 12.6351 5.51805 12.6154C5.52985 12.5958 5.54677 12.5797 5.567 12.5689L9.49265 10.4775C9.6263 10.406 9.76349 10.5669 9.67156 10.6878Z"
                      fill="#585966"
                    />
                    <path
                      d="M9.88757 6.80798L5.63186 9.04438C5.59131 9.06575 5.54617 9.07692 5.50033 9.07692C5.45449 9.07692 5.40935 9.06575 5.3688 9.04438L1.11309 6.80798C0.963875 6.72948 0.916141 6.53855 1.01055 6.39888L5.26626 0.124221C5.37781 -0.0409728 5.622 -0.0413971 5.73405 0.123867L9.99011 6.39888C10.0845 6.53855 10.0368 6.72948 9.88757 6.80798Z"
                      fill="#6E6F80"
                    />
                    <path
                      d="M9.88724 6.80795L5.63029 9.04499C5.57107 9.07624 5.5 9.02996 5.5 8.96303V0.113512C5.5 0.0474628 5.56948 0.000719298 5.62835 0.0305616C5.67084 0.0521698 5.70709 0.0842773 5.73368 0.123836L9.98975 6.39885C10.0842 6.53852 10.0365 6.72945 9.88724 6.80795Z"
                      fill="#585966"
                    />
                    <path
                      d="M5.36835 11.1319L0.701069 8.67912C0.634662 8.64422 0.58484 8.58436 0.562563 8.51272C0.540287 8.44109 0.54738 8.36353 0.582284 8.29713C0.617187 8.23072 0.677041 8.1809 0.748678 8.15862C0.820316 8.13634 0.897868 8.14344 0.964276 8.17834L5.49995 10.562L10.0356 8.17831C10.1739 8.10557 10.3449 8.15882 10.4176 8.29711C10.4525 8.36352 10.4596 8.44107 10.4373 8.5127C10.4151 8.58433 10.3652 8.64418 10.2988 8.67908L5.63156 11.1319C5.59097 11.1532 5.54581 11.1644 5.49996 11.1644C5.45411 11.1644 5.40894 11.1532 5.36835 11.1319Z"
                      fill="#6E6F80"
                    />
                    <path
                      d="M5.61913 0.0262453C5.56256 0.00573759 5.50033 0.0509253 5.50033 0.113509V4.82492C5.50033 4.99626 5.42212 5.15764 5.28928 5.26587C4.41331 5.97971 3.33581 6.203 2.22687 6.07104C1.80734 6.02112 1.59191 5.54173 1.82902 5.19207L5.26622 0.124187C5.34769 0.00354539 5.50118 -0.0294084 5.61913 0.0262453ZM4.97116 12.5938C4.78362 13.1209 4.35497 13.5303 3.78864 13.6608C3.68189 13.6854 3.57083 13.6423 3.50461 13.5551L1.32874 10.6878C1.2368 10.5669 1.37399 10.406 1.50765 10.4774L4.83669 12.2513C4.95967 12.3169 5.01787 12.4626 4.97116 12.5938Z"
                      fill="#828396"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex  rotate-90 sm:rotate-0 sm:mt-5 justify-center">
                <span className="text-2xl">⇄</span>
              </div>
              <div>
                <label className="text-xs sm:text-sm mb-2 block">
                  Amount in GLAS you receive
                </label>
                <div className="flex items-center justify-between bg-[#F6F8FA] border-[#DFE1E7] h-9 rounded-[12px] px-3">
                  <input
                    type="text"
                    className="flex-1 border-0 outline-none focus:outline-none text-sm font-figtree text-black bg-transparent w-full placeholder:text-black"
                    placeholder="0"
                  />
                  <img src="/img/glas.png" alt="glas presale " />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleTransiotion}
                className="w-full  text-sm lg:text-base xl:text-lg font-bold bg-[#92DDE7] hover:bg-[#92DDE7]/90 text-black"
              >
                <ShoppingBagIcon />
                <span className="">Buy</span>
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

      <TransitionSuccessDIalog
        isOpen={transitionSubmitSuccessfully}
        setIsOpen={setTranstionSubmitSuccessfully}
      />
      <TransitionErrorDialog
        isOpen={transitionSubmitError}
        setIsOpen={setTranstionSubmitError}
      />
    </div>
  );
}
