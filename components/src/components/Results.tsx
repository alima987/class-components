import { useEffect, useState } from "react";
import Search from "./Search";
import ErrorBtn from "./ErrorBtn";
import ErrorBoundary from "./ErrorBoundary";
import NowPlaying from "./NowPlaying/NowPlaying";
import Upcoming from "./Upcoming/Upcoming";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Genres from "./Genres/Genres";
const Results = () => {
    
    const [term, setTerm] = useState('')

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
                <div className="genres">
                    <Genres />
                </div>
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