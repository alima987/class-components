import React, { useEffect} from "react"
import './TopRatedTv.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTopRatedTv } from "../../redux/slices/tvSlice";
import { useFetchTopRatedTVQuery } from "../../services/tvApi";
const TopRatedTv = () => {
const tvs = useSelector((state: RootState) => state.tvs.TopRatedTv); 
const dispatch = useDispatch()
const { data, error, isLoading } = useFetchTopRatedTVQuery({})
/*const fetchTopRatedTv = async() => {
    try {
    const res = await fetch('https://api.themoviedb.org/3/tv/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
    const jsonRes = await res.json()
    dispatch(setTopRatedTv(jsonRes.results))
    } catch(error) {
        console.error("Failed to fetch now playing movies:", error);
    }
}*/
useEffect(() => {
    if(data) {
        dispatch(setTopRatedTv(data.results))
    }
    //fetchTopRatedTv()    
}, [data, dispatch])

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