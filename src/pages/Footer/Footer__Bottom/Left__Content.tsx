import React from 'react';
import { LeftContentWrapper, Logo, Text } from './Styles';
import Image from 'next/image';
import { left__Content } from './data';
import Link from 'next/link';

const Left__Content = () => {
  return (
    <LeftContentWrapper>
      <Logo>
        <Link href={'/'}>
          <Image
            src={left__Content.logo}
            alt={'wokiee'}
            width={100}
            height={25}
          />
        </Link>
      </Logo>
      <Text>{left__Content.text}</Text>
    </LeftContentWrapper>
  );
};

export default Left__Content;
