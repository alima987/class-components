import React from 'react';
import Link from 'next/link';
import Slider from '../TopRated/Slider/Slider';
interface MediaItem {
    id: string,
    vote_average: number,
    poster_path: string,
    backdrop_path: string,
    name?: string;
    title?: string;
}

interface MediaListProps {
    items: MediaItem[];
    type: 'movie' | 'tv';
    styles: {
        container: string;
        list: string;
        img: string;
        title: string;
        vote: string;
    };
}

const MediaList = ({ items, type, styles }: MediaListProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {items.map((item) => (
                    <div key={item.id}>
                        <Link href={`/detail/${item.id}/${type === 'tv' ? 'tvdetail' : ''}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.name || item.title} className={styles.img}/>
                            <h2 className={styles.title}>{item.name || item.title}</h2>
                            <p className={styles.vote}>{item.vote_average}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaList;
