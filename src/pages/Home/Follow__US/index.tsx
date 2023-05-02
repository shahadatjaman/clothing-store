import React from 'react';
import Section__Title from '@/shared/Section/Section__Title';
import { Grid } from '@mui/material';
import { AiOutlineInstagram } from 'react-icons/ai';
import { products } from './data';
import { HoveredContent, Item } from './Styles';
import Image from 'next/image';
import Link from 'next/link';

const Follow__US = () => {
  return (
    <>
      <Section__Title
        title="US ON"
        sub_ttile="instagram"
        coloredTitle="@ FOLLOW"
      />
      <Grid container spacing={0}>
        {products?.map((product, index) => (
          <Grid key={index} item xs={2}>
            <Item>
              <Link href={product.link} target="_blank">
                <Image
                  src={product.img}
                  alt={product.link}
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <HoveredContent>
                  <AiOutlineInstagram />
                </HoveredContent>
              </Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Follow__US;
