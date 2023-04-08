import { ReactNode } from "react";

export interface DropdownPropsTypes {
    children?: ReactNode;
    isOpen: boolean;
    cloesHandler: ()=> {},
    width: number;
    height: number;
    element?: ReactNode;
    paddding: number;
};