import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 20px;
`;

export const LabelContent = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
    font-size: 14px;
    color: #191919;
    font-family: ${({theme}) => theme.fontFamily.hind ?? theme.fontFamily.sansSerif };
    font-weight: 500;
    padding-bottom: 4px;
`;

export const InputContent = styled.div``;

export const InputField = styled.input`
    padding-top: 2px;
    padding-bottom: 1px;
    line-height: 2.9;
    height: 40px;
    border-radius: 6px;
    background: #f7f8fa;
    font-size: 14px;
    border: 1px solid #f7f8fa;
    padding: 11px 12px 10px 15px;
    font-family: 'Hind', sans-serif;
    box-shadow: none;
    outline: none;
    color: #777777;
    transition: all 0.2s linear;
    display: block;
    width: 100%;
    &:focus{
        border: ${({theme}) => '1px solid' + theme.colors.primary};
        border-radius: 6px;
    }
`;