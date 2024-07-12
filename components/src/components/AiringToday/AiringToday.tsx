import React, { useEffect } from "react"
import './AiringToday.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAiringToday } from "../../redux/slices/tvSlice";
import { useFetchAiringTodayQuery } from "../../services/tvApi";
import { setLoding } from "../../redux/slices/lodingSlice";
const AiringToday = () => {
const tvs = useSelector((state: RootState) => state.tvs.AiringToday); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchAiringTodayQuery({})

useEffect(() => {
      dispatch(setLoding(queryIsLoading))
    if(data) {
      dispatch(setAiringToday(data.results))
    }    
}, [data, queryIsLoading, dispatch])

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load airing today tv shows. {error.toString()}</div>;

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