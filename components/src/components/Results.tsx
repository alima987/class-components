import { Component } from "react";
import Search from "./Search";
export interface MoviesData {
    id: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    }
export default class Results extends Component {

    state = {moviesData: [], term: '', filteredMovies: []}

    handleSearch = (query: string) => {
        this.setState({term: query})
    }
    filteredMovies = () => {
        const {moviesData, term} = this.state
        const filtered = moviesData.filter((el: MoviesData) => el.title.toLowerCase().includes(term.toLowerCase()))
        this.setState({filteredMovies: filtered})
    }
    componentDidMount(): void {
        const fetchData = async() => {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51ca1e241e720d72e2bb92a4b36859f5')
            const jsonRes = await res.json()
            this.setState({moviesData: jsonRes.results})
        }
    
        fetchData()
    }
    render() {
        const {filteredMovies} = this.state
        console.log(filteredMovies)
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
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
        )
    }
}