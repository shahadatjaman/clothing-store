import React from 'react';
import { Attribute, H4, Li, Ul } from './Styles';
import { contact_us } from './data';

const Contact__us = () => {
  return (
    <>
      <H4>Contact Us</H4>
      <Ul>
        {contact_us?.map((item, index) => (
          <Li key={index}>
            <Attribute>{item.attribute + ': '}</Attribute>
            {item.value}
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default Contact__us;
