'use client'
import { useEffect } from "react";
import { DetailData } from "../../../../utils/interfaces";
import { DetailProps, getReviewDetail } from "../../../../utils/movieDetailApis";
import styles from './review.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setCastDetail } from "../../../../redux/slices/movieDetailSlice";
import { RootState } from "../../../../redux/store";

const FullReview = ({params}: DetailProps) => {
    const { id } = params
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.language);
    const review = useSelector((state: RootState) => state.movieDetail.review);

    useEffect(() => {
        const fetchData = async () => {
         const reviewData = await getReviewDetail(id, language)
          dispatch(setCastDetail(reviewData.results));
        };
    
        fetchData();
      }, [id, language, dispatch]);
    return (
        <div className={styles.review}>
           <div className={styles.review_list}>
           {review.map((el: DetailData) => (
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
export default FullReview