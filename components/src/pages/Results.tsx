import { useEffect, useState } from "react";
import Search from "../components/Search";
import ErrorBtn from "../components/ErrorBtn";
import ErrorBoundary from "../components/ErrorBoundary";
import NowPlaying from "../components/NowPlaying/NowPlaying";
import Upcoming from "../components/Upcoming/Upcoming";
import Popular from "../components/Popular/Popular";
import TopRated from "../components/TopRated/TopRated";
import Genres from "../components/Genres/Genres";
const Results = () => {
    
    const [term, setTerm] = useState('')
    const [activeGenre, setActiveGenre] = useState(28)

    const handleSearch = (query: string) => {
        setTerm(query)
        localStorage.setItem('search', JSON.stringify(query))
    }
    useEffect(() => {
        const data = localStorage.getItem('search')
        const term = data ? JSON.parse(data) : ''
        setTerm(term)      
    }, [])
    
    //const filterMovies = moviesData.filter((el) => el.title.toLowerCase().includes(term.toLowerCase()))
        
    const resetBtn = (): void => {
        localStorage.clear()
        setTerm('')
    }
        return (
            <ErrorBoundary>
                <div className='movie-app'>
                <Search onSearch={handleSearch}/>
                <ErrorBtn />
                <button onClick={resetBtn}>Clear search</button>
                <div className="movies_container">
                <Genres />
                <div className="movies">
                <NowPlaying />
                <Upcoming />
                <TopRated />
                <Popular />
                </div>
                </div>
            </div>
            </ErrorBoundary>
        )
    }

    export default Results