import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { GenreData, setGenre } from "../../redux/slices/genreSlice"
import { setPopular } from "../../redux/slices/movieSlice";
interface Genre {
    id: number;
    name: string;
}
const Genres = () => {
    //const [page, setPage] = useState(1)
    const [activeGenre, setActiveGenre] = useState(28)
    const [page, setPage] = useState(1)
    const [currentGenre, setCurrentGenre] = useState('')
    const movies = useSelector((state: RootState) => state.movies.popular); 
    const genres = useSelector((state: RootState) => state.genres.genre); 
    const dispatch = useDispatch()

    const filterGenres = async () => { 
        try {
            const movieDatas = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=${page}`);
            const jsonData = await movieDatas.json();
            dispatch(setPopular(jsonData.results));
        } catch (error) {
            console.error("Failed to fetch movies by genre:", error);
        }
    };
    const fetchGenres = async() => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&&language=en-US`)
        const jsonRes = await res.json()
        dispatch(setGenre(jsonRes.genres))
        } catch(error) {
            console.error("Failed to fetch now playing movies:", error);
        }
    }
    useEffect(() => {
        fetchGenres() 
        filterGenres()   
    }, [activeGenre, page])
    

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