import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
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
    <ButtonsGroups
      className={buttonsPosition === 'top-right' ? 'top-right' : ''}
      buttonsPosition={buttonsPosition}
    >
      <Button className={buttonsPosition} buttonType="prev" onClick={previous}>
        <LeftArrow />
      </Button>
      <Button className={buttonsPosition} buttonType="next" onClick={next}>
        <RightArrow />
      </Button>
    </ButtonsGroups>
  );
};

export default ButtonGroup;
