import { ReactNode } from "react";

export interface ModalPropsTypes {
    isOpen: boolean;
    closeModal: ()=> any;
    width: number;
    padding: number;
    children: ReactNode;
}