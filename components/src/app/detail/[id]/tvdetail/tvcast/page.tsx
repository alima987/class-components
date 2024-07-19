import React from "react";
import { TVDetailData } from "../../../../../utils/interfaces";


export interface TVCastProps {
    params: {
        id: TVDetailData['id'],
    }
  }
  export async function getCastTVDetail( id: TVDetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
const FullTVCast = async ({ params }: TVCastProps) => {
    const { id } = params
    const cast = await getCastTVDetail(id)
    return (
        <div>
        <div>{cast?.cast?.map((el: TVDetailData, index: number) => (
                <div key={`${el.id}-${index}`}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.profile_path} ? https://image.tmdb.org/t/p/w200${el.profile_path} : "Profile not available"`}/>
                <p>{el.name}</p>
                <p>{el.character}</p>
            </div>
                ))}</div>
        </div>
    )
}
export default FullTVCast