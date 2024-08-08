import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import ArrowDown from "@/public/assets/dropdown.svg";

const menus = [
  {
    title: "Products",
    href: "#products",
    hasChild: true,
  },
  {
    title: "Resources",
    href: "#resources",
    hasChild: true,
  },
  {
    title: "Pricing",
    href: "#pricing",
    hasChild: false,
  },
  {
    title: "Downloads",
    href: "#downloads",
    hasChild: false,
  },
  {
    title: "Contact Us",
    href: "#contact-us",
    hasChild: false,
  },
];

const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-[9999] bg-brand-dark w-full px-[43px] py-[12px] h-[79px] flex justify-between items-center border-b border-neutrals-11">
      <Link href="/" className="w-auto shrink-0 flex justify-start">
        <Image src={Logo} alt="Revd.ai Logo" width={126} height={34} />
      </Link>

      <div className="hidden lg:block">
        <ul
          className="flex items-center gap-6 px-8 py-3.5
        rounded-[30px] border border-neutrals-12"
        >
          {menus.map((menu) => (
            <li
              key={menu.href}
              className="w-auto text-white text-[16px] font-normal"
            >
              <Link href={menu.href} className="w-auto flex items-center gap-2">
                <span>{menu.title}</span>
                {menu.hasChild && <ArrowDown />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <aside className="flex items-center gap-6">
        <button className="flex items-center h-10 text-[16px] font-normal text-white">
          Login
        </button>
        <button
          className="flex items-center h-10 text-[16px]
                    whitespace-nowrap p-[1px] bg-gradient-to-r from-brand-primary-blue to-brand-primary-purple/50 rounded-[15px]
        "
        >
          <span
            className="flex items-center px-[23px] h-full rounded-[15px] text-[16px] bg-black font-normal text-white
           bg-gradient-to-tr from-black to-[#46445b]/20"
          >
            Sign up
          </span>
        </button>
      </aside>
    </nav>
  );
};

export default NavigationBar;
