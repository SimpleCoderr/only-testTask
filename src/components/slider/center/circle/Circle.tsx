import { useContext, useEffect, useRef, useState } from "react";
import { toRadian } from "../../../../ts/degToRadian";
import { getNewCoordOfDot } from "../../../../ts/getNewCoordOfDot";
import { setNewCoordForDot } from "../../../../ts/setNewCoordForDot";
import { SliderContext } from "../../Slider";
import s from "./Circle.module.scss";

type Props = {};

const Circle = ({}: Props) => {
  const { currentSlider, sliderNumber, setSliderNumber, totalDots } =
    useContext(SliderContext);

  const circleRef = useRef<HTMLDivElement | null>(null);
  const [degree, setDegree] = useState(30);
  const [prevSlider, setPrevSlider] = useState(sliderNumber);

  useEffect(() => {
    if (circleRef.current) {
      const circleRadius = circleRef.current.getBoundingClientRect().height / 2;
      const angleInRad = toRadian(360 / totalDots);

      const circleDots = Array.from(
        circleRef.current.children
      ) as Array<HTMLElement>;

      circleDots.forEach((dot, index) => {
        const { x, y } = getNewCoordOfDot(circleRadius, angleInRad, index);
        setNewCoordForDot(dot, x, y);
      });
    }
  }, []);

  useEffect(() => {
    let grad = 0;
    if (prevSlider < sliderNumber) {
      const ratioDeg = ((sliderNumber - prevSlider) / totalDots) * 360;
      grad = ratioDeg > 180 ? ratioDeg - 360 : ratioDeg;
    } else {
      const ratioDeg = ((prevSlider - sliderNumber) / totalDots) * 360;
      grad = ratioDeg > 180 ? 360 - ratioDeg : -ratioDeg;
    }
    setDegree((deg) => deg + grad);
    setPrevSlider(sliderNumber);
  }, [sliderNumber]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.transform = `rotate(${degree}deg)`;
      const children = Array.from(circleRef.current.children);
      children.forEach((dot) => {
        (
          dot.firstChild as HTMLDivElement
        ).style.transform = `rotate(${-degree}deg)`;
      });
    }
  }, [degree]);

  const arrDots = [];
  for (let i = 1; i <= totalDots; i++) {
    arrDots.push(i);
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.dataset.number) {
      setSliderNumber(+e.currentTarget.dataset.number);
    }
  };
  return (
    <div ref={circleRef} className={s.circle}>
      {arrDots.map((dot) => (
        <div
          key={dot}
          style={{ content: `${dot}` }}
          className={`${s.dot} ${sliderNumber === dot && s.activeDot}`}
          data-number={dot}
          onClick={handleClick}
        >
          <div className={s.dotInner} data-label={currentSlider.label}>
            {dot}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Circle;
