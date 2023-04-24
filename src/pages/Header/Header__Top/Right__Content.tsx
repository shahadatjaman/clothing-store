import Link from 'next/link';
import React from 'react';
import { SocailItems, SocialItem } from './Styles';
import { socialMedia } from './data';

const Right__Content = () => {
  return (
    <SocailItems>
      {socialMedia?.map((media, index) => (
        <SocialItem key={index}>
          <Link title={media.name} href={media.link}>
            {media.icon}
          </Link>
        </SocialItem>
      ))}
    </SocailItems>
  );
};

export default Right__Content;
