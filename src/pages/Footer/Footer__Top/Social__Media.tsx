import React from 'react';
import { IconsWrapper, Li, IconLink, Ul, Icon } from './Styles';
import { social_media } from './data';

const Social__Media = () => {
  return (
    <IconsWrapper>
      <Ul>
        {social_media?.map((item, index) => (
          <Li key={index}>
            <IconLink href={item.link}>
              <Icon className={item.icon}></Icon>
            </IconLink>
          </Li>
        ))}
      </Ul>
    </IconsWrapper>
  );
};

export default Social__Media;
