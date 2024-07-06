import { useEffect, useState } from "react"
import './TopRated.css'
export type TopRatedData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const TopRated = () => {
const [topRated, setTopRated] = useState<TopRatedData[]>([])
const fetchTopRated = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    setTopRated(jsonRes.results)
    } catch(error) {
        throw new Error
    }
}
useEffect(() => {
    fetchTopRated()    
}, [])
return (
    <div className="top_cont">
        <h2>Top Rated</h2>
        <div className="toprated_list">
        {topRated.map((el) => (
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
export default TopRated