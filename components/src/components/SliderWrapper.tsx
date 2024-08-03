import React, { ReactNode } from 'react'

interface SliderWrapperProps {
  children: ReactNode; 
}
const SliderWrapper = ({ children }: SliderWrapperProps) => (
  <div className="slider-wrapper">
    {children}
  </div>
);

export default SliderWrapper;