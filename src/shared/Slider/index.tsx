import React, { FC, useState, useEffect } from 'react';
import { Button, Buttons, Column, Container, Row, Wrapper } from './Styles';
import { SliderPropsTypes } from '@/types/sliderProps';

const Slider: FC<SliderPropsTypes> = (props) => {
  const {
    items,
    seting: { slidesToShow },
  } = props;

  const [sliders, setSliders] = useState(items);
  const [show, setShow] = useState(slidesToShow);
  const [skip, setSkip] = useState(0);
  const [index, setIndex] = useState(0);

  const handlePagination = (action: string) => {
    if (action === 'next') {
      setIndex((prevIndex) => prevIndex + 1);
      setSkip((prev) => prev + 1);
      setShow((prev) => prev + 1);
    } else if (action === 'prev') {
      setIndex((prevIndex) => prevIndex - 1);
      setSkip((prev) => prev - 1);
      setShow((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const lastIndex = sliders.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliders]);

  return (
    <Wrapper>
      <Container>
        <Row>
          {sliders.map((item, sliderIndex) => {
            let isActive = false;

            if (show <= sliders.length - 1) {
              if (sliderIndex < show) {
                isActive = true;
              }
            }
            return (
              <Column
                isActive={isActive}
                key={sliderIndex}
                width={100 / slidesToShow}
              >
                {item.name}
              </Column>
            );
          })}
        </Row>
        <Buttons>
          <Button onClick={() => handlePagination('prev')}>👉</Button>
          <Button onClick={() => handlePagination('next')}>👈</Button>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default Slider;
