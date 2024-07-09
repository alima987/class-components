import { useEffect } from "react"
import './Popular.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setMovie } from "../../redux/slices/movieSlice";
const Popular = () => {
const movies = useSelector((state: RootState) => state.movies.data); 
const dispatch = useDispatch()
const fetchPopular = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setMovie(jsonRes.results))
    
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}
useEffect(() => {
    fetchPopular()    
}, [])
return (
    <div className="pop_cont">
        <h2>Popular</h2>
        <div className="popular_list">
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
export default Popular