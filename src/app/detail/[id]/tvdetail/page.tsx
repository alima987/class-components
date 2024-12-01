'use client'
import {TVDetailData } from "../../../../utils/interfaces";
import Link from 'next/link'
import styles from '../detail.module.css'
import { RxStarFilled } from "react-icons/rx";
import noPhoto from '../../../../../public/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
import { getCastTVDetail, getReviewTVDetail, getTVDetail, TVDetailProps } from "../../../../utils/tvDetailApis";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { setTvCastDetail, setTvDetail, setTvReviewDetail } from "../../../../redux/slices/tvDetailSlice";

const TVDetail = ({ params }:TVDetailProps) => {
    const dispatch = useDispatch();
    const { id } = params
    const language = useSelector((state: RootState) => state.language.language);
    const tv = useSelector((state: RootState) => state.tvDetail.tv);
    const cast = useSelector((state: RootState) => state.tvDetail.cast);
    const review = useSelector((state: RootState) => state.tvDetail.review);

    useEffect(() => {
      const fetchData = async () => {
        const tvData = await getTVDetail(id, language);
        const castData = await getCastTVDetail(id, language);
        const reviewData = await getReviewTVDetail(id, language)
        console.log(castData); 
        dispatch(setTvDetail(tvData));
        dispatch(setTvCastDetail(castData.cast));
        dispatch(setTvReviewDetail(reviewData.results));
      };
  
      fetchData();
    }, [id, language, dispatch]);

  if (!tv || !cast || !review) {
    return <div>Loading...</div>;
  }
return (
    <section className={styles.movie_detail_Container}>
       <p className={styles.movie_detail_title}>{tv.name}</p>
      <div className={styles.movie_detail}>
        <div className={styles.movie_detail_img}>
           <img src={tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : noPhoto.src}  className={styles.movie_detail_img}/>
           <div className={styles.rate}>
                <RxStarFilled className={styles.star} />
                <span className={styles.movie_detail_vote}>{tv.vote_average}</span>
                </div>
        </div>
        <div className={styles.movie_detail_info}>
          <div className={styles.movie_detail_item}>
            <p className={styles.movie_detail_label}>Year:</p>
            <p className={styles.movie_detail_value}>{tv.last_air_date ? tv.last_air_date.slice(0, 4) : 'Year not available'}</p>
          </div>
          <div className={styles.movie_detail_item}>
             <p className={styles.movie_detail_label}>Country:</p>
             <p className={styles.movie_detail_value}>{tv.origin_country || 'Country not available'}</p>
          </div>
          <div className={styles.movie_detail_item}>
               <p className={styles.movie_detail_label}>Genres:</p>
               <p className={styles.movie_detail_value}>
            {tv.genres && tv.genres.length > 0 ? tv.genres.map((genre: { id: number; name: string }) => genre.name).join(', ') : 'Genres not available'}
               </p>
          </div>
          <div className={styles.movie_detail_item}>
               <p className={styles.movie_detail_label}>Tagline:</p>
               <p className={styles.movie_detail_value}>{tv.tagline || 'Tagline not available'}</p>
           </div>
         <div className={styles.movie_detail_item}>
              <p className={styles.movie_detail_label}>Status:</p>
              <p className={styles.movie_detail_value}>{tv.status || 'Budget not available'}</p>
          </div>
        <div className={styles.movie_detail_item}>
              <p className={styles.movie_detail_label}>Overview:</p>
               <p className={styles.movie_detail_value}>{tv.overview || 'Overview not available'}</p>
        </div>
        </div>
      </div>
      <div className={styles.movie_cast}>
      <div className={styles.movie_cast_list}>
        {cast.slice(0, 6).map((el:TVDetailData, index: number) => (
            <div key={`${el.id}-${index}`}>
                <img 
                  src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : noPhoto.src} 
                  alt={el.name || 'No Image Available'}
                />
                <p className={styles.movie_cast_name}>{el.name}</p>
                <p className={styles.movie_cast_character}>{el.character}</p>
            </div>
        ))}</div>
    <Link href={`/detail/${id}/tvdetail/tvcast`} className={styles.link_cast}>{cast.length} actors</Link>
      </div>
      <div className={styles.movie_review}>
      <div className={styles.movie_review_list}>
        {review.slice(0, 3).map((el:TVDetailData) => (
            <div key={el.id}>
                <p className={styles.movie_review_author}>{el.author}</p>
                <p className={styles.movie_review_year}>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                <p className={styles.movie_review_content}>{el.content}</p>
                <p className={styles.movie_review_rating}>{el.rating}</p>
            </div>
        ))}
        </div>
        <Link href={`/detail/${id}/tvdetail/tvreview`} className={styles.link_review}>{review.length} reviews</Link>
      </div>
    </section>
)
}
export default TVDetail