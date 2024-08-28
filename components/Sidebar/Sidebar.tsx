"use client";
import { ChevronLeft, Home } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSliderToggler from "@/store/slider-toggler";
import { Menus } from "./data";
import CreateProject from "../CreateProject/CreateProject";

const Menu = ({
  Logo,
  name,
  href,
  open,
}: {
  Logo: any;
  name: string;
  href: string;
  open: boolean;
}) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === href;

  return (
    <>
      <Link href={href}>
        <div
          className={` flex gap-x-2 font-medium py-3 duration-300 rounded-md ${
            open ? "pl-[20px]" : "flex justify-center items-center"
          } ${isActive ? "bg-themelight " : ""} ${
            isHovered && !isActive ? "bg-themelight" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Logo
            size={25}
            className={` ${
              isActive || isHovered ? "stroke-theme" : "var(--textlight)"
            }`}
          />
          <h5
            className={`duration-200 text-[20px] ${
              isActive || isHovered ? "text-themelight" : ""
            } ${open ? "block" : "hidden"}`}
            style={{
              color:
                isActive || isHovered ? "var(--theme)" : "var(--textlight)",
            }}
          >
            {name}
          </h5>
        </div>
      </Link>
    </>
  );
};

const SideBar = () => {
  const { isOpen, expanded, setExpanded } = useSliderToggler() as {
    isOpen: boolean;
    expanded: boolean;
    setExpanded: (value: boolean) => void;
  };

  return (
    // <div className="fixed top-0 left-0">
    <div
      className={` ${
        isOpen ? "translate-x-0 block" : "-translate-x-full hidden"
      } ${
        expanded
          ? "w-[260px] px-[20px] fixed md:relative top-0 left-0"
          : "w-[80px] px-[10px]"
      } transform transition-all duration-300 ease-in-out flex flex-col shadow-lg bg-themeforeground !z-10 `}
    >
      <div className="bg-themebackground rounded-full absolute -right-3 top-6">
        <div className="m-1 bg-theme rounded-full">
          <ChevronLeft
            size={25}
            className={`stroke-whiteblack cursor-pointer  ${
              !expanded && "rotate-180"
            }`}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      </div>
      <div className=" min-h-[64px] flex overflow-hidden gap-x-2 items-center mt-[15px] ">
        <Image
          alt="logo"
          src="/logo.jpg"
          width={50}
          height={50}
          className={`cursor-pointer duration-500 ${
            expanded && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-textbold playfair-display origin-left text-3xl font-bold duration-200 ${
            !expanded && "scale-0"
          }`}
        >
          Tech
        </h1>
      </div>
      <CreateProject />
      <div className="flex-1">
        <div className="h-full mt-3 flex flex-col gap-y-1 overflow-y-auto">
          {Menus.map((menu, index) => (
            <Menu
              key={index}
              name={menu.name}
              href={menu.href}
              Logo={menu.logo}
              open={expanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
