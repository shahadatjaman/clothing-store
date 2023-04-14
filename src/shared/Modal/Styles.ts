import styled,{keyframes} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

/* Define interface for props */
interface WrapperPropsTypes {
    isOpen: boolean
};

/* Modal Wrapper Styled */


export const Wrapper = styled.div<WrapperPropsTypes>`
    position: ${(props) => props.isOpen && "fixed"};
    width: ${(props) => props.isOpen ? "100%" : 0};
    height: ${(props) => props.isOpen ? "100" : 0}vh;
    background: ${(props) => props.isOpen && `rgba(22, 45, 61, 0.48)`};
    z-index: 999;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    visibility: ${(props) => !props.isOpen && "hidden"};
`;

/* Define interface for props */

interface ModalContentPropsTypes {
    width: number;
    isOpen: boolean;
};


// Define the animation using the keyframes function

const move = (isOpen : boolean) => keyframes`
 
  0% {
    transform: translateY(-50px);
  }
  100% {
    opacity: ${isOpen ? 1 : 0};
    display: ${isOpen ? 'flex' : 'none'};
  }
`;

/* Modal Content Styled */

export const ModalContent = styled.div<ModalContentPropsTypes>`
    color: #000;
    width: ${(props) => props.width && props.width}px;
    background: #fff;
    padding: 1.8rem;
    border-radius: 10px;
    box-shadow: var(
    --wsr-shadow40,
    0 8px 8px 0 rgba(22, 45, 61, 0.12),
    0 3px 24px 0 rgba(22, 45, 61, 0.18)
    );
    margin-top: ${(props) => props.isOpen ? '0' : '-100px'};
    opacity: ${(props) => props.isOpen ? 1 : 0};
    position: relative;
    animation: ${(props) => move(props.isOpen)} 0.2s ;
    animation-timing-function: ease-in;
`;

/* Modal Header Styled */

export const ModalHeader = styled.div`
  
`;

/* Modal Close Button Styled */

export const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: transparent;
    padding: 1rem;
    cursor: pointer;
    svg{
        color: #999999;
    }
    &:hover{
        svg{
            color: ${({theme}) => theme.colors.primary};
        }
    }
`;

/* Modal Modal close Icon Styled */

export const DismissIcon = styled(CloseIcon)``;


/* Modal Body Styled */

export const ModalBody = styled.div`
  margin-top: 2.5rem;
`;