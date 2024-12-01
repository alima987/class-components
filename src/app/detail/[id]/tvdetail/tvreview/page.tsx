'use client'
import { useDispatch, useSelector } from "react-redux";
import { TVDetailData } from "../../../../../utils/interfaces";
import { getReviewTVDetail, TVDetailProps } from "../../../../../utils/tvDetailApis";
import styles from '../../review/review.module.css'
import { RootState } from "../../../../../redux/store";
import { useEffect } from "react";
import { setTvReviewDetail } from "../../../../../redux/slices/tvDetailSlice";

const FullTVReview = ({params}: TVDetailProps) => {
    const { id } = params
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    const review = useSelector((state: RootState) => state.tvDetail.review);

    useEffect(() => {
        const fetchData = async () => {
         const reviewData = await getReviewTVDetail(id, language)
          dispatch(setTvReviewDetail(reviewData.results));
        };
    
        fetchData();
      }, [id, language, dispatch]);
    return (
        <div className={styles.review}>
           <div className={styles.review_list}>
           {review.map((el: TVDetailData) => (
                <div key={el.id} className={styles.review_item}>
                    <p className={styles.review_author}>{el.author}</p>
                    <p className={styles.review_year}>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                    <p className={styles.review_content}>{el.content}</p>
                    <p className={styles.movie_review_rating}>{el.rating}</p>
                </div>
            ))}
           </div>
        </div>
    )
}
export default FullTVReview