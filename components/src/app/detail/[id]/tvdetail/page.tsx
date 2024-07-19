import React from "react";
import {TVDetailData } from "../../../../utils/interfaces";
import Link from 'next/link'

export interface TVDetailProps {
    params: {
        id:TVDetailData['id'],
    }
  }

export async function getTVDetail( id:TVDetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getCastTVDetail( id:TVDetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getReviewTVDetail( id:TVDetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
const TVDetail = async ({ params }:TVDetailProps) => {
    const { id } = params
    const tv = await getTVDetail(id);
    const cast = await getCastTVDetail(id);
    const review = await getReviewTVDetail(id)
return (
    <section>
      <div>
        <p>{tv.name}</p>
        <img src= {`https://image.tmdb.org/t/p/w200${tv.poster_path}`}/>
        <span>{tv.vote_average}</span>
        <p>Year {tv.last_air_date ? tv.last_air_date.slice(0, 4) : 'Year not available'}</p>
        <span>Country {tv.origin_country}</span>
        <div>Genres {tv.genres && tv.genres.map((genre: { id: number; name: string}) => (
            <div key={genre.id}>
                <p>{genre.name}</p>
            </div>
        ))}
        </div>
        <p>Tagline {tv.tagline}</p>
        <span>Status {tv.status}</span>
        <p>Overview {tv.overview}</p>
      </div>
      <div>
      <div>
        {cast?.cast?.slice(0, 6).map((el:TVDetailData, index: number) => (
            <div key={`${el.id}-${index}`}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.profile_path} ? https://image.tmdb.org/t/p/w200${el.profile_path} : "Profile not available"`}/>
                <p>{el.name}</p>
                <p>{el.character}</p>
            </div>
        ))}</div>
    <Link href={`/detail/${id}/tvdetail/tvcast`}>{cast.cast.length} actors</Link>
      </div>
      <div>
      <div>
        {review.results.slice(0, 3).map((el:TVDetailData) => (
            <div key={el.id}>
                <p>{el.author}</p>
                <p>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                <p>{el.content}</p>
                <p>{el.rating}</p>
            </div>
        ))}
        </div>
        <Link href={`/detail/${id}/tvdetail/tvreview`}>{review.results.length} reviews</Link>
      </div>
    </section>
)
}
export default TVDetail