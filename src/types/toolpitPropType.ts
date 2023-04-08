import { ReactElement } from "react";

export interface ToolpitPropsType {
    text: string;
    placement: 'left-start' | 'top-start' | 'top' | 'top-end' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end';
    children?: ReactElement
}