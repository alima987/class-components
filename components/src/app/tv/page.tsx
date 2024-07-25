"use client"
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTV } from "../../redux/slices/tvSlice";
import TVGenres from "../../components/Genres/TVGenres";
import { useFetchTVShowsQuery } from "../../services/tvApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import Link from 'next/link';
import Pagination from "../../components/Pagination";
import { MovieContext } from "../../context/MovieContext";

const TVShows = () => {
    const { activeTVGenre, setActiveTVGenre, handlePageChange } = useContext(MovieContext)
    const [page, setPage] = useState<number>(1)
    const tvs = useSelector((state: RootState) => state.tvs.tvs);  
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchTVShowsQuery({tvGenreId: activeTVGenre, page})

    useEffect(() => {
        dispatch(setLoading(queryIsLoading))
        if(data) {
            dispatch(setTV(data. results))
        }    
    }, [activeTVGenre, page, data, queryIsLoading, dispatch])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load tv shows.</div>;

return (
    <div>
        <h2>TVShows</h2>
        <TVGenres 
        setActiveTVGenre={setActiveTVGenre}
        />
        <div>
            {tvs.map((tv) => (
                <div key={tv.id}>
                    <Link href={`/detail/${tv.id}/tvdetail`}>
                    <img src= {`https://image.tmdb.org/t/p/w200${tv.poster_path}`}/>
                    <h2>{tv.name}</h2>
                    <p>{tv.vote_average}</p>
                    </Link>
                </div>
            ))}
        </div>
        <Pagination
            pageCount={10} 
            onPageChange={handlePageChange}
            />
    </div>
)
}
export default TVShows