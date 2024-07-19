
import React from "react";
import { DetailData } from "../../../utils/interfaces";
import Link from 'next/link'

export interface DetailProps {
    params: {
        id: DetailData['id'],
    }
  }
export async function getMovieDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getCastDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  export async function getReviewDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }

const DetailPage = async ({ params }: DetailProps) => {
    const { id } = params
    const movie = await getMovieDetail(id);
    const cast = await getCastDetail(id)
    const review = await getReviewDetail(id)
    return (
        <section>
            <div className="movie_detail"> 
                <p>{movie.title}</p>
                <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                <span>{movie.vote_average}</span>
                <p>Year {movie.release_date ? movie.release_date.slice(0, 4) : 'Year not available'}</p>
                <span>Country {movie.origin_country}</span>
                <div>Genres {movie.genres && movie.genres.map((genre: { id: number; name: string}) => (
                    <div key={genre.id}>
                        <p>{genre.name}</p>
                    </div>
                ))}
                </div>
                <p>Tagline {movie.tagline}</p>
                <span>Budget ${movie.budget ? parseFloat(movie.budget).toLocaleString('en-US') : 'Budget not available'}</span>
                <p>Overview {movie.overview}</p>
            </div>
            <div className="cast_detail">
                <div>{cast?.cast?.slice(0, 6).map((el: DetailData, index: number) => (
                    <div key={`${el.id}-${index}`}>
                        <img src= {`https://image.tmdb.org/t/p/w200${el.profile_path} ? https://image.tmdb.org/t/p/w200${el.profile_path} : "Profile not available"`}/>
                        <p>{el.name}</p>
                        <p>{el.character}</p>
                    </div>
                ))}</div>
                <Link href={`/detail/${id}/cast`}>{cast.cast.length} actors</Link>
            </div>
            <div>
                <div>
                    {review.results.slice(0, 3).map((el: DetailData) => (
                        <div key={el.id}>
                            <p>{el.author}</p>
                            <p>{el.created_at ? el.created_at.slice(0, 10) : 'Year not available'}</p>
                            <p>{el.content}</p>
                            <p>{el.rating}</p>
                        </div>
                    ))}
                </div>
                <Link href={`/detail/${id}/review`}>{review.results.length} reviews</Link>
            </div>
        </section>
    );
};
export default DetailPage;


