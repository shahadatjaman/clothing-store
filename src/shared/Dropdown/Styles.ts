import { theme } from "@/theme/SCTheme";
import styled from "styled-components";

export const CartLayout = styled.div<{ref?: any}>`
 //position: relative;
`;

interface ContentPropsTypes {
    cartWidth?: number;
    isOpen: boolean;
    height?: number;
    padding?: number;
    right?: number,
    top?: number;
    ref?: any
};

export const CartContent = styled.div<ContentPropsTypes>`
    position: absolute;
    width: ${({cartWidth}) => cartWidth+'px' ? cartWidth+'px' : '320px' ?? '0px'};
    height: ${(props) => props.isOpen ? props.height+'px' : '0px' ?? '0px'};
    right: ${(props) => props.right ? props.right : '0' ?? '0'}%;
    top: ${(props) => props.top && props.top}%;
    background: #fff;
    transition: all 0.2s linear;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    z-index: 9;
    box-shadow: ${({theme}) => theme.shadow};
`;


export const ChildrenContent = styled.div<ContentPropsTypes>`
   padding: ${({padding}) => padding+'rem'};
`;
