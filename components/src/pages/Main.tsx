import Search from "../components/Search";
import ErrorBtn from "../components/ErrorBtn";
import ErrorBoundary from "../components/ErrorBoundary";
import NowPlaying from "../components/NowPlaying/NowPlaying";
import TopRated from "../components/TopRated/TopRated";
import AiringToday from "../components/AiringToday/AiringToday";
import TopRatedTv from "../components/TopRatedTv/TopRatedTv";
const Main = () => {
    
        return (
            <ErrorBoundary>
                <div className='movie-app'>
                <Search/>
                <ErrorBtn />
                <div className="movies_container">
                <div className="movies">
                <NowPlaying />
                <TopRated />
                <AiringToday />
                <TopRatedTv />
                </div>
                </div>
            </div>
            </ErrorBoundary>
        )
    }

    export default Main