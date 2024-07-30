"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTV } from "../../redux/slices/tvSlice";
import TVGenres from "../../components/Genres/TVGenres";
import { useFetchTVShowsQuery } from "../../services/tvApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import Link from 'next/link';
import Pagination from "../../components/Pagination/Pagination";
import styles from './tv.module.css'

const TVShows = () => {
    const [activeTVGenre, setActiveTVGenre] = useState(10759)
    const [page, setPage] = useState(1)
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
    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1); 
    }
  
return (
    <div className={styles.tvContainer}>
        <h2 className={styles.tv_title}>TVShows</h2>
        <TVGenres 
        setActiveTVGenre={setActiveTVGenre}
        />
        <div className={styles.tv_list} >
            {tvs.map((tv) => (
                <div key={tv.id} className={styles.tv_list_item}>
                    <Link href={`/detail/${tv.id}/tvdetail`}>
                    <img src= {`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className={styles.tv_img}/>
                    <h5 className={styles.tv_list_title}>{tv.name}</h5>
                    <p className={styles.tv_list_vote}>{tv.vote_average}</p>
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