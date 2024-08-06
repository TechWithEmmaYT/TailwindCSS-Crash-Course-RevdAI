import React, { Fragment } from "react";
import Curveline from "@/public/assets/curveline.svg";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  subheading,
  title,
  pill,
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
              to-brand-primary-purple"
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
                text-left
                 text-3xl
                 sm:text-5xl
                 sm:max-w-[750]
                 md:text-center
                 font-semibold
                 "
              >
                {title}
              </h2>
            </div>
            <p
              className="
                dark:text-washed-purple-700
                sm:max-w-[450px]
                md:text-center
                "
            >
              {subheading}
            </p>
          </Fragment>
        ) : (
          <div className="relative">
            <h1
              className="text-center text-[45px] sm:text-[65px]
                 sm:max-w-[850px] md:text-center font-semibold"
            >
              {title}
            </h1>
            <span className="absolute bottom-0 right-11">
              <Curveline />
            </span>
          </div>
        )}
      </section>
    </div>
  );
};

export default TitleSection;
