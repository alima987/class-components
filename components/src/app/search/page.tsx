"use client"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Link from 'next/link';
import styles from './search.module.css'
import noPhoto from '../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'

const SearchResults = () => {
    const search = useSelector((state: RootState) => state.search.search); 
return (
    <div className={styles.search}>
        <div className={styles.search_list}>
            {search.map((el) => {
                const isMovie = !!el.title;
                const detailLink = isMovie ? `/detail/${el.id}` : `/detail/${el.id}/tvdetail`;
                return (
                    <div key={el.id} className={styles.search_item}>
                        <Link href={detailLink}>
                                <div className={styles.search_poster}>
                                <img className={styles.search_img} src={el.poster_path ? `https://image.tmdb.org/t/p/w500${el.poster_path}` : noPhoto.src} alt={el.name || el.title} />
                                </div>
                                <div className={styles.search_text}>
                                <h2 className={styles.search_title}>{el.name || el.title}</h2>
                                <p className={styles.search_year}>{el.first_air_date ? el.first_air_date.slice(0, 4) : 'Year not available'}</p>
                                <p className={styles.search_overview}>{el.overview}</p>
                                <p className={styles.search_vote}>{el.vote_average}</p>
                                </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
);
}
export default SearchResults
