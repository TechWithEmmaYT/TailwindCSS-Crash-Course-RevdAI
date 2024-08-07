import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import TitleSection from "./TitleSection";
import { DUMMY_USERS } from "@/constant";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className="w-full px-4
    sm:px-6 mt-[200px] flex justify-center items-center flex-col relative"
    >
      <div
        className="w-[60%] blur-[120px]
        rounded-full h-32 
      bg-brand-primary-purple/90 -z-10 top-10
      absolute"
      />

      <div className="flex justify-center items-center max-w-[60%] lg:max-w-[100%]">
        <TitleSection
          pill="Testimonials"
          title="Trusted by all"
          subheading="Join thousands of satisfied users who rely on our platform for their
personal and professional productivity needs."
        />
      </div>
      <div
        className="w-full mt-10
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
      >
        {[...Array(2)].map((arr, index) => (
          <div
            key={randomUUID()}
            className={twMerge(
              clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                "flex-row-reverse": index === 1,
                "animate-[slide_250s_linear_infinite]": true,
                "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                "ml-[100vw]": index === 1,
              }),
              "hover:paused"
            )}
          >
            {DUMMY_USERS.map((item, i) => (
              <TestimonialCard
                key={item.name}
                cardHeader={
                  <div className="flex items-center gap-4 ">
                    <div className="avatar w-16 h-16 rounded-full p-[1px] border-1 bg-washed-purple-500">
                      <Image
                        src={`https://i.pravatar.cc/180?img=${i + 9}`}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-washed-purple-50 text-[16px] leading-[15px]">
                        {item.name}
                      </h5>
                      <p className="text-neutrals-7 italic ">
                        @{item.name?.toLowerCase()}
                      </p>
                    </div>
                  </div>
                }
                cardBody={
                  <p className="text-washed-purple-800 text-[16px] mt-4">
                    {item.message}
                  </p>
                }
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
