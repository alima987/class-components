import { useEffect} from "react"
import './Upcoming.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setUpcoming } from "../../redux/slices/movieSlice";
const Upcoming = () => {
const movies = useSelector((state: RootState) => state.movies.upcoming); 
const dispatch = useDispatch()
const fetchUpcoming = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setUpcoming(jsonRes.results))
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}
useEffect(() => {
    fetchUpcoming()    
}, [])
return (
    <div className="upcom_cont">
        <h2>Upcoming</h2>
        <div className="upcom_list">
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
export default Upcoming