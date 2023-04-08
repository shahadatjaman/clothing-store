import { Box } from '@mui/material';
import Product from '@/shared/Product';
import img from '../../public/shirt.webp';
import Dropdown from '@/shared/Dropdown';
import { Button } from '@/shared/Button';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Box m={40}>
      {/* <Product
        _id="1"
        title="Plaid Cotton Oxford Shirt"
        image={
          'https://res.cloudinary.com/dza2t1htw/image/upload/v1680775656/SkinnyFitStretchMeshPolo_600x_nf6btx.webp'
        }
        price={14}
        rating={2}
      /> */}

      <Button onClick={() => openHandler()} variant="contained" color="primary">
        Click
      </Button>
      <Dropdown
        paddding={4}
        isOpen={isOpen}
        width={350}
        cloesHandler={() => ''}
        height={400}
      >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Dropdown>
    </Box>
  );
}
