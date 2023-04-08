import styled from "styled-components";
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@material-ui/core/Button'), {
  ssr: false,
});

export const StyledButton = styled(Button)`
 height: 40px;
`;