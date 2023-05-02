import React from 'react';
import { Li, RightContentWrapper, Ul } from './Styles';
import Link from 'next/link';
import { payment_methods } from './data';
import Image from 'next/image';

const Right__Content = () => {
  return (
    <RightContentWrapper>
      <Ul>
        {payment_methods?.map((item, index) => (
          <Li key={index}>
            <Link href={'/'}>
              <Image src={item.logo} width={65} height={20} alt={item.name} />
            </Link>
          </Li>
        ))}
      </Ul>
    </RightContentWrapper>
  );
};

export default Right__Content;
