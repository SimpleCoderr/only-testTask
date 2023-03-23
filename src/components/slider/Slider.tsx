import { createContext, useState } from "react";
import { ISlide } from "../../types";
import Center from "./center/Center";
import Counter from "./counter/Counter";
import Layout from "./layout/Layout";
import s from "./Slider.module.scss";
import Name from "./sliderName/Name";
import MySwiper from "./swiper/MySwiper";

type Props = {
  name: string;
  data: Array<ISlide>;
};

export interface ISlider {
  sliderNumber: number;
  totalSliders: number;
  setSliderNumber: (value: React.SetStateAction<number>) => void;
}

export const SliderContext = createContext<ISlider>({
  sliderNumber: 1,
  totalSliders: 0,
  setSliderNumber: (value: React.SetStateAction<number>) => {},
});

const Slider = ({ name, data }: Props) => {
  const [sliderNumber, setSliderNumber] = useState(1);

  return (
    <SliderContext.Provider
      value={{ sliderNumber, setSliderNumber, totalSliders: data.length }}
    >
      <div className={s.slider}>
        <Name name={name} />
        <Center
          totalDots={data.length}
          sliderNumber={sliderNumber}
          setSliderNumber={setSliderNumber}
          years={{ year1: data[sliderNumber-1].year1, year2: data[sliderNumber-1].year2 }}
        />
        <Counter />
        <MySwiper dataSlider={data[sliderNumber - 1].value} />
        <Layout />
      </div>
    </SliderContext.Provider>
  );
};

export default Slider;
