import s from "./Center.module.scss";
import Circle from "./circle/Circle";
import TextCenter from "./text/TextCenter";
type Props = {};
const Center = ({}: Props) => {
  return (
    <div className={s.center}>
      <Circle />
      <TextCenter />
    </div>
  );
};

export default Center;
