import React from "react";
import { TVDetailData } from "../../../../../utils/interfaces";

export interface TVReviewProps {
    params: {
        id: TVDetailData['id'],
    }
  }
  export async function getReviewTVDetail( id:TVDetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }

const FullTVReview = async({params}: TVReviewProps) => {
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