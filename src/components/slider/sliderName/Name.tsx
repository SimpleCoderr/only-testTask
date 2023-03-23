import s from './Name.module.scss'

type Props = {
  name: string;
};


const Name = ({ name }: Props) => {
  return <h1 className={s.name}>{name}</h1>;
};

export default Name;
