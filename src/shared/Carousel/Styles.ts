import styled from "styled-components";
import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('react-multi-carousel'));
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface CurouselPropsTypes {
    buttonsPosition?: 'top-right' | 'left-right';
    buttonType?: 'next' | 'prev';
    mx?: number;
};
export const CarouselWrapper = styled(Carousel)<CurouselPropsTypes>`
   position: relative;
`;


export const ButtonsGroups = styled.div<CurouselPropsTypes>`
    position: absolute;
    width:  100%;
  
`;


export const Button = styled.button<CurouselPropsTypes>`
    position: absolute;
    background: ${({theme}) => theme.colors.grayLight};
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    /* top: 10%;
    left: ${(props) => props.buttonType === 'prev' && 0}%;
    right: ${(props) => props.buttonType === 'next' && 0}%; */
    &:hover{
        background: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.white};
    }
    &:first-child{
        margin-right: 1rem;
    }
    svg{
        font-size: 18px;
    }
   z-index: 999;
`;

export const LeftArrow = styled(ArrowBackIosIcon)``;

export const RightArrow = styled(ArrowBackIosIcon)`
        transform: rotate(180deg);
`;