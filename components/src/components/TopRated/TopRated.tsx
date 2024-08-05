"use client"
import React, { useEffect } from "react"
import styles from './TopRated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
import { setLoading } from "../../redux/slices/lodingSlice";
import Link from "next/link";
import Slider from '../Slider/Slider';

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
    <div className={styles.top_cont}>
      <h2 className={styles.top_title}>Top Rated Movies</h2>
      <div className={styles.top_wrapper}>
      <Slider items={movies}>
      <div className={styles.toprated_list}>
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
        </Slider>
      </div>
    </div>
  );
}

export default TopRated;
