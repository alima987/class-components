import React from "react";
import { DetailData } from "../../../../utils/interfaces";
import { DetailProps, getReviewDetail } from "../page";

const FullReview = async({params}: DetailProps) => {
    const { id } = params
    const review = await getReviewDetail(id)
    return (
        <div>
           <div>
           {review.results.map((el: DetailData) => (
                        <div key={el.id}>
                            <p>{el.author}</p>
                            <p>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                            <p>{el.content}</p>
                            <p>{el.rating}</p>
                        </div>
                    ))}
           </div>
        </div>
    )
}
export default FullReview