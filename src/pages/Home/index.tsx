import { Button } from '@/shared/Button';
import Modal from '@/shared/Modal';
import { useState } from 'react';

import React from 'react';
import Hero_Section from './Hero_section';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cloesHandler = () => {
    setIsOpen(false);
  };

  const openHandler = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Hero_Section />
    </>
  );
};

export default Home;
