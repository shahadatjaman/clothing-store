import React from 'react';
import { Li, TextLink, Ul } from './Styles';
import { categories } from './data';
import { Img } from './Styles';

const Categories = () => {
  return (
    <Ul>
      {categories?.map((cate, index) => (
        <Li key={index}>
          <Img src={cate.img_url} alt={cate.name} width={15} height={15} />
          <TextLink href={cate.path}>{cate.name}</TextLink>
        </Li>
      ))}
    </Ul>
  );
};

export default Categories;
