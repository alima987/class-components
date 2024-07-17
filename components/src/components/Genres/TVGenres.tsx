import React, { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { setTVGenres } from "../../redux/slices/genreSlice";
import { useFetchTVGenreQuery } from "../../services/genreApi";
import { setLoading } from "../../redux/slices/lodingSlice";
interface Props {
    activeTVGenre: number;
    setActiveTVGenre: (genre: number) => void;
    page: number;
    setPage: (page: number) => void; 
}
const TVGenres = ({ activeTVGenre, setActiveTVGenre, page, setPage }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.tvGenres); 
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchTVGenreQuery({})
    
    useEffect(() => {
        dispatch(setLoading(queryIsLoading))
        if(data) {
            dispatch(setTVGenres(data.genres))
        }
    }, [data, queryIsLoading, dispatch])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load tv genres.</div>;

return (
    <div>
      <h2>TV Genres</h2>
      <div>
        {genres.map((genre) => (
            <div key={genre.id}>
            <button
            onClick={() => setActiveTVGenre(genre.id)}>
                {genre.name}
            </button>
        </div>
        ))}
      </div>
    </div>
)
}
export default TVGenres