import React, { FC, useState } from 'react';
import { SliderPropsTypes } from '../Types/SliderPropsTypes';
import { ItemWrapper } from './Styles';
import Hover__Button from '@/shared/Hover__Buttoon';
import Image from 'next/image';

const Slider__Item: FC<SliderPropsTypes> = (props) => {
  const { img_url, button_sub_title, button_title } = props;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <ItemWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={img_url}
        alt={button_title}
        width={100}
        height={300}
        layout="responsive"
      />
      <Hover__Button
        button_sub_title={button_sub_title}
        button_title={button_title}
        isHovered={isHovered}
      />
    </ItemWrapper>
  );
};

export default Slider__Item;
