import { DetailData } from "./interfaces";

export interface DetailProps {
    params: {
        id: DetailData['id'],
        language: string
    }
  }
  export async function getMovieDetail( id: DetailData['id'], language: string) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=${language}&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
  export async function getCastDetail( id: DetailData['id'], language: string) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=${language}&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
  export async function getReviewDetail( id: DetailData['id'], language: string) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=${language}&api_key=51ca1e241e720d72e2bb92a4b36859f5`, {
      next: { revalidate: 10 }, 
    });
    return res.json();
  }
