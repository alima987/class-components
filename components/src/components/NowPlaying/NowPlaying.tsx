"use client"
import React, { useEffect } from "react"
import styles from './NowPlaying.module.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { setNowPlaying} from "../../redux/slices/movieSlice";
import { useFetchNowPlayingQuery } from "../../services/movieApi"; 
import { setLoading } from "../../redux/slices/lodingSlice";
import MediaList from "../MediaList/MediaList"

const NowPlaying = () => {
const movies = useSelector((state: RootState) => state.movies.nowPlaying); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchNowPlayingQuery({});
    
useEffect(() => {
    dispatch(setLoading(queryIsLoading))
    if(data) {
        dispatch(setNowPlaying(data.results))
    } 
}, [data, queryIsLoading, dispatch])
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load now playing movies.</div>;
return (
    <div className={styles.nowPlay_cont}>
        <h2>Now Playing</h2>
        <MediaList items={movies} type="movie" styles={{ 
            container: styles.nowPlay_cont, 
            list: styles.nowPlay_list, 
            img: styles.nowPlay_img, 
            title: styles.nowPlay_title,
            vote: styles.nowPlay_vote }} />
    </div>
)
}
export default NowPlaying

