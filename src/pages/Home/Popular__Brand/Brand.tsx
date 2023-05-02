import React, { FC } from 'react';
import { BrandWrapper } from './Styles';
import Image from 'next/image';

interface PropsTypes {
  name: string;
  img: string;
}

const Brand: FC<PropsTypes> = (props) => {
  const { img, name } = props;
  return (
    <BrandWrapper>
      <Image src={img} alt={name} width={120} height={28} />
    </BrandWrapper>
  );
};

export default Brand;
