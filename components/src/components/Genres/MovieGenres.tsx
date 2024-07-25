import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { setMovieGenre } from "../../redux/slices/genreSlice"
import { useFetchMovieGenreQuery } from "../../services/genreApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import styles from './movieGenres.module.css'
interface Props {
    setActiveGenre: (genre: number) => void;
}
const Genres = ({ setActiveGenre }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.movieGenre);
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const dispatch = useDispatch()
    const { data, error, isLoading: queryIsLoading } = useFetchMovieGenreQuery({})
    
    useEffect(() => {
        dispatch(setLoading(queryIsLoading))
        if(data) {
            dispatch(setMovieGenre(data.genres))
        }
    }, [data, queryIsLoading, dispatch])
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load movie genres.</div>;

return (
    <div className={styles.genres_container}>
       <div className={styles.genres_list}>
       {genres.map((genre) => (
        <div key={genre.id}>
            <button
            className={styles.genres_btn}
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