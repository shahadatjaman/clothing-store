import React, { FC, useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BalanceIcon from '@mui/icons-material/Balance';

import Button from './Button';
import Modal from '@/shared/Modal';

interface ButtonsProps {
  isHovered: boolean;
}

const Buttons: FC<ButtonsProps> = (props) => {
  const [modals, setModals] = useState({
    isOpenView: false,
    isOpenFavorite: false,
    isOpenCompare: false,
  });

  const quickViewHandler = () => {
    if (!modals.isOpenView) {
      setModals((prev) => {
        return { ...prev, isOpenView: true };
      });
    }
  };
  const closeModal = () => {
    if (modals.isOpenView) {
      setModals((prev) => {
        return { ...prev, isOpenView: false };
      });
    }
  };

  return (
    <>
      {/* Quick View Button */}
      <Button
        clickHandler={quickViewHandler}
        text="Quick View"
        element={<VisibilityIcon fontSize="small" />}
        isHovered={props.isHovered}
      />
      <Modal
        isOpen={modals.isOpenView}
        closeModal={closeModal}
        width={400}
        padding={1}
      >
        Hello
      </Modal>

      {/* Add To Favorite Button */}
      <Button
        text="You need to login"
        element={<FavoriteBorderIcon fontSize="small" />}
        isHovered={props.isHovered}
      />

      {/* Add To Compare Buton */}
      <Button
        text="Add to Compare"
        element={<BalanceIcon fontSize="small" />}
        isHovered={props.isHovered}
      />
    </>
  );
};

export default React.memo(Buttons);
