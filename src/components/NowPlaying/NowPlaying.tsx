"use client"
import React from "react"
import { useEffect } from "react"
import styles from './NowPlaying.module.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { MovieData, setNowPlaying} from "../../redux/slices/movieSlice";
import { useFetchNowPlayingQuery } from "../../services/movieApi"; 
import { setLoading } from "../../redux/slices/lodingSlice";
import { RxStarFilled } from "react-icons/rx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link"

const NowPlaying = () => {
const language = useSelector((state: RootState) => state.language.language);
const movies = useSelector((state: RootState) => state.movies.nowPlaying); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchNowPlayingQuery(language);
    
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
        <div className={styles.nowPlay_list}>
        <Carousel
          className={styles.carousel}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay={true}
          transitionTime={10}
          infiniteLoop={true}
        >
        {movies.map((el: MovieData) => (
            <div className={styles.nowPlay_item} key={el.id}>
                <Link href={`/detail/${el.id}`}>
                <div className={styles.nowPlay_poster}>
                <img className={styles.nowPlay_image} src= {`https://image.tmdb.org/t/p/original${el.backdrop_path}`} alt ={el.title}/>
                </div>
                <div className={styles.nowPlay_poster_details}>
                <h2 className={styles.nowPlay_title}>{el.title}</h2>
                <div className={styles.nowPlay_vote_details}>
                <RxStarFilled className={styles.icon}/>
                <p className={styles.nowPlay_vote}>{el.vote_average}</p>
                </div>
                </div>
                </Link>
            </div>
        ))}
        </Carousel>
        </div>
    </div>
)
}
export default NowPlaying


