import s from "./Center.module.scss";
import Circle from "./circle/Circle";
type Props = {
  totalDots: number;
  sliderNumber: number;
  setSliderNumber: (value: React.SetStateAction<number>) => void;
  years: {
    year1: string;
    year2: string;
  };
};
const Center = ({
  totalDots,
  sliderNumber,
  years: { year1, year2 },
  setSliderNumber,
}: Props) => {
  return (
    <div className={s.center}>
      <Circle
        totalDots={totalDots}
        sliderNumber={sliderNumber}
        setSliderNumber={setSliderNumber}
      />
      <div className={s.years}>
        <div className={s.leftYear}>{year1}</div>
        <div className={s.rightYear}>{year2}</div>
      </div>
    </div>
  );
};

export default Center;
