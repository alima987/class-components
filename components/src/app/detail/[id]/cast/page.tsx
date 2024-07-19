import React from "react";
import { DetailData } from "../../../../utils/interfaces";

export interface CastProps {
    params: {
        id: DetailData['id'],
    }
  }
  export async function getCastDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }

const FullCast = async ({ params }: CastProps) => {
    const { id } = params
    const cast = await getCastDetail(id)
    return (
        <div>
        <div>{cast?.cast?.map((el: DetailData, index: number) => (
                <div key={`${el.id}-${index}`}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.profile_path} ? https://image.tmdb.org/t/p/w200${el.profile_path} : "Profile not available"`}/>
                <p>{el.name}</p>
                <p>{el.character}</p>
            </div>
                ))}</div>
        </div>
    )
}
export default FullCast