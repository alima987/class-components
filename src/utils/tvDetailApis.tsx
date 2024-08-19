import { TVDetailData } from "./interfaces";

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