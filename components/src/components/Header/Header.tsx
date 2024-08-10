"use client"
import React from "react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from "../Search/Search"
import styles from './header.module.css'

const Header = () => {
    const pathname = usePathname()
return (
    <div className={styles.header}>
    <div className={styles.header_menu}>
        <Link href="/">
            <p className={pathname === '/' ? styles.active : styles.header_home}>Home</p>
        </Link>
        <Link href="/movies">
            <p className={pathname === '/movies' ? styles.active : styles.header_movies}>Movies</p>
        </Link>
        <Link href="/tv">
            <p className={pathname === '/tv' ? styles.active : styles.header_tvs}>TV Shows</p>
        </Link>
    </div>
    <Search />
</div>
)
}
export default Header