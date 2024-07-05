import { useEffect, useState } from "react"
import './NowPlaying.css'
export type NowPlayData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const NowPlaying = () => {
const [nowPlay, setNowPlay] = useState<NowPlayData[]>([])
const fetchNowPlaying = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    setNowPlay(jsonRes.results)
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