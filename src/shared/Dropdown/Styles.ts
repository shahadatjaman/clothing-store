import styled from "styled-components";

export const CartLayout = styled.div`
 position: relative;
 margin-top: 1rem;

`;

interface ContentPropsTypes {
    cartWidth?: number;
    isOpen: boolean;
    height?: number;
    padding?: number;
};

export const CartContent = styled.div<ContentPropsTypes>`
 position: absolute;
 width: ${({cartWidth}) => cartWidth+'px' ? cartWidth+'px' : '320px' ?? '320px'};
 height: ${(props) => props.isOpen ? props.height+'px' : '0px' ?? '0px'};
 background: #fff;
 transition: all 0.2s linear;
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);

`;


export const ChildrenContent = styled.div<ContentPropsTypes>`
padding: ${({padding, isOpen}) => isOpen ? padding+'rem' : '0rem'};
`;
