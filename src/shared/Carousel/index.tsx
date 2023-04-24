import React, { FC } from 'react';
import { responsive } from './responsiveQuery';
import { CarouselPropsTypes } from '@/types/CarouselPropsTypes';
import ButtonGroup from './CustomeButtons';
import { CarouselWrapper } from './Styles';

const Slider: FC<CarouselPropsTypes> = (props) => {
  const { children } = props;
  return (
    <CarouselWrapper
      buttonsPosition="top-right"
      ssr={true}
      responsive={responsive}
      customButtonGroup={<ButtonGroup buttonsPosition={'top-right'} />}
      removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
      draggable={false}
    >
      {children}
    </CarouselWrapper>
  );
};

export default Slider;
