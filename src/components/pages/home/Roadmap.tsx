import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import autoplay from "embla-carousel-autoplay";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-6 scroll-mt-10 lg:py-10 xl:py-24 lg:mt-10"
    >
      <div className="container relative overflow-hidden ">
        <div className="text-center mb-5 ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-fredoka-one  mb-4 text-skin-dark-green">
            Glow Acne Skin Roadmap
          </h2>
        </div>
        <div className=" hidden  flex-col mt-10 items-center relative lg:flex-row w-full gap-6 justify-between ">
          <StepCard
            step={{
              id: 1,
              title: "Prototype Development",
              tasks: [
                "Development Of POI And AIVM",
                "Governance Framework",
                "Community Engagement",
              ],
            }}
            clssName="w-full md:w-[calc(25%-56px)] lg:w-[calc(33%-56px)]"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={57}
            viewBox="0 0 56 57"
            fill="none"
            className="rotate-90 md:rotate-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.7621 8.8125H44.4292L54.9062 28.5L44.4292 48.1875H35.7621L46.2392 28.5L35.7621 8.8125ZM1.09375 8.8125H9.76084L20.2379 28.5L9.76084 48.1875H1.09375L11.5708 28.5L1.09375 8.8125Z"
              stroke="#6AC6D2"
              strokeWidth="1.87501"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4277 8.8125H27.0948L37.5719 28.5L27.0948 48.1875H18.4277L28.9048 28.5L18.4277 8.8125Z"
              fill="#007180"
            />
          </svg>
          <StepCard
            step={{
              id: 2,
              title: "Testnet Rollout",
              tasks: [
                "Development Of POI And AIVM",
                "Governance Framework",
                "Community Engagement",
              ],
            }}
            clssName="w-full md:w-[calc(25%-56px)] lg:w-[calc(33%-56px)]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={57}
            viewBox="0 0 56 57"
            fill="none"
            className="rotate-90 md:rotate-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.7621 8.8125H44.4292L54.9062 28.5L44.4292 48.1875H35.7621L46.2392 28.5L35.7621 8.8125ZM1.09375 8.8125H9.76084L20.2379 28.5L9.76084 48.1875H1.09375L11.5708 28.5L1.09375 8.8125Z"
              stroke="#6AC6D2"
              strokeWidth="1.87501"
              strokeMiterlimit="22.9256"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4277 8.8125H27.0948L37.5719 28.5L27.0948 48.1875H18.4277L28.9048 28.5L18.4277 8.8125Z"
              fill="#007180"
            />
          </svg>
          <StepCard
            step={{
              id: 3,
              title: "Mainnet Launch",
              tasks: [
                "Development Of POI And AIVM",
                "Governance Framework",
                "Community Engagement",
              ],
            }}
            clssName="w-full md:w-[calc(25%-56px)] lg:w-[calc(33%-56px)]"
          />
        </div>
        <Carousel
          className=""
          plugins={[autoplay({ delay: 3000 })]} // Add autoplay plugin here
        >
          <CarouselContent className="justify-">
            <CarouselItem className="basis-full  lg:basis-1/3 ">
              <StepCard
                step={{
                  id: 1,
                  title: "Prototype Development",
                  tasks: [
                    "Development Of POI And AIVM",
                    "Governance Framework",
                    "Community Engagement",
                  ],
                }}
                clssName="w-full "
              />
            </CarouselItem>

            <CarouselItem className="basis-full  lg:basis-1/3">
              <StepCard
                step={{
                  id: 2,
                  title: "Testnet Rollout",
                  tasks: [
                    "Development Of POI And AIVM",
                    "Governance Framework",
                    "Community Engagement",
                  ],
                }}
                clssName="w-full"
              />
            </CarouselItem>
            <CarouselItem className="basis-full  lg:basis-1/3">
              <StepCard
                step={{
                  id: 3,
                  title: "Mainnet Launch",
                  tasks: [
                    "Development Of POI And AIVM",
                    "Governance Framework",
                    "Community Engagement",
                  ],
                }}
                clssName="w-full"
              />
            </CarouselItem>
            <CarouselItem className="basis-full  lg:basis-1/3">
              <StepCard
                step={{
                  id: 3,
                  title: "Mainnet Launch",
                  tasks: [
                    "Development Of POI And AIVM",
                    "Governance Framework",
                    "Community Engagement",
                  ],
                }}
                clssName="w-full"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className=" -left-[10px]" />
          <CarouselNext className="-right-[10px]" />
        </Carousel>
      </div>
    </section>
  );
};

export default Roadmap;

import { cn } from "@/lib/utils";
import React from "react";

interface StepCardProps {
  step: {
    id: number | string;
    title: string;
    tasks: string[];
    imageSrc?: string; // Optional field for additional image
  };
  clssName?: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, clssName }) => {
  return (
    <div
      key={step.id}
      className={cn(
        "bg-white/[63%] border relative overflow-hidden border-[#92E8F3]  w-full  rounded-[20px] p-6",
        clssName
      )}
    >
      <img
        src="/img/roadmap-vector.svg"
        className="absolute top-0 max-w-[120px] left-0"
        alt="Background Vector"
      />

      {step.imageSrc && (
        <img
          src={step.imageSrc}
          alt="Step Visual"
          className="w-full h-auto object-cover"
        />
      )}

      {/* Step Number */}
      <div className="absolute top-5 left-6 text-skin-dark-green font-fredoka-one text-lg lg:text-4xl rounded-full w-10 h-10 flex items-center justify-center">
        {step.id}
      </div>

      <div className="pt-20">
        {/* Title */}
        <h3 className="font-bold text-xl lg:text-2xl text-skin-gray-black-500 mb-2">
          {step.title}
        </h3>

        {/* Tasks */}
        <ul className="mt-4 text-sm text-gray-600 space-y-2">
          {step.tasks.map((task, idx) => (
            <li key={idx} className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
              >
                <g clipPath="url(#clip0_3457_8619)">
                  <path
                    d="M4.44212 14.7898L2.40909 16.1875V0.8125L4.44212 2.21022M2.34556 14.7898L0.3125 16.1875V0.8125L2.34556 2.21022M15.6875 8.5L4.50566 16.1875V0.8125L15.6875 8.5Z"
                    stroke="#92E8F3"
                    strokeWidth="0.625003"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3781 8.50005L6.38086 4.37695V12.6231L12.3781 8.50005Z"
                    fill="#1D1F2C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3457_8619">
                    <rect
                      width={16}
                      height={16}
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base lg:text-lg font-normal text-skin-gray-black">
                {task}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
