import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { FOOTER_MENUS } from "@/constant";

const FooterSection = () => {
  return (
    <div className="w-full min-h-[500px] mt-4 border-t border-neutrals-11">
      <div className="w-full max-w-full lg:max-w-[90%] px-[30px] lg:px-[103px] pt-[100px] mx-auto">
        <div className="w-full">
          <Link href="/" className="w-auto shrink-0 flex justify-start">
            <Image src={Logo} alt="Revd.ai Logo" width={126} height={34} />
          </Link>
          <p className="mt-4 text-[15.05px] text-white/90 font-normal">
            Lorem ipsum dolor sit amet consectetur. Viverra accumsan nunc elit
            eu morbi eros quisque. Vitae feugiat ipsum lectus amet suspendisse
            nullam feugiat purus leo. Tellus tellus hac orci vitae.
          </p>
        </div>
        <div className="w-full flex flex-wrap items-start pt-10">
          {FOOTER_MENUS.map((menu, index) => (
            <ul key={index} className="flex-1 basis-1/3 lg:basis-0">
              <li className="mb-2">
                <h5 className="text-[18.81px] font-semibold text-white">
                  {menu.title}
                </h5>
              </li>
              {menu.items.map((item) => (
                <li key={item.id} className="mb-2">
                  <Link
                    href="#"
                    className="text-[15px] text-white/90 font-normal"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
