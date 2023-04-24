import React, { useState } from 'react';

import {
  Bottom__Image,
  ButtonStyled,
  CenteredButton,
  SmallImageWrapper,
  TopContent,
} from './Styles';
import Image from 'next/image';
import { bottom_image, small_images } from './data';
import Smal__Image from './Smal__Image';
import { any } from 'prop-types';
import Hover__Button from '@/shared/Hover__Buttoon';

const Right__Contetn = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const { button_sub_title, img_url, button_title } = bottom_image;

  return (
    <>
      <TopContent>
        {small_images?.slice(0, 2)?.map((item, index) => (
          <Smal__Image
            key={index}
            mouseEnter={() => setHoveredIndex(index)}
            mouseLeave={() => setHoveredIndex(-1)}
            img_url={item.img_url}
            text={item.text}
            isHovered={hoveredIndex === index}
          />
        ))}
      </TopContent>
      <Bottom__Image
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={img_url}
          alt={button_title}
          width={600}
          height={260}
          layout="responsive"
        />
        <Hover__Button
          isHovered={isHovered}
          button_sub_title={button_sub_title}
          button_title={button_title}
        />
      </Bottom__Image>
    </>
  );
};

export default Right__Contetn;
