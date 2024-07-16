import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'next/navigation';
import { RootState } from "../../../redux/store";
import { setLoading } from "../../../redux/slices/lodingSlice";
import { useFetchMovieDetailQuery } from "../../../services/detailApi";
import { setMovieDetail } from "../../../redux/slices/detailSlice";
import { GetStaticProps } from "next";
interface DetailPageProps {
    detail: {
        id: number,
        backdrop_path: string,
        budget: number,
        genres: { id: number, name: string }[],
        origin_country: string[],
        release_date: string,
        tagline: string,
        overview: string,
        vote_average: number,
        poster_path: string,
        title: string,
    };
  }
  /*async function getDetail( movieId: number |  string ) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`);
    return res.json();
  }*/
  
const DetailPage: React.FC<DetailPageProps> = ({ detail }) => {
    //const { movieId } = await getDetail(params.movieId);
    //const id = params.movieId ? parseInt(params.id as string, 10) : null; // Преобразуем id в число
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
    }, [data, queryIsLoading, dispatch, error]);*/

    //if (error) return <div>Failed to load detailed page.</div>;

    return (
        <div>
            {detail.title}
        </div>
    );
};

export default DetailPage;
export const getStaticProps: GetStaticProps<DetailPageProps> = async (context) => {
    const {data: detail} = await fetch(`https://api.themoviedb.org/3/movie/${context.params.movieId}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`).then((res) => res.json())
    return {
        props: {
            detail
        },
      };
  } 
