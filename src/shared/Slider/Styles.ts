import styled from "styled-components";

export const Wrapper = styled.div`
 width: 800px;
 height: 200px;
 background: #4377cc;
 position: relative;
 overflow: hidden;
`;

export const Container = styled.div`
 width: 100%;
`;

export const Row = styled.div`
 display: flex;
`;

interface ColumnsPropsTypes {
    width: number;
    isActive: boolean;
}



export const Column = styled.div<ColumnsPropsTypes>`
 width: ${(props) => props.width+'%'};
 color: #fff;
 border: 1px solid #fff;
 margin: 0 8px;
 display: ${(props) => props.isActive ? 'block' : 'none'};
//  &:first-child{
//     margin-left: 0;
//  }
//  &:last-child{
//     margin-right: 0;
//  }
`;

export const Buttons = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    bottom: 1%;
`;

// interface ButtonPropsTypes {
//     disabled: boolean;
// }

export const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #34588f;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: ${({theme}) => theme.colors.primary};
  }
`;