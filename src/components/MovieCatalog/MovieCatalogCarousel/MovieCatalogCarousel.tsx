import "swiper/css";
import React, { Children, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCatalogCarouselArrows from "../MovieCatalogCarouselArrows/MovieCatalogCarouselArrow";
import "./MovieCatalogCarousel.scss";

type MovieCatalogCarouselProps = {
  children: React.ReactNode;
};

export default function MovieCatalogCarousel({ children }: MovieCatalogCarouselProps) {
  const carouselRef = useRef<any>(null);
  const swiperProps = {
    spaceBetween: 20,
    slidesPerView: 10,
    slidesPerGroup: 10,
    crossFade: "true",
    effect: "fade",
    modules: [Navigation],
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: "swiper-button-disabled",
    },
  };

  // useEffect(() => {
  //   carouselRef?.current?.swiper?.changeLanguageDirection("rtl");
  // }, []);
  console.log(carouselRef);

  return (
    <Swiper {...swiperProps} ref={carouselRef}>
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      <MovieCatalogCarouselArrows />
    </Swiper>
  );
}
