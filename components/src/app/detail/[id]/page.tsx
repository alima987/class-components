
import React from "react";
import { DetailData } from "../../../utils/interfaces";

export interface DetailProps {
    params: {
        id: DetailData['id'],
    }
  }
export async function getMovieDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }
  console.log(getMovieDetail)
const DetailPage = async ({ params }: DetailProps) => {
    const { id } = params
    const movie = await getMovieDetail(id);
    return (
        <div>
            <div className="movie_detail"> 
                <p>{movie.title}</p>
                <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                <p>{movie.vote_average}</p>
                <p>Year {movie.release_date ? movie.release_date.slice(0, 4) : 'Year not available'}</p>
                <p>Country {movie.origin_country}</p>
                <div>Genres {movie.genres && movie.genres.map((genre: { id: number; name: string}) => (
                    <div key={genre.id}>
                        <p>{genre.name}</p>
                    </div>
                ))}
                </div>
                <p>Tagline {movie.tagline}</p>
                <p>Budget ${movie.budget ? parseFloat(movie.budget).toLocaleString('en-US') : 'Budget not available'}</p>
                <p>Overview {movie.overview}</p>
            </div>
        </div>
    );
};
export default DetailPage;


