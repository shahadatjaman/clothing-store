import { JSXElementConstructor, ReactElement, ReactNode, } from "react";

export interface ContainerPropsTypes {
    children: any;
    maxWidth?: 'xs'| 'sm'| 'md'| 'lg'| 'xl';
    fullWidth?: boolean;
}