import React, { FC } from 'react';
import { H4, Li, TextLink, Ul } from './Styles';

interface Obj {
  name: string;
  path: string;
}

interface PropsTypes {
  colllapse_title: string;
  items?: Obj[];
  text?: string;
}

const Collapse: FC<PropsTypes> = (props) => {
  const { colllapse_title, items, text } = props;
  return (
    <>
      <H4>{colllapse_title}</H4>
      <Ul>
        {text && <Li>{text && text}</Li>}
        {items?.map((cate, index) => (
          <Li key={index}>
            <TextLink href={cate.path}>
              {cate.name}
              {text && text}
            </TextLink>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Collapse;
