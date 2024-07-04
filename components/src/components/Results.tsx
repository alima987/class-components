import React, { useEffect, useState } from "react";
import Search from "./Search";
import ErrorBtn from "./ErrorBtn";
import ErrorBoundary from "./ErrorBoundary";
export type MoviesData = {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
const Results = () => {

    const [moviesData, setMoviesData] = React.useState<MoviesData[]>([])
    const [term, setTerm] = useState('')
    //const [filteredMovies, setFilteredMovies] = useState([])

    const handleSearch = (query: string) => {
        setTerm(query)
        localStorage.setItem('search', JSON.stringify(query))
    }
    useEffect(() => {
        fetchData()  
        const data = localStorage.getItem('search')
        const term = data ? JSON.parse(data) : ''
        setTerm(term)      
    }, [])
    const fetchData = async() => {
        try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5&page=1')
        const jsonRes = await res.json()
        setMoviesData(jsonRes.results)
        } catch(error) {
            throw new Error
        }
    }
    const filterMovies = moviesData.filter((el) => el.title.toLowerCase().includes(term.toLowerCase()))
        
    const resetBtn = (): void => {
        localStorage.clear()
        setTerm('')
    }
        return (
            <ErrorBoundary>
            <div>
                <Search onSearch={handleSearch}/>
                <ErrorBtn />
                <button onClick={resetBtn}>Clear search</button>
                <h2>Movies</h2>
                <div className="movies_container">
                {filterMovies.map((movie: MoviesData) => (
                 <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}/10</p>
                 </div>
                ))}
                </div>
            </div>
            </ErrorBoundary>
        )
    }

    export default Results