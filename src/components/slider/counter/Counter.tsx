import { useContext } from "react";
import { SliderContext } from "../Slider";
import s from "./Counter.module.scss";

type Props = {};

const Counter = ({}: Props) => {

  const {sliderNumber, setSliderNumber, totalDots} = useContext(SliderContext)

  const handleClickIncrement = () => {
    setSliderNumber(sliderNumber + 1);
  };
  const handleClickDecrement = () => {
    setSliderNumber(sliderNumber - 1);
  };
  return (
    <div className={s.counter}>
      <div className={s.totalCount}>
        {`${sliderNumber}`.padStart(2,'0')}/{`${totalDots}`.padStart(2,'0')}
      </div>
      <div className={s.btns}>
        <button
          className={s.leftBtn}
          disabled={sliderNumber === 1}
          onClick={handleClickDecrement}
        />
        <button
          className={s.rightBtn}
          disabled={sliderNumber === totalDots}
          onClick={handleClickIncrement}
        />
      </div>
    </div>
  );
};

export default Counter;
