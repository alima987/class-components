import React from "react";
import { TVDetailData } from "../../../../../utils/interfaces";
import { getReviewTVDetail, TVDetailProps } from "../page";

const FullTVReview = async({params}: TVDetailProps) => {
    const { id } = params
    const review = await getReviewTVDetail(id)
    return (
        <section>
           <div>
           {review.results.map((el: TVDetailData) => (
                <div key={el.id}>
                    <p>{el.author}</p>
                    <p>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                    <p>{el.content}</p>
                    <p>{el.rating}</p>
                </div>
            ))}
           </div>
        </section>
    )
}
export default FullTVReview