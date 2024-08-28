"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Slider = () => {
  const router = useRouter();
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
    "/slider/1.png",
    "/slider/image2.png",
    "/slider/image3.png",
    "/slider/image4.png",
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        containScroll: "keepSnaps",
        slidesToScroll: 1,
      }}
      plugins={[autoplayRef.current]}
      className="w-auto my-5 mx-auto"
    >
      <CarouselPrevious
        disabled={false}
        className="hidden md:flex absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
      />
      <CarouselContent className="-ml-3">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
          >
            <Image
              width={767}
              height={500}
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                userSelect: "none",
                pointerEvents: "none",
              }}
              priority={true}
              className="rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
        disabled={false}
        className="hidden md:flex absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
      />
    </Carousel>
  );
};

export default Slider;
