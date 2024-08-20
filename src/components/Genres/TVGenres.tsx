import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { setTVGenres } from "../../redux/slices/genreSlice";
import { useFetchTVGenreQuery } from "../../services/genreApi";
import { setLoading } from "../../redux/slices/lodingSlice";
import styles from './movieGenres.module.css'
interface Props {
    setActiveTVGenre: (genre: number) => void;
    activeTVGenre: number;
}
const TVGenres = ({ setActiveTVGenre, activeTVGenre}: Props) => {
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
    <div className={styles.genres_container}>
      <div className={styles.genres_list}>
        {genres.map((genre) => (
            <div key={genre.id}>
            <button
             className={`${styles.genres_btn} ${activeTVGenre === genre.id ? styles.active_btn : ''}`}
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