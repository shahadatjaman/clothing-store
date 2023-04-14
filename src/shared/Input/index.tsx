import React, { FC } from 'react';
import { InputFieldPropsTypes } from '@/types/InputFieldPropsTypes';

import {
  InputField,
  InputContent,
  Label,
  LabelContent,
  Wrapper,
} from './Styles';

const Input: FC<InputFieldPropsTypes> = (props) => {
  const { label, name, placeHolder, value, changeHandler } = props;
  return (
    <Wrapper>
      {label && (
        <LabelContent>
          <Label>{label}</Label>
        </LabelContent>
      )}

      <InputContent>
        <InputField
          name={name}
          placeholder={placeHolder}
          onChange={changeHandler}
          value={value}
        />
      </InputContent>
    </Wrapper>
  );
};

export default Input;
