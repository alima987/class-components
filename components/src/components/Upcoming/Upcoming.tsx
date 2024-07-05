import { useEffect, useState } from "react"
import './Upcoming.css'
export type UpcomingData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const Upcoming = () => {
const [upcoming, setUpcoming] = useState<UpcomingData[]>([])
const fetchUpcoming = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    setUpcoming(jsonRes.results)
    } catch(error) {
        throw new Error
    }
}
useEffect(() => {
    fetchUpcoming()    
}, [])
return (
    <div className="upcom_cont">
        <h2>Upcoming</h2>
        <div className="upcom_list">
        {upcoming.map((el) => (
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
export default Upcoming