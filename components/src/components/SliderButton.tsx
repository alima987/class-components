import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface SlideButtonProps {
    onClick: () => void;
    type: 'prev' | 'next';
}
const SlideButton = ({ onClick, type }: SlideButtonProps) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
     <span>
        {type === 'prev' ? <MdArrowBackIos /> : <MdArrowForwardIos />}
    </span>
  </button>
);

export default SlideButton;