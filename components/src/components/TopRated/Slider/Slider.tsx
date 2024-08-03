import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import styles from './Slider.module.css'; 
interface CustomSliderProps {
  children: ReactNode
}
const CustomSlider = ({ children }: CustomSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default CustomSlider;







