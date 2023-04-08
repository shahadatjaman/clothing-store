
import styled from "styled-components";
import Image from 'next/image';

 
 /* Define interface for props */
 
interface DescriptionProps {
  isHovered: boolean;
};


/* Define interface for props */

interface HoverProps {
  isHovered: boolean;
};




/* Wrapper component */

export const Wrapper = styled.div``;


/* Product Container */

export const Container = styled.div`
   max-width: 300px;
   height: 470px;
   position: relative;
   overflow: hidden;
`;



/* ProductImage component */

export const ProductImage = styled.div`
  position: relative;
`;


/* Img component */

export const Img = styled(Image)`
  // Add styles for img component
`;


/* Description component */

export const Description = styled.div<DescriptionProps>`
  background: ${({theme}) => theme.colors?.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 16px;
  position: absolute;
  width: 100%;
  bottom: ${(props) => props.isHovered ? '2%' : '-14%'};
  transition: all 0.2s ease-out;
`;


/* ProductTitle component */

export const ProductTitle = styled.h2`
  font-family: ${({theme}) => theme.fontFamily?.hind ?? theme.fontFamily?.sansSerif};
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
`;





/* ProductRating component */

export const ProductRating = styled.div`
  margin : 0.4rem 0;
`;


/* ProductPrice component */

export const ProductPrice = styled.div`
  // Add styles for product price component
`;


/* Money component */

export const Money = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;


/* HoverContent component */

export const HoverContent = styled.div<HoverProps>`
  transition: all 0.2s ease-out;
`;


/* ProductButton component */

export const AddToCartButton = styled.div`
  margin-top: 20px;
`;


