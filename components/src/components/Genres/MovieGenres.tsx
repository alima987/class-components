import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { setMovieGenre } from "../../redux/slices/genreSlice"
interface Props {
    activeGenre: number;
    setActiveGenre: (genre: number) => void;
    page: number;
    setPage: (page: number) => void; 
}
const Genres = ({ activeGenre, setActiveGenre, page, setPage }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.movieGenre); 
    const dispatch = useDispatch()
    const fetchGenres = async() => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&&language=en-US`)
        const jsonRes = await res.json()
        dispatch(setMovieGenre(jsonRes.genres))
        } catch(error) {
            console.error("Failed to fetch now playing movies:", error);
        }
    }
    useEffect(() => {
        fetchGenres()   
    }, [])
    

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