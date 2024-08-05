import React, { useEffect, useRef, useState } from "react";
import styles from './Slider.module.css';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { MovieData } from "../../redux/slices/movieSlice";

interface SliderProps {
  items: MovieData[];
  children: React.ReactNode;
}

const Slider = ({ items, children}: SliderProps) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [distance, setDistance] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (listRef.current && items.length) {
      const containerWidth = listRef.current.clientWidth;
      const itemWidth = (listRef.current.firstElementChild as HTMLElement)?.clientWidth || 0;
      const totalInViewport = Math.ceil(containerWidth / itemWidth);

      setContainerWidth(containerWidth);
      setTotalInViewport(totalInViewport);
    }
  }, [items]);

  const handleClick = (direction: "left" | "right") => {
    setIsMoved(true);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      setViewed(viewed - totalInViewport);
      setDistance(distance + containerWidth);
      if (listRef.current) {
        listRef.current.style.transform = `translate3d(${distance + containerWidth}px, 0, 0)`;
      }
    }
    if (direction === "right" && (viewed + totalInViewport) < items.length) {
      setSlideNumber(slideNumber + 1);
      setViewed(viewed + totalInViewport);
      setDistance(distance - containerWidth);
      if (listRef.current) {
        listRef.current.style.transform = `translate3d(${distance - containerWidth}px, 0, 0)`;
      }
    }
  };

  return (
    <div className={styles.top_cont}>
      <div className={styles.top_wrapper}>
        <MdArrowBackIos 
          className={`${styles.sliderArrow} ${styles.left}`}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div className={styles.toprated_list} ref={listRef}>
        {children}
        </div>
        <MdArrowForwardIos 
          className={`${styles.sliderArrow} ${styles.right}`}
          onClick={() => handleClick("right")}
          style={{ display: slideNumber >= Math.floor(items.length / totalInViewport) ? "none" : "block" }}
        />
      </div>
    </div>
  );
}

export default Slider;










