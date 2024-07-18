import { DetailData } from "../../../../utils/interfaces";

export interface ReviewProps {
    params: {
        id: DetailData['id'],
    }
  }
export async function getReviewDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }

const FullReview = async({params}: ReviewProps) => {
    const { id } = params
    const review = await getReviewDetail(id)
    return (
        <div>
           <div>
           {review.results.map((el: DetailData) => (
                        <div key={el.id}>
                            <p>{el.author}</p>
                            <p>{el.created_at}</p>
                            <p>{el.content}</p>
                            <p>{el.rating}</p>
                        </div>
                    ))}
           </div>
        </div>
    )
}
export default FullReview