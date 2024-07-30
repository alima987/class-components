"use client"
import React, { useEffect, useState } from "react"
import { setPopular } from "../../redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Genres from "../../components/Genres/MovieGenres";
import { useFetchPopularQuery } from '../../services/movieApi'
import { setLoading} from "../../redux/slices/lodingSlice";
import Link from 'next/link';
import Pagination from "../../components/Pagination/Pagination";
import styles from './movies.module.css'
import { LiaStarSolid } from "react-icons/lia";

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

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load movies.</div>;

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1); 
    }

return (
    <div className={styles.movieContainer}>
        <h2 className={styles.movie_title}>Movies</h2>
        <Genres 
        setActiveGenre={setActiveGenre}
        />
        <div className={styles.movie_list}>
        {movies.map((el) => (
            <div key={el.id} className={styles.movie_list_item}>
                <Link href={`/detail/${el.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w500${el.poster_path}`} className={styles.movie_img}/>
                <div className={styles.movie_list_body}>
                <h5 className={styles.movie_list_title}>{el.title}</h5>
                <div className={styles.movie_list_rate}>
                <LiaStarSolid />
                <p className={styles.movie_list_vote}>{el.vote_average}</p>
                </div>
                </div>
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