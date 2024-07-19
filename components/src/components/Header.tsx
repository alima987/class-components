import React from "react"
import Link from 'next/link'
import Search from "./Search"

const Header = () => {
return (
    <div>
        <Search />
        <Link href="/">
        <button>Home</button>
        </Link>
        <Link href="/movies">
        <button>Movies</button>
        </Link>
        <Link href="/tv">
        <button>TV Shows</button>
        </Link>
    </div>
)
}
export default Header