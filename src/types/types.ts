export type ISlide = {
  id: number;
  year1: string;
  year2: string;
  value: Array<ISlideValue>;
  label: string;
};

export type ISlideValue = {
  data: string;
  description: string;
};
