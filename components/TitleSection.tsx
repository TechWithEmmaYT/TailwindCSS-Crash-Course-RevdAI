import React, { Fragment } from "react";
import Curveline from "@/public/assets/curveline.svg";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
  isCurveline?: boolean;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  subheading,
  title,
  pill,
  isCurveline,
}) => {
  return (
    <div>
      <section
        className="flex 
              flex-col gap-4
              justify-center
              items-center
              "
      >
        <div
          className="
              rounded-full p-[1px] font-normal 
              text-[11.87px]
              bg-gradient-to-r
              from-brand-primary-blue
              to-brand-primary-purple mb-5"
        >
          <div
            className="rounded-full mx-auto px-4 py-2
           bg-black"
          >
            {pill}
          </div>
        </div>

        {subheading ? (
          <Fragment>
            <div className="relative">
              <h2
                className="
                text-center
                 text-[35px] 
                 sm:text-[55px]
                 sm:max-w-[750]
                 md:text-center
                 leading-tight
                 font-bold
                 "
              >
                {title}
              </h2>
              {isCurveline && (
                <span className="absolute bottom-0 right-11">
                  <Curveline />
                </span>
              )}
            </div>
            <p
              className="
                text-washed-purple-700
                sm:max-w-[450px]
                md:text-center
                text-[13px]
                sm:text-[16px]
                "
            >
              {subheading}
            </p>
          </Fragment>
        ) : (
          <div className="relative">
            <h1
              className="text-center text-[45px] sm:text-[65px]
                 sm:max-w-[850px] md:text-center 
                      leading-tight
                 font-bold"
            >
              {title}
            </h1>
            {isCurveline && (
              <span className="absolute -bottom-2 right-10 lg:right-24">
                <Curveline />
              </span>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default TitleSection;
