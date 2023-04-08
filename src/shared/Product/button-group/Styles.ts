import styled from "styled-components";

/* Define interface for props */

interface ButtonsProps {
    isHovered : boolean;
  };
  
  /* Prodcut buttons Component */
  
  export const ProductButtons = styled.div<ButtonsProps>`
    position: absolute;
    max-width: 100%;
    top: 5%;
    right: 5%;
    display: flex;
    justify-content: end;
    flex-direction: column;
    opacity: ${(props) => props.isHovered ? 1 : 0 ?? 1};
    transition: all 0.2s ease-out;
  `;
  
  export const ProductButton = styled.button`
    border: none; 
    background: ${({theme}) => theme.colors?.white};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.2s linear;
    cursor: pointer;
    margin-bottom: 0.5rem;
    &:hover {
      // Add styles for hovered state
      background: ${({theme}) => theme.colors?.primary};
      color: ${({theme}) => theme.colors?.white};
    }
  `;