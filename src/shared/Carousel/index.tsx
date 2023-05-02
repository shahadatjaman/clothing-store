import React, { FC } from 'react';
import { responsive } from './responsiveQuery';
import { CarouselPropsTypes } from '@/types/CarouselPropsTypes';
import ButtonGroup from './CustomeButtons';
import { CarouselWrapper } from './Styles';

const Slider: FC<CarouselPropsTypes> = (props) => {
  const { children, respon, buttonsPosition, draggable } = props;
  return (
    <CarouselWrapper
      buttonsPosition={buttonsPosition}
      ssr={true}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: respon?.device === 'desktop' ? respon.items : 1,
          slidesToSlide: 1,
          paritialVisibilityGutter: 60,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: respon?.device === 'tablet' ? respon.items : 1,
          paritialVisibilityGutter: 50,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: respon?.device === 'mobile' ? respon.items : 1,
          paritialVisibilityGutter: 30,
        },
      }}
      customButtonGroup={<ButtonGroup buttonsPosition={buttonsPosition} />}
      removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
      draggable={draggable}
      itemClass="mx-1"
    >
      {children}
    </CarouselWrapper>
  );
};

export default Slider;
