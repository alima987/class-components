"use client"
import React, { useEffect, useState } from "react"
import { setPopular } from "../../redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Genres from "../../components/Genres/MovieGenres";
import { useFetchPopularQuery } from '../../services/movieApi'
import { setLoading} from "../../redux/slices/lodingSlice";
import Link from 'next/link';
import Pagination from "../../components/Pagination";
import styles from './movies.module.css'

const Movies = () => {
    const [activeGenre, setActiveGenre] = useState(28)
    const [page, setPage] = useState(1)
    const movies = useSelector((state: RootState) => state.movies.popular);  
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchPopularQuery({genreId: activeGenre, page})
    
    useEffect(() => {
        dispatch(setLoading(queryIsLoading))
        if(data) {
            dispatch(setPopular(data.results))
        } 
    }, [activeGenre, page, data, queryIsLoading, dispatch])

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1); 
    };

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Failed to load movies.</div>;

return (
    <div>
        <h2>Movies</h2>
        <Genres 
        setActiveGenre={setActiveGenre}
        />
        <div className="movie_list">
        {movies.map((el) => (
            <div key={el.id}>
                <Link href={`/detail/${el.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.title}</h2>
                <p>{el.vote_average}</p>
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
export default Movies