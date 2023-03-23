import s from "./MySwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation  } from "swiper";
import dataSlider from "../../../API";

import 'swiper/css';
import 'swiper/css/navigation';
import { ISlideValue } from "../../../types";

type Props = {
  dataSlider: Array<ISlideValue>;
}
const MySwiper = ({dataSlider}: Props) => {
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
