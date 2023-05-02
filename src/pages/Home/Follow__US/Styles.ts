import styled from "styled-components";


export const Item = styled.div`
 position: relative;
   &:hover{
     div{
       opacity: 1;
     }
   }
`;

export const HoveredContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 28px;
    opacity: 0;
    cursor: pointer;
    transition: all 0.5s;
`;