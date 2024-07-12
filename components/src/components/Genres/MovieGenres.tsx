import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { setMovieGenre } from "../../redux/slices/genreSlice"
import { useFetchMovieGenreQuery } from "../../services/genreApi";
import { setLoding } from "../../redux/slices/lodingSlice";
interface Props {
    activeGenre: number;
    setActiveGenre: (genre: number) => void;
    page: number;
    setPage: (page: number) => void; 
}
const Genres = ({ activeGenre, setActiveGenre, page, setPage }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.movieGenre);
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchMovieGenreQuery({})
    
    useEffect(() => {
        dispatch(setLoding(queryIsLoading))
        if(data) {
            dispatch(setMovieGenre(data.genres))
        }
    }, [data, queryIsLoading, dispatch])
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load movie genres.</div>;

return (
    <div className="genres_container">
       <h2>Genres</h2>
       <div>
       {genres.map((genre) => (
        <div key={genre.id}>
            <button
            onClick={() => setActiveGenre(genre.id)}>
                {genre.name}
            </button>
        </div>
       ))}
       </div>
       </div>
)
}
export default Genres