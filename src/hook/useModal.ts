import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);

  const openModal = (_modalId: any) => {
    setIsOpen(true);
    setId(_modalId);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow = 'hidden';
    } else {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow = 'scroll';
    }
  });

  return { isOpen, openModal, closeModal, id };
};
