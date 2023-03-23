import { createContext, useEffect, useState } from "react";
import { ISlide } from "../../types/types";
import Center from "./center/Center";
import Counter from "./counter/Counter";
import Layout from "./layout/Layout";
import s from "./Slider.module.scss";
import Name from "./sliderName/Name";
import MySwiper from "./swiper/MySwiper";
import "./../../scss/Swiper.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  name: string;
  data: Array<ISlide>;
};

export interface ISlider {
  currentSlider: ISlide;
  sliderNumber: number;
  setSliderNumber: (value: React.SetStateAction<number>) => void;
  totalDots: number;
}

export const SliderContext = createContext<any>({});

const Slider = ({ name, data }: Props) => {
  const [sliderNumber, setSliderNumber] = useState(1);
  const [currentSlider, setCurrentSlider] = useState<ISlide>(data[0]);

  const isAboveMediumScreens = useMediaQuery("(max-width: 320px)");

  useEffect(() => {
    setCurrentSlider(data[sliderNumber - 1]);
  }, [sliderNumber]);

  return (
    <SliderContext.Provider
      value={{
        currentSlider,
        sliderNumber,
        setSliderNumber,
        totalDots: data.length,
      }}
    >
      <div className={s.slider}>
        <Name name={name} />
        <Center />
        {!isAboveMediumScreens ? (
          <>
            <Counter />
            <MySwiper />
          </>
        ) : (
          <>
            <MySwiper />
            <Counter />
          </>
        )}
        {!isAboveMediumScreens && <Layout />}
      </div>
    </SliderContext.Provider>
  );
};

export default Slider;
