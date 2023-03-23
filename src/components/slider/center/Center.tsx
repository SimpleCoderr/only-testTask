import s from "./Center.module.scss";
import Circle from "./circle/Circle";
import TextCenter from "./text/TextCenter";
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
      <TextCenter year1={year1} year2={year2}/>
    </div>
  );
};

export default Center;
