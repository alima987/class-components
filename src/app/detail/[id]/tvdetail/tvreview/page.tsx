import { TVDetailData } from "../../../../../utils/interfaces";
import { getReviewTVDetail, TVDetailProps } from "../../../../../utils/tvDetailApis";
import styles from '../../review/review.module.css'

const FullTVReview = async({params}: TVDetailProps) => {
    const { id } = params
    const review = await getReviewTVDetail(id)
    return (
        <div className={styles.review}>
           <div className={styles.review_list}>
           {review.results.map((el: TVDetailData) => (
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