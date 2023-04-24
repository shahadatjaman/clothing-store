import styled from 'styled-components';

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SmallImageWrapper = styled.div`
  width: 48%;
  position: relative;
`;

export const CenteredButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonPropsTypes {
  isHovered: boolean;
}

export const ButtonStyled = styled.div<ButtonPropsTypes>`
  background: #ffffffd9;
  padding: 1rem 3rem;
  border-radius: 10px;
  background: ${({ isHovered, theme }) =>
    isHovered ? theme.colors.primary : '#ffffffd9'};
  color: ${({ theme, isHovered }) =>
    isHovered ? theme?.colors.white : theme?.colors.black};
  transition: all 0.2s;
`;


export const Bottom__Image = styled.div`
 position: relative;
 cursor: pointer;

`;