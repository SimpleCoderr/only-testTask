import s from "./MySwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ISlideValue } from "../../../types/types";
import { useContext, useLayoutEffect } from "react";
import gsap from "gsap";
import { SliderContext } from "../Slider";
import useMediaQuery from "../../../hooks/useMediaQuery";

type Props = {};
const MySwiper = ({}: Props) => {
  const {
    currentSlider: { value: sliders },
  } = useContext(SliderContext);

  const isAboveMediumScreens = useMediaQuery("(max-width: 320px)");

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
      modules={[Navigation, Pagination]}
      pagination={isAboveMediumScreens ? true :  false}
      slidesPerView={isAboveMediumScreens ? 1 : 3}
      spaceBetween={isAboveMediumScreens ? 25 : 80}
      navigation={isAboveMediumScreens ? false : true}
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
