import { Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";

import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation]} {...settings}>
      {children}
    </Swiper>
  );
}
export default Slider;
