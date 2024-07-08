import React, { useEffect, useState } from "react"
import './NowPlaying.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
export type NowPlayData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const NowPlaying = () => {
const {id, overview, vote_average, title, poster_path} = useSelector((state: RootState) => state.movie)
const dispatch = useDispatch()
    
//const [nowPlay, setNowPlay] = useState<NowPlayData[]>([])
const fetchNowPlaying = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const data = await res.json()

    //setNowPlay(jsonRes.results)
    } catch(error) {
        throw new Error
    }
}
useEffect(() => {
    fetchNowPlaying()    
}, [])
return (
    <div className="nowPlay_cont">
        <h2>Now Playing</h2>
        <div className="nowPlay_list">
        {nowPlay.map((el) => (
            <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.title}</h2>
                <p>{el.vote_average}</p>
            </div>
        ))}
        </div>
    </div>
)
}
export default NowPlaying