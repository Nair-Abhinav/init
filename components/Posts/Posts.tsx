import { Calendar, CalendarDays, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Search from "./_components/Search";

const Posts = () => {
  return (
    <>
      <p className="w-full h-auto text-center font-yeseva text-2xl sm:text-6xl mt-4 my-2">
        Recent Posts
      </p>
      <div className="w-full flex flex-col-reverse md:flex-row mb-5">
        <div className="w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="rounded-xl bg-themeforeground shadow-xl flex flex-col 3 p-3">
            <Image
              width={767}
              height={500}
              src={"/slider/1.png"}
              alt={`Slide`}
              style={{
                width: "100%",
                userSelect: "none",
                pointerEvents: "none",
              }}
              priority={true}
              className="rounded-xl !w-full aspect-square"
            />
            <div className="flex flex-col">
              <p className="w-full h-auto text-center font-yeseva text-2xl sm:text-4xl md:text-4xl mt-4 my-2">
                Privacy Policy
              </p>
              <div className="flex justify-between my-2">
                <Label className="flex items-center gap-2 text-sm md:text-lg">
                  <User />
                  Abhinav Nair
                </Label>
                <Label className="flex items-center gap-2 text-sm md:text-lg">
                  <CalendarDays /> Apr 7, 2023
                </Label>
              </div>
              <p className="lext-lg my-2 md:text-xl font-yeseva line-clamp-5 md:line-clamp-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt veritatis exercitationem pariatur rem culpa quisquam ut
                asperiores, aperiam commodi nulla nesciunt maxime, fugit dolorum
                sint id harum dolorem cumque in! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Expedita numquam neque cum,
                perspiciatis dolore modi natus perferendis, ab dolorem
                architecto labore consequuntur? Magnam odit consequuntur
                doloribus quas fugiat illum! Enim.
              </p>
              <Button>Read More</Button>
            </div>
          </div>
          <div className="rounded-xl bg-themeforeground shadow-xl flex flex-col 3 p-3">
            <Image
              width={767}
              height={500}
              src={"/slider/1.png"}
              alt={`Slide`}
              style={{
                width: "100%",
                userSelect: "none",
                pointerEvents: "none",
              }}
              priority={true}
              className="rounded-xl !w-full aspect-square"
            />
            <div className="flex flex-col">
              <p className="w-full h-auto text-center font-yeseva text-2xl sm:text-4xl md:text-4xl mt-4 my-2">
                Privacy Policy
              </p>
              <div className="flex justify-between my-2">
                <Label className="flex items-center gap-2 text-sm md:text-lg">
                  <User />
                  Abhinav Nair
                </Label>
                <Label className="flex items-center gap-2 text-sm md:text-lg">
                  <CalendarDays /> Apr 7, 2023
                </Label>
              </div>
              <p className="lext-lg my-2 md:text-xl font-yeseva line-clamp-5 md:line-clamp-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt veritatis exercitationem pariatur rem culpa quisquam ut
                asperiores, aperiam commodi nulla nesciunt maxime, fugit dolorum
                sint id harum dolorem cumque in! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Expedita numquam neque cum,
                perspiciatis dolore modi natus perferendis, ab dolorem
                architecto labore consequuntur? Magnam odit consequuntur
                doloribus quas fugiat illum! Enim.
              </p>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start px-5">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Posts;
