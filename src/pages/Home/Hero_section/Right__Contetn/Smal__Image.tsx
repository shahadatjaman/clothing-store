import React, { FC } from 'react';
import { ButtonStyled, CenteredButton, SmallImageWrapper } from './Styles';
import Image from 'next/image';

interface PropsTypes {
  img_url: string;
  text: string;
  isHovered: boolean;
  mouseEnter: () => void;
  mouseLeave: () => void;
}

const Smal__Image: FC<PropsTypes> = (props) => {
  const { img_url, isHovered, text, mouseEnter, mouseLeave } = props;

  return (
    <SmallImageWrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Image
        src={img_url}
        alt={text}
        width={500}
        height={100}
        layout="responsive"
      />
      <CenteredButton>
        <ButtonStyled isHovered={isHovered}>{text}</ButtonStyled>
      </CenteredButton>
    </SmallImageWrapper>
  );
};

export default Smal__Image;
