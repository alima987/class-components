import React, { useEffect } from "react"
import './NowPlaying.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { MovieData, setNowPlaying} from "../../redux/slices/movieSlice";
import { useFetchNowPlayingQuery } from "../../services/movieApi"; 

const NowPlaying = () => {
const movies = useSelector((state: RootState) => state.movies.nowPlaying); 
const dispatch = useDispatch()
const { data, error, isLoading } = useFetchNowPlayingQuery({});
    
/*const fetchNowPlaying = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const data = await res.json()
    dispatch(setNowPlaying(data.results))
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}*/
useEffect(() => {
    if(data) {
        dispatch(setNowPlaying(data.results))
    } 
    //fetchNowPlaying()    
}, [data, dispatch])
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load now playing movies.</div>;
return (
    <div className="nowPlay_cont">
        <h2>Now Playing</h2>
        <div className="nowPlay_list">
        {movies.map((el: MovieData) => (
            <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt ={el.title}/>
                <h2>{el.title}</h2>
                <p>{el.vote_average}</p>
            </div>
        ))}
        </div>
    </div>
)
}
export default NowPlaying

