import Footer from "@/components/Footer/Footer";
import Posts from "@/components/Posts/Posts";
import Slider from "@/components/Slider/Slider";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Slider />
      <Posts/>
    </div>
  );
};

export default page;
