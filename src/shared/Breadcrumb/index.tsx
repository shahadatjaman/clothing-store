import React, { FC } from 'react';
import { Li, Slash, TextLink, Ul, Wrapper } from './Styles';
import { Container, Grid } from '@mui/material';
import { BreadcrumbPropsTypes } from '@/types/BreadcrumbPropsTypes';

const Breadcrumb: FC<BreadcrumbPropsTypes> = (props) => {
  const { first_path, sec_path } = props;
  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Ul>
              <Li>
                <TextLink href={first_path.path}>{first_path.name}</TextLink>
                <Slash>/</Slash>
              </Li>
              <Li>
                <TextLink href={sec_path.path}>{sec_path.name}</TextLink>
              </Li>
            </Ul>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Breadcrumb;
