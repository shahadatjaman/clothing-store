import styled from 'styled-components';

export const BransItems = styled.div`
  margin-top: 2rem;
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  padding: 78px;
  border-color: rgb(233, 231, 231);
  border-radius: 6px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
