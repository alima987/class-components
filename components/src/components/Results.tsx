import React from "react";
import Search from "./Search";
import ErrorBtn from "./ErrorBtn";
import ErrorBoundary from "./ErrorBoundary";
export interface MoviesData {
    id: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    }
export default class Results extends React.Component {

    state = {
        moviesData: [], 
        term: '', 
        filteredMovies: []
    }

    handleSearch = (query: string) => {
        this.setState({term: query}, () => {
            this.filteredMovies()
            localStorage.setItem('search', JSON.stringify(query))
    })
    }
    componentDidMount(): void {
        const data = localStorage.getItem('search')
        const term = data ? JSON.parse(data) : ''
        this.setState({term}, () => {
            this.fetchData()
        })
    }
    fetchData = async() => {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5')
        const jsonRes = await res.json()
        this.setState({moviesData: jsonRes.results}, this.filteredMovies)
    }
    filteredMovies = () => {
        const {moviesData, term} = this.state
        const filtered = moviesData.filter((el: MoviesData) => el.title.toLowerCase().includes(term.toLowerCase()))
        this.setState({filteredMovies: filtered})
    }
    resetBtn = (): void => {
        localStorage.clear()
        this.setState({term: '', filteredMovies: this.state.moviesData})
    }
    render() {
        const {filteredMovies} = this.state
        return (
            <ErrorBoundary>
            <div>
                <Search onSearch={this.handleSearch}/>
                <ErrorBtn />
                <button onClick={this.resetBtn}>Clear search</button>
                <h2>Movies</h2>
                {filteredMovies.map((movie: MoviesData) => (
                 <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                    <p>{movie.overview}</p>
                    <p>{movie.popularity}</p>
                 </div>
                ))}
            </div>
            </ErrorBoundary>
        )
    }
}