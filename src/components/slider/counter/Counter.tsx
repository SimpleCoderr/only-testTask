import { useContext } from "react";
import { SliderContext } from "../Slider";
import s from "./Counter.module.scss";

type Props = {};
const Counter = ({}: Props) => {
  const { sliderNumber, setSliderNumber, totalSliders } =
    useContext(SliderContext);

  const handleClickIncrement = () => {
    setSliderNumber(sliderNumber + 1);
  };
  const handleClickDecrement = () => {
    setSliderNumber(sliderNumber - 1);
  };
  return (
    <div className={s.counter}>
      <div className={s.totalCount}>
        {sliderNumber}/{totalSliders}
      </div>
      <div className={s.btns}>
        <button
          className={s.leftBtn}
          disabled={sliderNumber === 1}
          onClick={handleClickDecrement}
        />
        <button
          className={s.rightBtn}
          disabled={sliderNumber === totalSliders}
          onClick={handleClickIncrement}
        />
      </div>
    </div>
  );
};

export default Counter;
