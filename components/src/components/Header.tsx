import React from "react"
import Link from 'next/link'

const Header = () => {
return (
    <div>
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