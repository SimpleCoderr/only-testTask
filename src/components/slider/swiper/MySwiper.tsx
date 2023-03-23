import s from "./MySwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ISlideValue } from "../../../types";
import { useContext, useLayoutEffect } from "react";
import gsap from "gsap";
import { SliderContext } from "../Slider";

type Props = {};
const MySwiper = ({}: Props) => {
  const {
    currentSlider: { value: sliders },
  } = useContext(SliderContext);

  useLayoutEffect(() => {
    gsap.fromTo(
      `.${s.swiper}`,
      { y: 20, opacity: 0 },
      { duration: 1.5, y: 0, opacity: 1 }
    );
  });
  return (
    <Swiper
      className={s.swiper}
      modules={[Navigation]}
      pagination={{ clickable: true }}
      slidesPerView={3}
      spaceBetween={80}
      navigation={true}
    >
      {sliders.map((slide: ISlideValue) => (
        <SwiperSlide className={s.slide} key={slide.data}>
          <h2 className={s.slideTitle}>{slide.data}</h2>
          <p className={s.slideDescription}>{slide.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
