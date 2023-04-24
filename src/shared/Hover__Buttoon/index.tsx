import React, { FC } from 'react';
import { CenteredText, Contetn, H3, H4 } from './Styles';
interface PropsTypes {
  isHovered: boolean;
  button_sub_title: string;
  button_title: string;
}

const Hover__Button: FC<PropsTypes> = (props) => {
  const { button_sub_title, button_title, isHovered } = props;
  return (
    <Contetn>
      <CenteredText isHovered={isHovered}>
        <H4>{button_sub_title}</H4>
        <H3>{button_title}</H3>
      </CenteredText>
    </Contetn>
  );
};

export default Hover__Button;
