import React, { useEffect, useState } from "react"
import './Popular.css'
export type PopularData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const Popular = () => {
const [popular, setPopular] = useState<PopularData[]>([])
const fetchPopular = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    setPopular(jsonRes.results)
    } catch(error) {
        throw new Error
    }
}
useEffect(() => {
    fetchPopular()    
}, [])
return (
    <div className="pop_cont">
        <h2>Popular</h2>
        <div className="popular_list">
        {popular.map((el) => (
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
export default Popular