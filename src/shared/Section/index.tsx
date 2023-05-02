import React, { FC } from 'react';
import { SectionStyled } from './Styles';
import { Container } from '@mui/material';

interface SectionProps {
  children: any;
}

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <SectionStyled>
      <Container maxWidth={'lg'}>{children}</Container>
    </SectionStyled>
  );
};

export default Section;
