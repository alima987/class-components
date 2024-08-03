"use client"
import React, { useEffect } from "react"
import styles from './TopRated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
import { setLoading } from "../../redux/slices/lodingSlice";
import MediaList from "../MediaList/MediaList";
import Slider from "./Slider/Slider";



const TopRated = () => {
const movies = useSelector((state: RootState) => state.movies.topRated); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchTopRatedQuery({})

useEffect(() => {
    dispatch(setLoading(queryIsLoading))
    if(data) {
        dispatch(setTopRated(data.results))
    }    
}, [data, queryIsLoading, dispatch])
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load now playing movies.</div>;

return (
    <div className={styles.top_cont}>
        <h2>Top Rated Movies</h2>
        <Slider>
        <MediaList 
        items={movies} 
        type="movie" 
        styles={{ 
            container: styles.top_cont, 
            list: styles.toprated_list, 
            img: styles.toprated_img, 
            title: styles.toprated_title,
            vote: styles.toprated_vote }} />
        </Slider>
    </div>
)
}
export default TopRated