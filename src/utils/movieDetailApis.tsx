import { DetailData } from "./interfaces";

export interface DetailProps {
    params: {
        id: DetailData['id'],
    }
  }
  export async function getMovieDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
  export async function getCastDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
  export async function getReviewDetail( id: DetailData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
