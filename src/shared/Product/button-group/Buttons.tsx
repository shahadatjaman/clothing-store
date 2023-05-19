import React, { FC, useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BalanceIcon from '@mui/icons-material/Balance';

import Button from './Button';
import { useModal } from '@/hook/useModal';
import Modal from '@/shared/Modal';

interface ButtonsProps {
  isHovered: boolean;
}

const Buttons: FC<ButtonsProps> = (props) => {
  const { closeModal, isOpen, openModal, id } = useModal();
  return (
    <>
      {/* Quick View Button */}
      <Button
        clickHandler={() => openModal(0)}
        text="Quick View"
        element={<VisibilityIcon fontSize="small" />}
        isHovered={props.isHovered}
      />
      {id === 0 && (
        <Modal isOpen={isOpen} closeModal={closeModal} width={400} padding={1}>
          Quick view
        </Modal>
      )}

      {/* Add To Favorite Button */}
      <Button
        text="You need to login"
        clickHandler={() => openModal(1)}
        element={<FavoriteBorderIcon fontSize="small" />}
        isHovered={props.isHovered}
      />

      {id === 1 && (
        <Modal isOpen={isOpen} closeModal={closeModal} width={400} padding={1}>
          Logon before add to wish list
        </Modal>
      )}

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
