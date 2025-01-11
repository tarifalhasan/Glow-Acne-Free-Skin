const ROADMAP_DATA = [
  {
    id: 1,
    title: "Prototype Development",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
  {
    id: 2,
    title: "Testnet Rollout",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
  {
    id: 3,
    title: "Mainnet Launch",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
  {
    id: 4,
    title: "App Development",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
  {
    id: 5,
    title: "Web Development",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
  {
    id: 6,
    title: "Blockchain",
    tasks: [
      "Development of POI and AIVM",
      "Governance Framework",
      "Community Engagement",
    ],
  },
];

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="py-14 scroll-mt-10 lg:py-10 xl:py-24 lg:mt-10"
    >
      <div className=" relative overflow-hidden ">
        <div className="text-center mb-7 container ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-fredoka-one  mb-4 text-skin-dark-green">
            Glow Acne Skin Roadmap
          </h2>
        </div>
        <Marquee pauseOnHover className="[--duration:30s]  items-center">
          {ROADMAP_DATA.map((item) => (
            <div key={item.id} className="flex items-center w-full">
              <StepCard step={item} clssName="w-full " />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={56}
                height={57}
                viewBox="0 0 56 57"
                fill="none"
                className="ml-4"
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
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Roadmap;

import { Marquee } from "@/components/ui/marquee";
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
