import React from "react";
import Image from "next/image";
import Comapny1 from "@/public/images/company1.png";
import Comapny2 from "@/public/images/company2.png";
import Comapny3 from "@/public/images/company3.png";
import Comapny4 from "@/public/images/company4.png";

const CompanySection = () => {
  const COMPANIES = [
    { name: "Company1", logo: Comapny1 },
    { name: "Company2", logo: Comapny2 },
    { name: "Company3", logo: Comapny3 },
    { name: "Company4", logo: Comapny4 },
  ];
  return (
    <section className="relative text-center my-9">
      <p className="text-[16px] font-bold text-washed-purple-900">
        HELPING PEOPLE CONNECT WITH AI AT{" "}
      </p>
      <ul
        className="overflow-hidden flex
          after:content['']
          after:from-brand-dark
          after:to-transparent
          after:bg-gradient-to-l
          after:right-0
          after:top-0
          after:bottom-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:from-brand-dark
            before:to-transparent
            before:bg-gradient-to-r
            before:left-0
            before:top-0
            before:bottom-0
            before:w-20
            before:z-10
            before:absolute
        "
      >
        {[...Array(2)].map((arr) => (
          <li
            key={arr}
            className="flex 
                  flex-nowrap
                   animate-slide"
          >
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="relative 
                  w-[150px] m-20 my-10
                  shrink-0 flex items-center"
              >
                <Image
                  src={company.logo}
                  alt=""
                  width={150}
                  className="object-contain max-w-none"
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompanySection;
