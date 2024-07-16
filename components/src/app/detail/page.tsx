 "use client"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setLoading } from "../../redux/slices/lodingSlice";
import { useFetchMovieDetailQuery } from "../../services/detailApi";
import { useParams } from 'next/navigation'
import { setMovieDetail } from "../../redux/slices/detailSlice";
export interface DetailData {
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
    }
const DetailPage = () => {
    const { id } = router.query;
    const [moviesData, setMoviesData] = useState<DetailData[]>([])
    //const details = useSelector((state: RootState) => state.details.movieDetail)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchMovieDetailQuery({movieId: params})

    useEffect(() => {
        fetchData()
        /*dispatch(setLoading(queryIsLoading))
        if (data) {
            console.log("Fetched data:", data)
            dispatch(setMovieDetail(data))
        } else if (error) {
            console.error("Failed to fetch movies:", error)
        }  */
    }, [ data, queryIsLoading, dispatch])

    const fetchData = async() => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=51ca1e241e720d72e2bb92a4b36859f5`)
        const jsonRes = await res.json()
        setMoviesData(jsonRes)
        } catch(error) {
            throw new Error
        }
    }
console.log(data)
if (error) return <div>Failed to load detailed page.</div>;

    return (
        <div>
        <div className="">
        {moviesData.map((details) =>(
            <div key={details.id}>
            <img src={`https://image.tmdb.org/t/p/w200${details.poster_path}`} alt={details.title} />
            <h2>{details.title}</h2>
            <p>{details.vote_average}</p>
        </div>
        )) }
        </div>
        </div>
    )
}
export default DetailPage
