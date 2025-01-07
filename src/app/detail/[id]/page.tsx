'use client'
import { DetailData } from "../../../utils/interfaces";
import Link from 'next/link'
import styles from './detail.module.css'
import { RxStarFilled } from "react-icons/rx";
import noPhoto from '../../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
import { DetailProps, getCastDetail, getMovieDetail, getReviewDetail } from "../../../utils/movieDetailApis";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { setMovieDetail,setCastDetail, setReviewDetail} from "../../../redux/slices/movieDetailSlice";

const DetailPage = ({params }:  DetailProps) => {
    const dispatch = useDispatch();
    const { id } = params
    const language = useSelector((state: RootState) => state.language.language);
    const movie = useSelector((state: RootState) => state.movieDetail.movie);
    const cast = useSelector((state: RootState) => state.movieDetail.cast);
    const review = useSelector((state: RootState) => state.movieDetail.review);
  
    useEffect(() => {
        const fetchData = async () => {
          const movieData = await getMovieDetail(id, language);
          const castData = await getCastDetail(id, language);
          const reviewData = await getReviewDetail(id, language);
          console.log(castData); 
          dispatch(setMovieDetail(movieData));
          dispatch(setCastDetail(castData.cast));
          dispatch(setReviewDetail(reviewData.results));
        };
    
        fetchData();
      }, [id, language, dispatch]);
  
    if (!movie || !cast || !review) {
      return <div>Loading...</div>;
    }

    return (
        <section className={styles.movie_detail_Container}>
            <p className={styles.movie_detail_title}>{movie.title}</p>
            <div className={styles.movie_detail}> 
                <div className={styles.movie_detail_img}>
                <img src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.movie_detail_img}/>
                <div className={styles.rate}>
                <RxStarFilled className={styles.star} />
                <span className={styles.movie_detail_vote}>{movie.vote_average}</span>
                </div>
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
        <p className={styles.movie_detail_value}>
            {movie.genres && movie.genres.length > 0 ? movie.genres.map((genre: { id: number; name: string }) => genre.name).join(', ') : 'Genres not available'}
        </p>
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
                <div className={styles.movie_cast_list}>{cast.slice(0, 6).map((el: DetailData, index: number) => (
                    <div key={`${el.id}-${index}`}>
                        <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : noPhoto.src} />
                        <p className={styles.movie_cast_name}>{el.name}</p>
                        <p className={styles.movie_cast_character}>{el.character}</p>
                    </div>
                ))}</div>
                <Link href={`/detail/${id}/cast`} className={styles.link_cast}>{cast.length} actors</Link>
            </div>
            <div className={styles.movie_review}>
                <div className={styles.movie_review_list}>
                    {review.slice(0, 3).map((el: DetailData) => (
                        <div key={el.id}>
                            <p className={styles.movie_review_author}>{el.author}</p>
                            <p className={styles.movie_review_year}>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                            <p className={styles.movie_review_content}>{el.content}</p>
                            <p className={styles.movie_review_rating}>{el.rating}</p>
                        </div>
                    ))}
                </div>
                <Link href={`/detail/${id}/review`} className={styles.link_review}>{review.length} reviews</Link>
            </div>
        </section>
    );
};

export default DetailPage;


