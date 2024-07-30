import React from "react";
import { DetailData } from "../../../utils/interfaces";
import Link from 'next/link'
import styles from './detail.module.css'

export interface DetailProps {
    params: {
        id: DetailData['id'],
    }
  }
export async function getMovieDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getCastDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getReviewDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }

const DetailPage = async ({ params }: DetailProps) => {
    const { id } = params
    const movie = await getMovieDetail(id);
    const cast = await getCastDetail(id)
    const review = await getReviewDetail(id)
    return (
        <section className={styles.movie_detail_Container}>
            <p className={styles.movie_detail_title}>{movie.title}</p>
            <div className={styles.movie_detail}> 
                <div className={styles.movie_detail_img}>
                <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.movie_detail_img}/>
                <span className={styles.movie_detail_vote}>{movie.vote_average}</span>
                </div>
                <div className={styles.movie_detail_info}>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Year:</p>
        <p className={styles.movie_detail_value}>{movie.release_date ? movie.release_date.slice(0, 4) : 'Year not available'}</p>
    </div>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Country:</p>
        <p className={styles.movie_detail_value}>{movie.origin_country || 'Country not available'}</p>
    </div>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Genres:</p>
        <div className={styles.movie_detail_genres}>
            {movie.genres && movie.genres.length > 0 ? movie.genres.map((genre: { id: number; name: string}) => (
                <p key={genre.id} className={styles.movie_detail_value}>{genre.name}</p>
            )) : 'Genres not available'}
        </div>
    </div>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Tagline:</p>
        <p className={styles.movie_detail_value}>{movie.tagline || 'Tagline not available'}</p>
    </div>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Budget:</p>
        <p className={styles.movie_detail_value}>${movie.budget ? parseFloat(movie.budget).toLocaleString('en-US') : 'Budget not available'}</p>
    </div>
    <div className={styles.movie_detail_item}>
        <p className={styles.movie_detail_label}>Overview:</p>
        <p className={styles.movie_detail_value}>{movie.overview || 'Overview not available'}</p>
    </div>
</div>
            </div>
            <div className={styles.movie_cast}>
                <div className={styles.movie_cast_list}>{cast?.cast?.slice(0, 6).map((el: DetailData, index: number) => (
                    <div key={`${el.id}-${index}`}>
                        <img src= {`https://image.tmdb.org/t/p/w500${el.profile_path} ? https://image.tmdb.org/t/p/w500${el.profile_path} : "Profile not available"`}/>
                        <p>{el.name}</p>
                        <p>{el.character}</p>
                    </div>
                ))}</div>
                <Link href={`/detail/${id}/cast`}>{cast.cast.length} actors</Link>
            </div>
            <div className={styles.movie_review}>
                <div>
                    {review.results.slice(0, 3).map((el: DetailData) => (
                        <div key={el.id}>
                            <p>{el.author}</p>
                            <p>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                            <p>{el.content}</p>
                            <p>{el.rating}</p>
                        </div>
                    ))}
                </div>
                <Link href={`/detail/${id}/review`}>{review.results.length} reviews</Link>
            </div>
        </section>
    );
};
export default DetailPage;


