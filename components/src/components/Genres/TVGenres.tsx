import React, { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { setTVGenres } from "../../redux/slices/genreSlice";
interface Props {
    activeTVGenre: number;
    setActiveTVGenre: (genre: number) => void;
    page: number;
    setPage: (page: number) => void; 
}
const TVGenres = ({ activeTVGenre, setActiveTVGenre, page, setPage }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.tvGenres); 
    const dispatch = useDispatch()

    const fetchTVGenres = async() => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&&language=en-US`)
        const jsonRes = await res.json()
        dispatch(setTVGenres(jsonRes.genres))
        } catch(error) {
            console.error("Failed to fetch now playing movies:", error);
        }
    }
    useEffect(() => {
        fetchTVGenres()   
    }, [])
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