"use client"
import React, { useEffect } from "react"
import './NowPlaying.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { MovieData, setNowPlaying} from "../../redux/slices/movieSlice";
import { useFetchNowPlayingQuery } from "../../services/movieApi"; 
import { setLoading } from "../../redux/slices/lodingSlice";
import Link from 'next/link';


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
    <div className="nowPlay_cont">
        <h2>Now Playing</h2>
        <div className="nowPlay_list">
        {movies.map((el: MovieData) => (
            <div key={el.id}>
                <Link href={`/detail/${el.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt ={el.title}/>
                <h2>{el.title}</h2>
                <p>{el.vote_average}</p>
                </Link>
            </div>
        ))}
        </div>
    </div>
)
}
export default NowPlaying

