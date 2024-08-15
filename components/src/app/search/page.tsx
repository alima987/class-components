"use client"
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Link from 'next/link';
import styles from './search.module.css';
import noPhoto from '../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';
import { LiaStarSolid } from "react-icons/lia";

interface SearchItem {
    id: string; 
    title?: string;
    name?: string;
    poster_path?: string;
    first_air_date?: string;
    overview: string;
    vote_average: number;
}
const SearchResults = () => {
    const search = useSelector((state: RootState) => state.search.search);

    return (
        <div className={styles.search}>
            <div className={styles.search_list}>
                {search.map((el: SearchItem) => {
                    const isMovie = !!el.title;
                    const detailLink = isMovie ? `/detail/${el.id}` : `/detail/${el.id}/tvdetail`;
                    return (
                        <SearchItemComponent key={el.id} el={el} detailLink={detailLink} />
                    );
                })}
            </div>
        </div>
    );
};

const SearchItemComponent = ({ el, detailLink }: { el: SearchItem; detailLink: string }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(prev => !prev);
    };

    const overviewText = el.overview || '';

    return (
        <div className={styles.search_item}>
            <Link href={detailLink} className={styles.search_link}>
                <div className={styles.search_poster}>
                    <img className={styles.search_img} src={el.poster_path ? `https://image.tmdb.org/t/p/w500${el.poster_path}` : noPhoto.src} alt={el.name || el.title} />
                </div>
                <div className={styles.search_text}>
                    <h2 className={styles.search_title}>{el.name || el.title}</h2>
                    <p className={styles.search_year}>{el.first_air_date ? el.first_air_date.slice(0, 4) : 'Year not available'}</p>
                    <p className={styles.search_overview}>
                        {showMore ? overviewText : `${overviewText.substring(0, 100)}...`}
                    </p>
                    <p className={styles.see_more_btn} onClick={handleToggle}>
                        {showMore ? 'See Less' : 'See More'}
                    </p>
                    <div className={styles.search_rate}>
                    <LiaStarSolid className={styles.star}/>
                    <p className={styles.search_vote}>{el.vote_average}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};


export default SearchResults;


