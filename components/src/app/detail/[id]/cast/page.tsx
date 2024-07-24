import React from "react";
import { DetailData } from "../../../../utils/interfaces";
import { DetailProps, getCastDetail } from "../page";

const FullCast = async ({ params }: DetailProps) => {
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