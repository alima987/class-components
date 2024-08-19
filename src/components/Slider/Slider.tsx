import { useEffect, useRef, useState } from "react";
import styles from './slider.module.css';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { MovieData } from "../../redux/slices/movieSlice";
import { TVData } from "../../redux/slices/tvSlice";

interface SliderProps {
  items: MovieData[] | TVData[];
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
      const itemWidth = (listRef.current.querySelector('.item') as HTMLElement)?.clientWidth || 300;
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
      <>
        <MdArrowBackIos 
          className={`${styles.sliderArrow} ${styles.left}`}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div ref={listRef} className={styles.slider}>
        {children}
        </div>
        <MdArrowForwardIos 
          className={`${styles.sliderArrow} ${styles.right}`}
          onClick={() => handleClick("right")}
          style={{ display: slideNumber >= Math.floor(items.length / totalInViewport) ? "none" : "block" }}
        />
      </>
  );
}

export default Slider;










