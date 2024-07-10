import { Link } from "react-router-dom"

const Header = () => {
return (
    <div>
        <Link to="/movies">
        <button>Movies</button>
        </Link>
        <Link to="/tv">
        <button>TV Shows</button>
        </Link>
    </div>
)
}
export default Header