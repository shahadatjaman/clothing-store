import React, { FC } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BalanceIcon from '@mui/icons-material/Balance';
import Button from './Button';
import { ProductButtons } from './Styles';

/* Define interface for props */
interface ButtonsPropsTypes {
  isHovered: boolean;
  _id: string;
}

const Buttons: FC<ButtonsPropsTypes> = (props) => {
  return (
    <ProductButtons isHovered={props.isHovered}>
      {/* Quick View Button */}
      <Button text="Quick View" element={<VisibilityIcon fontSize="small" />} />

      {/* Add To Favorite Button */}
      <Button
        text="You need to login"
        element={<FavoriteBorderIcon fontSize="small" />}
      />

      {/* Add To Compare Buton */}
      <Button
        text="Add to Compare"
        element={<BalanceIcon fontSize="small" />}
      />
    </ProductButtons>
  );
};

export default Buttons;
