"use client"
import React, { useEffect, useRef, useState } from "react"
import styles from './TopRated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
import { setLoading } from "../../redux/slices/lodingSlice";
import Link from "next/link";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const TopRated = () => {
  const movies = useSelector((state: RootState) => state.movies.topRated); 
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const dispatch = useDispatch();
  const { data, error, isLoading: queryIsLoading } = useFetchTopRatedQuery({});
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [distance, setDistance] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(setLoading(queryIsLoading));
    if (data) {
      dispatch(setTopRated(data.results));
    }

    if (listRef.current && movies.length) {
      const containerWidth = listRef.current.clientWidth;
      const itemWidth = (listRef.current.firstElementChild as HTMLElement)?.clientWidth || 0;
      const totalInViewport = Math.ceil(containerWidth / itemWidth);

      setContainerWidth(containerWidth);
      setTotalInViewport(totalInViewport);
    }
  }, [data, queryIsLoading, dispatch, movies]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load top-rated movies.</div>;

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
    if (direction === "right" && (viewed + totalInViewport) < movies.length) {
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
      <h2 className={styles.top_title}>Top Rated Movies</h2>
      <div className={styles.top_wrapper}>
        <MdArrowBackIos 
          className={`${styles.sliderArrow} ${styles.left}`}
          onClick={() => handleClick("left")}
          style={{ display: !isMoved ? "none" : "block" }}
        />
        <div className={styles.toprated_list} ref={listRef}>
          {movies.map((el) => (
            <div key={el.id} className={styles.toprated_item}>
              <Link href={`/detail/${el.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`} className={styles.toprated_image} />
                <h2 className={styles.toprated_title}>{el.title}</h2>
                <p className={styles.toprated_vote}>{el.vote_average}</p>
              </Link>
            </div>
          ))}
        </div>
        <MdArrowForwardIos 
          className={`${styles.sliderArrow} ${styles.right}`}
          onClick={() => handleClick("right")}
          style={{ display: slideNumber >= Math.floor(movies.length / totalInViewport) ? "none" : "block" }}
        />
      </div>
    </div>
  );
}

export default TopRated;
