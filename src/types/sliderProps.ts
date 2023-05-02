interface ItemsProps {
  name: string;
}

interface SliderProps {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface SliderPropsTypes {
  items: ItemsProps[];
  seting: SliderProps;
}
