import React, { useState } from 'react';
import { Button, ButtonIcon, Categories, Icon, LeftContent } from './Styles';
import Dropdown from '@/shared/Dropdown';
import Dropdown__Menu from './Categories/Categories';
import { categories } from '../Header__Bottom/Categories/data';
import Navbar from './Navbar';

const Left__Content = () => {
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
    <LeftContent>
      {/*======= Categories Content ========*/}
      <Categories>
        <Button onClick={openHandler}>
          Categories
          {isOpen ? (
            <ButtonIcon className="fas fa-chevron-down fa-rotate-180" />
          ) : (
            <ButtonIcon className="fas fa-chevron-down" />
          )}
        </Button>
        <Dropdown
          isOpen={isOpen}
          closeHandler={cloesHandler}
          width={200}
          height={40 * categories.length}
          padding={1}
        >
          <Dropdown__Menu />
        </Dropdown>
      </Categories>

      {/*=======End of Categories Content ========*/}

      {/*======= Navbar Content ========*/}
      <Navbar />
      {/*======= End of Navbar Content ========*/}
    </LeftContent>
  );
};

export default Left__Content;
