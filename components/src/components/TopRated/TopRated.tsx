import { useEffect } from "react"
import './TopRated.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setMovie } from "../../redux/slices/movieSlice";
const TopRated = () => {
const movies = useSelector((state: RootState) => state.movies.data); 
const dispatch = useDispatch()
const fetchTopRated = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setMovie(jsonRes.results))
    console.log(jsonRes.results)
    console.log(dispatch(setMovie(jsonRes.results)))
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}
useEffect(() => {
    fetchTopRated()    
}, [])
return (
    <div className="top_cont">
        <h2>Top Rated</h2>
        <div className="toprated_list">
        {movies.map((el) => (
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