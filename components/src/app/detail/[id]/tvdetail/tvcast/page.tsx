import React from "react";
import { TVDetailData } from "../../../../../utils/interfaces";
import { getCastTVDetail, TVDetailProps } from "../page";

const FullTVCast = async ({ params }: TVDetailProps) => {
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