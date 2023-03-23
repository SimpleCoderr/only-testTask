import s from "./MySwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation  } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import { ISlideValue } from "../../../types";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  dataSlider: Array<ISlideValue>;
}
const MySwiper = ({dataSlider}: Props) => {
  const swiperSlideRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
      gsap.fromTo(`.${s.swiper}`, { y: 20, opacity:0}, { duration: 1.5, y:0, opacity:1 })
  })
  return (
      <Swiper 
        className={s.swiper}
        modules={[Navigation]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={80}
        navigation={true}
      >
        {dataSlider.map((slide) => (
          <SwiperSlide className={s.slide} key={slide.data}>
            <h2 className={s.slideTitle}>{slide.data}</h2>
            <p className={s.slideDescription}>{slide.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default MySwiper;
