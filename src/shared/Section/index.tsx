import React, { FC } from 'react';
import { SectionStyled } from './Styles';

interface SectionProps {
  children: any;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
