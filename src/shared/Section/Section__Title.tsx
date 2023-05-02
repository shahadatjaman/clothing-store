import React, { FC } from 'react';
import { ColoredText, H4, H5, SectionTitle } from './Styles';

interface PropsTypes {
  title: string;
  sub_ttile: string;
  coloredTitle?: string;
}

const Section__Title: FC<PropsTypes> = (props) => {
  const { title, coloredTitle, sub_ttile } = props;
  return (
    <SectionTitle>
      <H4>
        {coloredTitle && <ColoredText>{coloredTitle}</ColoredText>} {title}
      </H4>
      <H5>{sub_ttile}</H5>
    </SectionTitle>
  );
};

export default Section__Title;
