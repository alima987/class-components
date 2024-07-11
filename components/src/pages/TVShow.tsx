import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTV } from "../redux/slices/tvSlice";
import TVGenres from "../components/Genres/TVGenres";
import { useFetchTVShowsQuery } from "../services/tvApi";

const TVShows = () => {
    const [activeTVGenre, setActiveTVGenre] = useState(10759)
    const [page, setPage] = useState(1)
    const tvs = useSelector((state: RootState) => state.tvs.tvs);  
    const dispatch = useDispatch()
    const { data, error, isLoading } = useFetchTVShowsQuery({tvGenreId: activeTVGenre, page})
    /*const fetchTVShows = async() => {
        try {
            const tvDatas = await fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${activeTVGenre}&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=${page}`);
            const jsonData = await tvDatas.json();
            dispatch(setTV(jsonData.results));
        } catch (error) {
            console.error("Failed to fetch movies by genre:", error);
        }
    }*/
    useEffect(() => {
        if(data) {
            dispatch(setTV(data. results))
        }
        //fetchTVShows()    
    }, [activeTVGenre, page, data, dispatch])

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load tv shows.</div>;

return (
    <div>
        <h2>TVShows</h2>
        <TVGenres 
        activeTVGenre={activeTVGenre}
        setActiveTVGenre={setActiveTVGenre}
        page={page}
        setPage={setPage}
        />
        <div>
            {tvs.map((tv) => (
                <div key={tv.id}>
                    <img src= {`https://image.tmdb.org/t/p/w200${tv.poster_path}`}/>
                    <h2>{tv.name}</h2>
                    <p>{tv.vote_average}</p>
                </div>
            ))}
        </div>
    </div>
)
}
export default TVShows