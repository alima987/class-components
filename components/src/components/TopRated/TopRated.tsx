import React, { useEffect } from "react"
import './TopRated.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
const TopRated = () => {
const movies = useSelector((state: RootState) => state.movies.topRated); 
const dispatch = useDispatch()
const { data, error, isLoading } = useFetchTopRatedQuery({})
/*const fetchTopRated = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setTopRated(jsonRes.results))
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}*/
useEffect(() => {
    if(data) {
        dispatch(setTopRated(data.results))
    } 
    //fetchTopRated()    
}, [data, dispatch])
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load now playing movies.</div>;
return (
    <div className="top_cont">
        <h2>Top Rated Movies</h2>
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