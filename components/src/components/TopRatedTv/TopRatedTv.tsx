import React, { useEffect} from "react"
import './TopRatedTv.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRatedTv } from "../../redux/slices/tvSlice";
import { useFetchTopRatedTVQuery } from "../../services/tvApi";
import { setLoding } from "../../redux/slices/lodingSlice";
const TopRatedTv = () => {
const tvs = useSelector((state: RootState) => state.tvs.TopRatedTv); 
const isLoading = useSelector((state: RootState) => state.loading.isLoading)
const dispatch = useDispatch()
const { data, error, isLoading: queryIsLoading } = useFetchTopRatedTVQuery({})

useEffect(() => {
    dispatch(setLoding(queryIsLoading))
    if(data) {
        dispatch(setTopRatedTv(data.results))
    }
}, [data, queryIsLoading, dispatch])

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load top rated tv shows.</div>;

return (
    <div className="upcom_cont">
        <h2>Top Rated TV Shows</h2>
        <div className="upcom_list">
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
export default TopRatedTv