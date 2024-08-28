import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-themeforeground flex flex-col p-3 w-full rounded-xl gap-1 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <Input
            name="couponCode"
            type="text"
            className="flex-grow bg-themebackground"
            placeholder="Enter Topics"
            autoComplete="off"
          />
          <Button>Search</Button>
        </div>
      </div>
        <div className="section topics mt-8">
          <h2 className="section-title text-lg font-bold">Topics</h2>
          <ul className="list-none p-0 m-0 border-t border-gray-200">
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Machine Learning
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Deep Learning
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Reinforcement Learning
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Robotics
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Natural Language Processing
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Computer Vision
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 hover:pl-4 transition-all duration-300"
              >
                Internet of Things
              </a>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Search;
