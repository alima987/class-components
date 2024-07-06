import { useEffect, useState } from "react"
export type GenresData = {
    id: number,
    name: string
    }
const Genres = () => {
    const [genres, setGenres] = useState<GenresData[]>([])
    const [page, setPage] = useState(1)
    const [activeGenre, setactiveGenre] = useState(28)
    const [movies, setMovies] = useState([])

    const filteredGenres = async() => {
        const data =  await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=51ca1e241e720d72e2bb92a4b36859f5&with_origin_country=IN&page=${page}`)
        const filteredData = await data.json()
        setMovies(movies.concat(filteredData.results))
    }
    const fetchGenres = async() => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=51ca1e241e720d72e2bb92a4b36859f5&with_origin_country=IN&&language=en-US`)
        const jsonRes = await res.json()
        if (jsonRes.genres) {
            setGenres(jsonRes.genres);
        } else {
            throw new Error('Неправильный формат данных от API');
        }
        } catch(error) {
            throw new Error
        }
    }
    useEffect(() => {
        fetchGenres()    
    }, [])
return (
    <div className="genres_container">
       <h2>Genres</h2>
       {genres.map((genre) => (
        <div key={genre.id}>
            <button
            onClick={() => setactiveGenre(genre.id)}>
                {genre.name}
            </button>
        </div>
       ))}
    </div>
)
}
export default Genres