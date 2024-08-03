import React from "react"
import Link from 'next/link'
import Search from "../Search"
import styles from './header.module.css'

const Header = () => {
return (
    <div className={styles.header}>
        <div className={styles.header_menu}>
        <Link href="/">
        <p className={styles.header_home}>Home</p>
        </Link>
        <Link href="/movies">
        <p className={styles.header_movies}>Movies</p>
        </Link>
        <Link href="/tv">
        <p className={styles.header_tvs}>TV Shows</p>
        </Link>
        </div>
        <Search />
    </div>
)
}
export default Header