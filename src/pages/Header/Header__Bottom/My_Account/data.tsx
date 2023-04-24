import { type } from 'os';
import {
  CompareIcon,
  LoginIcon,
  RegisterIcon,
  ShoppingIcon,
  WishIcon,
} from './Styles';
import { MenuTyeps } from '@/types/AccountDropPropsTypes';

export const MenuItems: MenuTyeps[] = [
  {
    name: 'Sign In',
    icon: <LoginIcon />,
    path: '/',
  },
  {
    name: 'Register',
    icon: <RegisterIcon />,
    path: '/',
  },
  {
    name: 'View Cart',
    icon: <ShoppingIcon />,
    path: '/',
  },
  {
    name: 'Wishlist',
    icon: <WishIcon />,
    path: '/',
  },
  {
    name: 'Compare',
    icon: <CompareIcon />,
    path: '/',
  },
];
