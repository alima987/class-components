import React, { useEffect } from "react"
import './TopRated.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRated } from "../../redux/slices/movieSlice";
import { useFetchTopRatedQuery } from '../../services/movieApi'
import { setLoding } from "../../redux/slices/lodingSlice";
const TopRated = () => {
const movies = useSelector((state: RootState) => state.movies.topRated); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchTopRatedQuery({})

useEffect(() => {
    dispatch(setLoding(queryIsLoading))
    if(data) {
        dispatch(setTopRated(data.results))
    }    
}, [data, queryIsLoading, dispatch])
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