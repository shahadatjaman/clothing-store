import React from 'react';
import { Button, EmailWrapper, Form, Input } from './Styles';

const Enter__Email = () => {
  return (
    <EmailWrapper>
      <Form>
        <Input placeholder="Enter your e-email" />
        <Button>Join us</Button>
      </Form>
    </EmailWrapper>
  );
};

export default Enter__Email;
