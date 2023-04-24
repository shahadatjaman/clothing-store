import React, { useState } from 'react';
import { IconStyled, RightContent, RightIcon, RightIcons } from './Styles';
import DropdowModal from './DropdowModal';
import AddToCartItems from './Add__To_Cart__Items';
import MyAccount from './My_Account';

import { MenuItems } from './My_Account/data';

const Right__Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownName, setDropdownName] = useState('');

  const openDropdownHandler = (name: string): void => {
    if (isOpen) {
      setIsOpen(false);
      setDropdownName('');
    } else {
      setIsOpen(true);
      setDropdownName(name);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setDropdownName('');
  };

  return (
    <RightContent>
      <RightIcons>
        {/* ==== Add To Cart Content ==== */}

        <RightIcon>
          <IconStyled
            onClick={() => openDropdownHandler('cart')}
            className="fas fa-cart-plus"
            isOpen={dropdownName === 'cart'}
          ></IconStyled>

          {/* Add To cart Dropdown */}
          <DropdowModal
            closeHandler={closeDropdown}
            isOpen={dropdownName === 'cart'}
            height={590}
            padding={1}
          >
            <AddToCartItems />
          </DropdowModal>
        </RightIcon>

        {/* Add To Wish List Content */}

        <RightIcon onClick={() => openDropdownHandler('heart')}>
          <IconStyled
            isOpen={dropdownName === 'heart'}
            className="far fa-heart"
          />
        </RightIcon>
        {/* User Account Content */}
        <RightIcon>
          <IconStyled
            onClick={() => openDropdownHandler('account')}
            className="far fa-user"
            isOpen={dropdownName === 'account'}
          />
          {/* User Account Dropdown menu */}
          <DropdowModal
            closeHandler={closeDropdown}
            height={45 * MenuItems.length}
            isOpen={dropdownName === 'account'}
            padding={2}
          >
            <MyAccount />
          </DropdowModal>
        </RightIcon>
      </RightIcons>

      {/* Add To Wish list Dropdown */}
      <DropdowModal
        closeHandler={closeDropdown}
        isOpen={dropdownName === 'heart'}
        height={400}
        padding={1}
      >
        The Drop Down Menu for Heart
      </DropdowModal>
    </RightContent>
  );
};

export default Right__Content;
