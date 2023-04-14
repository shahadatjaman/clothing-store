import { FC } from 'react';

import {
  ButtonGroupProps,
  ArrowProps,
  DotProps,
} from 'react-multi-carousel/lib/types';
import { Button, ButtonsGroups, LeftArrow, RightArrow } from './Styles';

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
  buttonsPosition: 'left-right' | 'top-right';
}

const ButtonGroup = ({
  next,
  previous,
  goToSlide,
  buttonsPosition,
  ...rest
}: CarouselButtonGroupProps) => {
  return (
    <ButtonsGroups buttonsPosition={buttonsPosition}>
      <Button buttonType="prev" onClick={previous}>
        <LeftArrow />
      </Button>
      <Button buttonType="next" onClick={next}>
        <RightArrow />
      </Button>
    </ButtonsGroups>
  );
};

export default ButtonGroup;
