import { useEffect, useState } from "react"
import { setPopular } from "../redux/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Genres from "../components/Genres/MovieGenres";

const Movies = () => {
    const [activeGenre, setActiveGenre] = useState(28)
    const [page, setPage] = useState(1)
    const movies = useSelector((state: RootState) => state.movies.popular);  
    const dispatch = useDispatch()
    const fetchMovies = async() => {
        try {
            const movieDatas = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=${page}`);
            const jsonData = await movieDatas.json();
            dispatch(setPopular(jsonData.results));
        } catch (error) {
            console.error("Failed to fetch movies by genre:", error);
        }
    }
    useEffect(() => {
        fetchMovies()    
    }, [])
return (
    <div>
        <h2>Movies</h2>
        <Genres 
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        page={page}
        setPage={setPage}
        />
        <div className="movie_list">
        {movies.map((el) => (
            <div key={el.id}>
                <img src= {`https://image.tmdb.org/t/p/w200${el.poster_path}`}/>
                <h2>{el.title}</h2>
                <p>{el.vote_average}</p>
            </div>
        ))}
        </div>
    </div>
)
}
export default Movies