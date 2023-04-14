import styled from "styled-components";


  /* Prodcut buttons Component */
  
  export const ProductButtons = styled.div`
    position: absolute;
    max-width: 100%;
    top: 5%;
    right: 5%;
    display: flex;
    justify-content: end;
    flex-direction: column;
    transition: all 0.2s ease-out;
  `;
  
  /* Define interface for props */

  interface ButtonProps {
    isHovered : boolean;
  };

  export const ProductButton = styled.button<ButtonProps>`
    border: none; 
    background: ${({theme}) => theme.colors?.white};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.2s linear;
    cursor: pointer;
    margin-bottom: 0.5rem;
    display: ${(props) => props.isHovered ? 'block' : 'none'};
    &:hover {
      // Add styles for hovered state
      background: ${({theme}) => theme.colors?.primary};
      color: ${({theme}) => theme.colors?.white};
    }
  `;