import React, { useEffect } from "react"
import './AiringToday.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAiringToday } from "../../redux/slices/tvSlice";
const AiringToday = () => {
const tvs = useSelector((state: RootState) => state.tvs.AiringToday); 
const dispatch = useDispatch()
const fetchAiringToday = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/tv/airing_today?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setAiringToday(jsonRes.results))
    
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}
useEffect(() => {
    fetchAiringToday()    
}, [])
return (
    <div className="pop_cont">
        <h2>Airing Today</h2>
        <div className="popular_list">
        {tvs.map((el) => (
            <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.name}</h2>
                <p>{el.vote_average}</p>
            </div>
        ))}
        </div>
    </div>
)
}
export default AiringToday 