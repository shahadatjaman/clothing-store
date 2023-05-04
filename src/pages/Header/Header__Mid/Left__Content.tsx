import React from 'react';
import { LeftContent, LogoArea, SearchBar } from './Styles';
import Image from 'next/image';
import { logoURL } from './data';
import Search__Bar from './Search__Bar';
import Link from 'next/link';

const Left__Content = () => {
  return (
    <LeftContent>
      <LogoArea>
        <Link href={'/'}>
          <Image src={logoURL} alt="wookie" width={90} height={20} />
        </Link>
      </LogoArea>
      <SearchBar>
        <Search__Bar />
      </SearchBar>
    </LeftContent>
  );
};

export default Left__Content;
