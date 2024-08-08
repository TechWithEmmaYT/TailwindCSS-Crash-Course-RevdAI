import React from "react";
import TitleSection from "./TitleSection";
import Curveline from "@/public/assets/curveline.svg";
import ArrowCircleRight from "@/public/assets/arrow-circle-right.svg";

const CallToActionSection = () => {
  return (
    <section
      className="w-full h-[550px] px-4 pb-10
    sm:px-6 mt-[120px] flex justify-center items-center flex-col relative"
    >
      <div className="flex flex-col justify-center items-center text-center max-w-[90%] md:max-w-[60%] xl:max-w-[550px] ">
        <div className="relative h-fit">
          <TitleSection
            pill=""
            title="Be Part of the future Revd.ai"
            subheading="Unleashed the power of AI within Revd.ai . Ugrade your productivity with  Revd.ai , the open AI platform"
          />
          <span className="absolute bottom-[55px] right-60 md:right-7 lg:right-40">
            <Curveline />
          </span>
        </div>
        <br />
        <button
          className="w-[240px] h-16 p-[1px] rounded-[15px]
          bg-gradient-to-r
              from-brand-primary-purple
              to-brand-primary-blue  bg-opacity-30"
        >
          <span
            className="flex items-center gap-3 justify-center w-full 
                h-full rounded-[15px] bg-black text-[24px] font-medium text-brand-washed-purple"
          >
            Get Started
            <ArrowCircleRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
