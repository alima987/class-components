
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import { RootState } from "../../../redux/store";
import { setLoading } from "../../../redux/slices/lodingSlice";
import { useFetchMovieDetailQuery } from "../../../services/detailApi";
import { setMovieDetail } from "../../../redux/slices/detailSlice";
import { GetStaticProps } from "next";
import { MovieData } from "../../../redux/slices/movieSlice";
export interface DetailProps {
    params: {
        id: MovieData['id']
    }
  }
export async function getDetail( id: MovieData['id']) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();; 
  }
  
const DetailPage = async ({ params }: DetailProps) => {
    const { id } = params
    const movie = await getDetail(id)
    console.log(movie)
    //const details = useSelector((state: RootState) => state.details.movieDetail);
    //const dispatch = useDispatch();
    //const { data, error, isLoading: queryIsLoading } = useFetchMovieDetailQuery(movieId);
    /*useEffect(() => {
            dispatch(setLoading(queryIsLoading));
            if (data) {
                dispatch(setMovieDetail(data));
            } else if (error) {
                console.error("Failed to fetch movie:", error);
            }
    }, [data, queryIsLoading, dispatch, error]);

    if (error) return <div>Failed to load detailed page.</div>;*/
    
    return (
        <div>
            {movie.title}
        </div>
    );
};
export default DetailPage;
export async function generateStaticParams() {
        const response = await fetch(`http://localhost:3000/detail`);
        const posts = await response.json();
        return posts.map((post: { id: MovieData['id']; }) => ({ id: post.id }));
}

