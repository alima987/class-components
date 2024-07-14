"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SearchResults = () => {
    const [searchResult, setSearchResult] = useState('')
    const search = useSelector((state: RootState) => state.search.search); 
return (
    <div>
        <h2>Search {}</h2>
        <div>
            {search.map((el) => (
                <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.name || el.title}</h2>
                <p>{el.first_air_date ? el.first_air_date.slice(0, 4) : 'Year not available'}</p>
                <p>{el.vote_average}</p>
                </div>
            ))}
        </div>
    </div>
)
}
export default SearchResults