 "use client"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setLoading } from "../../redux/slices/lodingSlice";
import { useFetchMovieDetailQuery } from "../../services/detailApi";
import { useParams } from 'next/navigation'
import { setMovieDeatail } from "../../redux/slices/detailSlice";

const DetailPage = () => {
    const { id } = useParams() 
    const details = useSelector((state: RootState) => state.details.movieDetail)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchMovieDetailQuery({movieId: id})

    useEffect(() => {
        dispatch(setLoading(queryIsLoading))
        if(data) {
            dispatch(setMovieDeatail(data))
        } else if (error) {
            console.error("Failed to fetch movies:", error)
        }  
    }, [id, data, queryIsLoading, dispatch])

if (error) return <div>Failed to load detailed page.</div>;

    return (
        <div>
        <div className="">
        {details && details.length > 0 ? details.map((detail) => (
            <div key={detail.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${detail.poster_path}`}/>
                <h2>{detail.title}</h2>
                <p>{detail.vote_average}</p>
            </div>
        )) : <p>No details available</p>}
        </div>
        </div>
    )
}
export default DetailPage