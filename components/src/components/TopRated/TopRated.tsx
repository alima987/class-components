"use client"
import React, { useEffect } from "react"
import styles from '../styles/moviesTvs.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
import { setLoading } from "../../redux/slices/lodingSlice";
import Slider from '../Slider/Slider';
import MediaList from "../MediaList/MediaList";

const TopRated = () => {
  const movies = useSelector((state: RootState) => state.movies.topRated); 
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const dispatch = useDispatch();
  const { data, error, isLoading: queryIsLoading } = useFetchTopRatedQuery({});

  useEffect(() => {
    dispatch(setLoading(queryIsLoading));
    if (data) {
      dispatch(setTopRated(data.results));
    }
  }, [data, queryIsLoading, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load top-rated movies.</div>;

  return (
    <div className={styles.cont}>
      <h2 className={styles.title}>Top Rated Movies</h2>
      <div className={styles.wrapper}>
      <Slider items={movies}>
      <div className={styles.list}>
      <MediaList
          items={movies}
          type="movie"
          styles={{
            imageContainer: styles.image_cont,
            info: styles.info,
            item: styles.item,
            img: styles.image,
            title: styles.item_title,
            vote: styles.vote,
          }}
        />
        </div>
        </Slider>
      </div>
    </div>
  );
}

export default TopRated;
