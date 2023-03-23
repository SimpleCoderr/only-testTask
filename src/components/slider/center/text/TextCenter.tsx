import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { SliderContext } from "../../Slider";
import s from "./TextCenter.module.scss";
type Props = {};
const TextCenter = ({}: Props) => {
  const {currentSlider: {year1, year2}} = useContext(SliderContext)
  const [prevYears, setPrevYears] = useState({
    year1: +year1,
    year2: +year2,
  });

  useEffect(() => {
      const a: any = {
        value1: +prevYears.year1,
        value2: +prevYears.year2
      };
      gsap.to(a, {
        duration: 1.5,
        value1: `+=${+year1 - prevYears.year1}`,
        value2: `+=${+year2 - prevYears.year2}`,
        roundProps: "value1, value2",
        ease: "ease-in-out",
        onUpdate()  {
          setPrevYears({year1: Math.ceil(a.value1), year2: Math.ceil(a.value2)})
        },
      });

  }, [year1]);
  return (
    <div className={s.text}>
      <div className={s.leftYear}>{prevYears.year1}</div>
      <div className={s.rightYear}>{prevYears.year2}</div>
    </div>
  );
};

export default TextCenter;
